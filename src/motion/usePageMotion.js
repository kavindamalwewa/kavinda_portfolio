import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { setLenis } from './scroll'

gsap.registerPlugin(ScrollTrigger)

/**
 * All page choreography lives here, keyed off data attributes so components
 * only mark *what* moves:
 *
 *   data-hero-wipe / -img / -word / -fade          intro timeline
 *   data-hero-stage + data-hero-shift               portrait parallax
 *   data-reveal     fades up once on enter
 *   data-stagger    its children fade up in sequence
 *   data-words      [data-word] children brighten as you scroll
 *   data-line       hairline draws left → right with scroll
 *   data-count      number counts up (text is restored exactly afterwards)
 *   data-band       contact band widens into place
 *
 * Under prefers-reduced-motion nothing is registered — no Lenis, no hidden
 * start states — so the page renders in its final, readable state. Start
 * states are only ever set from JS, so content is visible without it too.
 */
export default function usePageMotion(scopeRef) {
  useLayoutEffect(() => {
    const scope = scopeRef.current
    if (!scope) return undefined

    const q = (selector) => gsap.utils.toArray(selector, scope)
    const mm = gsap.matchMedia(scope)

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Smooth scrolling, stepped by GSAP's ticker so ScrollTrigger stays in sync.
      const lenis = new Lenis({ anchors: true })
      lenis.on('scroll', ScrollTrigger.update)
      const raf = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)
      setLenis(lenis)

      // ── intro ──
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo(
          '[data-hero-wipe]',
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.inOut' },
          0,
        )
        .from('[data-hero-img]', { scale: 1.25, duration: 2.4, ease: 'power2.out' }, 0)
        .from(
          '[data-hero-word]',
          { yPercent: 115, duration: 1, stagger: 0.08, ease: 'power4.out' },
          0.25,
        )
        .from('[data-hero-fade]', { y: 20, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, 0.8)

      gsap.fromTo(
        '[data-hero-shift]',
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-hero-stage]',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )

      // ── scroll reveals ──
      q('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 44,
          autoAlpha: 0,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        })
      })

      q('[data-stagger]').forEach((el) => {
        gsap.from(el.children, {
          y: 56,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: el, start: 'top 84%', once: true },
        })
      })

      q('[data-words]').forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll('[data-word]'),
          { opacity: 0.18 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 55%', scrub: true },
          },
        )
      })

      q('[data-line]').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 60%', scrub: true },
          },
        )
      })

      // Count up, then put the original text back character for character.
      const restoreText = []
      q('[data-count]').forEach((el) => {
        const original = el.textContent
        const match = /^(\D*)(\d+)(.*)$/.exec(original)
        if (!match) return
        const [, prefix, digits, suffix] = match
        const format = (n) => `${prefix}${String(Math.round(n)).padStart(digits.length, '0')}${suffix}`
        const counter = { value: 0 }

        el.textContent = format(0)
        restoreText.push(() => {
          el.textContent = original
        })
        gsap.to(counter, {
          value: Number(digits),
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = format(counter.value)
          },
          onComplete: () => {
            el.textContent = original
          },
        })
      })

      q('[data-band]').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0% 7% 0% 7% round 160px)' },
          {
            clipPath: 'inset(0% 0% 0% 0% round 28px)',
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 55%', scrub: true },
          },
        )
      })

      // Web fonts and "Show more" change the page height after setup, which
      // would leave every trigger below them firing at stale positions.
      let refreshTimer
      const resizeObserver = new ResizeObserver(() => {
        clearTimeout(refreshTimer)
        refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 160)
      })
      resizeObserver.observe(scope)

      return () => {
        clearTimeout(refreshTimer)
        resizeObserver.disconnect()
        restoreText.forEach((restore) => restore())
        gsap.ticker.remove(raf)
        gsap.ticker.lagSmoothing(500, 33)
        lenis.destroy()
        setLenis(null)
      }
    })

    return () => mm.revert()
  }, [scopeRef])
}
