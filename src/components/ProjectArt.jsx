/**
 * Generated cover art, used until a real screenshot is dropped in.
 * Set `cover` on a project (e.g. '/projects/room-design.jpg') and the
 * photo takes over; if it fails to load the card falls back here.
 */
export default function ProjectArt({ variant }) {
  if (variant === 'growth') return <GrowthArt />
  if (variant === 'motion') return <MotionArt />
  return <RoomsArt />
}

const Frame = ({ from, to, children }) => (
  <svg
    className="art"
    viewBox="0 0 400 250"
    preserveAspectRatio="xMidYMid slice"
    role="presentation"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={`bg-${from}`} x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
        <stop stopColor={from} />
        <stop offset="1" stopColor={to} />
      </linearGradient>
      <pattern id={`grid-${from}`} width="26" height="26" patternUnits="userSpaceOnUse">
        <path d="M26 0H0V26" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="400" height="250" fill={`url(#bg-${from})`} />
    <rect width="400" height="250" fill={`url(#grid-${from})`} />
    {children}
  </svg>
)

/* Floor plan — rooms, walls, furniture blocks. */
const RoomsArt = () => (
  <Frame from="#2b1b4d" to="#120d26">
    <g stroke="#c9a86a" strokeWidth="2.5" fill="none" opacity=".85">
      <rect x="58" y="46" width="284" height="158" rx="3" />
      <path d="M188 46v158M58 128h130M188 104h154" />
    </g>
    <g fill="#a855f7" opacity=".55">
      <rect x="74" y="62" width="60" height="34" rx="4" />
      <rect x="146" y="62" width="26" height="34" rx="4" />
      <rect x="74" y="146" width="42" height="42" rx="4" />
      <rect x="130" y="160" width="44" height="28" rx="4" />
    </g>
    <g fill="#c9a86a" opacity=".5">
      <rect x="206" y="122" width="72" height="40" rx="4" />
      <rect x="292" y="122" width="34" height="62" rx="4" />
      <rect x="206" y="62" width="118" height="22" rx="4" />
    </g>
    <g fill="none" stroke="#e2c48a" strokeWidth="1.4" opacity=".65">
      <circle cx="243" cy="182" r="13" />
      <path d="M236 182h14M243 175v14" />
    </g>
  </Frame>
)

/* Sprout with measurement overlays and a rising chart. */
const GrowthArt = () => (
  <Frame from="#123020" to="#08160f">
    <g stroke="#4ade80" strokeWidth="1.6" fill="none" opacity=".75">
      <path d="M200 206c0-34-4-56-22-72" />
      <path d="M200 206c0-30 3-50 20-64" />
    </g>
    <g fill="#22c55e" opacity=".85">
      <path d="M178 134c-24-4-38-20-38-38 22-4 40 8 44 28z" />
      <path d="M222 142c24-6 36-24 34-42-22-2-40 12-42 32z" />
      <path d="M200 208c-14 0-24 6-28 12h56c-4-6-14-12-28-12z" opacity=".5" />
    </g>
    <g stroke="#86efac" strokeWidth="1.5" fill="none" opacity=".7">
      <path d="M44 178l26-22 24 14 30-42 26 18" />
      <path d="M40 200h124" strokeDasharray="4 6" />
    </g>
    <g fill="#4ade80" opacity=".55">
      <rect x="286" y="150" width="14" height="52" rx="2" />
      <rect x="308" y="126" width="14" height="76" rx="2" />
      <rect x="330" y="98" width="14" height="104" rx="2" />
      <rect x="352" y="140" width="14" height="62" rx="2" />
    </g>
    <g stroke="#bbf7d0" strokeWidth="1.2" fill="none" opacity=".45">
      <path d="M60 48h44v34M340 48h-44v34" />
    </g>
  </Frame>
)

/* Pose-estimation skeleton with joint nodes and a signal trace. */
const MotionArt = () => (
  <Frame from="#0b2545" to="#07101f">
    <g stroke="#38bdf8" strokeWidth="2.2" fill="none" opacity=".9" strokeLinecap="round">
      <path d="M196 66v52M196 92l-34 22M196 92l38 16M196 118l-22 44M196 118l26 40M174 162l-16 40M222 158l14 42" />
    </g>
    <g fill="#7dd3fc">
      <circle cx="196" cy="56" r="11" opacity=".9" />
      {[
        [196, 92], [162, 114], [234, 108], [196, 118],
        [174, 162], [222, 158], [158, 202], [236, 200],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
      ))}
    </g>
    <g stroke="#22d3ee" strokeWidth="1.5" fill="none" opacity=".6">
      <path d="M292 178c10 0 12-40 22-40s12 26 22 26 12-34 22-34" />
      <path d="M288 200h84" strokeDasharray="4 6" />
      <rect x="284" y="58" width="92" height="46" rx="5" />
      <path d="M292 92l16-18 14 10 18-24 16 14" />
    </g>
    <g stroke="#38bdf8" strokeWidth="1.3" fill="none" opacity=".45">
      <circle cx="66" cy="96" r="34" />
      <circle cx="66" cy="96" r="18" />
      <path d="M32 96h68M66 62v68" />
    </g>
  </Frame>
)
