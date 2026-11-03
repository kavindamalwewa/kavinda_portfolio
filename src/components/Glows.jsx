/**
 * Soft colour orbs drifting down the page behind every section. Purely
 * decorative; the drift stops under prefers-reduced-motion (index.css).
 */
const ORBS = [
  { top: '1%', side: { left: '-12%' }, size: '58vw', tone: 1, anim: 'A', duration: 17, delay: 0 },
  { top: '13%', side: { right: '-14%' }, size: '52vw', tone: 2, anim: 'B', duration: 21, delay: -6 },
  { top: '31%', side: { left: '18%' }, size: '50vw', tone: 3, anim: 'C', duration: 19, delay: -3 },
  { top: '49%', side: { right: '-10%' }, size: '58vw', tone: 1, anim: 'A', duration: 23, delay: -11 },
  { top: '67%', side: { left: '-14%' }, size: '54vw', tone: 2, anim: 'B', duration: 18, delay: -8 },
  { top: '85%', side: { right: '8%' }, size: '52vw', tone: 3, anim: 'C', duration: 22, delay: -2 },
]

export default function Glows() {
  return (
    <div className="glows" aria-hidden="true">
      {ORBS.map((orb) => (
        <span
          key={orb.top}
          className="glow"
          data-tone={orb.tone}
          data-anim={orb.anim}
          style={{
            top: orb.top,
            ...orb.side,
            width: `max(${orb.size}, 380px)`,
            height: `max(${orb.size}, 380px)`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
