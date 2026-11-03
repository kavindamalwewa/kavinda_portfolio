/**
 * Page-scroll plumbing shared by the motion hook, the nav menu and the
 * project dialog. Lenis only exists when motion is allowed, so every helper
 * falls back to plain browser scrolling.
 */
let lenis = null
const lockOwners = new Set()

function applyLock() {
  const locked = lockOwners.size > 0
  document.body.style.overflow = locked ? 'hidden' : ''
  if (lenis) {
    if (locked) lenis.stop()
    else lenis.start()
  }
}

/** Called by the motion hook when Lenis is created (and with null on teardown). */
export function setLenis(instance) {
  lenis = instance
  if (lenis && lockOwners.size > 0) lenis.stop()
}

/** Freeze page scrolling while `owner` (a dialog, a menu) is open. */
export function lockScroll(owner) {
  lockOwners.add(owner)
  applyLock()
}

export function unlockScroll(owner) {
  if (!lockOwners.delete(owner)) return
  applyLock()
}

/** Respects a reduced-motion preference; Lenis is never created under it. */
export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0)
    return
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
}
