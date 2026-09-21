/**
 * Generated cover art, used until a real screenshot is dropped in.
 * Set `cover` on a project (e.g. '/projects/floorplan-ai.jpg') and the
 * photo takes over; if it fails to load the card falls back here.
 */
export default function ProjectArt({ variant }) {
  const Art = ART[variant] ?? RoomsArt
  return <Art />
}

/**
 * `id` namespaces the gradient/pattern defs. Two variants on one page would
 * otherwise collide on a colour-derived id and share the wrong fill.
 */
const Frame = ({ id, from, to, children }) => (
  <svg
    className="art"
    viewBox="0 0 400 250"
    preserveAspectRatio="xMidYMid slice"
    role="presentation"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
        <stop stopColor={from} />
        <stop offset="1" stopColor={to} />
      </linearGradient>
      <pattern id={`grid-${id}`} width="26" height="26" patternUnits="userSpaceOnUse">
        <path d="M26 0H0V26" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="400" height="250" fill={`url(#bg-${id})`} />
    <rect width="400" height="250" fill={`url(#grid-${id})`} />
    {children}
  </svg>
)

/* Floor plan — rooms, walls, furniture blocks. */
const RoomsArt = () => (
  <Frame id="rooms" from="#2b1b4d" to="#120d26">
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

/* Layout engine — candidate arrangements, the winner scored highest. */
const LayoutArt = () => (
  <Frame id="layout" from="#3a2708" to="#1a1205">
    {[
      [30, 0],
      [150, 1],
      [270, 2],
    ].map(([x, i]) => (
      <g key={x} opacity={i === 1 ? '1' : '.45'}>
        <rect
          x={x}
          y="40"
          width="100"
          height="118"
          rx="4"
          fill="rgba(255,255,255,.03)"
          stroke={i === 1 ? '#fbbf24' : '#f59e0b'}
          strokeWidth={i === 1 ? '2.4' : '1.4'}
        />
        <g fill="#f59e0b" opacity=".6">
          <rect x={x + 10} y="52" width={i === 2 ? 30 : 46} height="22" rx="3" />
          <rect x={x + (i === 0 ? 62 : 10)} y={i === 0 ? 52 : 84} width="26" height="30" rx="3" />
          <rect x={x + (i === 1 ? 48 : 10)} y={i === 1 ? 84 : 122} width="38" height="22" rx="3" />
        </g>
        <path
          d={`M${x + 100} 140a22 22 0 0 1-22 18`}
          fill="none"
          stroke="#fde68a"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          opacity=".7"
        />
      </g>
    ))}
    <g>
      {[
        [30, 14, '.45'],
        [150, 26, '1'],
        [270, 9, '.45'],
      ].map(([x, h, o]) => (
        <rect key={x} x={x} y={198 - h} width="100" height={h} rx="2" fill="#fbbf24" opacity={o} />
      ))}
      <path d="M30 198h340" stroke="#fde68a" strokeWidth="1" strokeDasharray="4 6" opacity=".4" />
    </g>
    <path d="M164 214l10 10 22-22" fill="none" stroke="#fde68a" strokeWidth="1.6" opacity=".7" />
  </Frame>
)

/* Sprout with measurement overlays and a rising chart. */
const GrowthArt = () => (
  <Frame id="growth" from="#123020" to="#08160f">
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

/* Phone frame — weekly activity bars and a BMI ring. */
const MobileArt = () => (
  <Frame id="mobile" from="#08303f" to="#06151f">
    <rect
      x="148"
      y="28"
      width="104"
      height="194"
      rx="16"
      fill="rgba(255,255,255,.04)"
      stroke="#38bdf8"
      strokeWidth="2.2"
    />
    <rect x="182" y="36" width="36" height="5" rx="2.5" fill="#7dd3fc" opacity=".7" />
    <circle cx="200" cy="82" r="21" fill="none" stroke="#0e4a5e" strokeWidth="6" />
    <circle
      cx="200"
      cy="82"
      r="21"
      fill="none"
      stroke="#38bdf8"
      strokeWidth="6"
      strokeLinecap="round"
      strokeDasharray="94 132"
      transform="rotate(-90 200 82)"
    />
    <g fill="#22d3ee" opacity=".55">
      <rect x="160" y="120" width="80" height="7" rx="3.5" />
      <rect x="160" y="132" width="54" height="7" rx="3.5" />
    </g>
    <g fill="#7dd3fc" opacity=".8">
      {[
        [162, 22],
        [174, 34],
        [186, 16],
        [198, 40],
        [210, 28],
        [222, 45],
        [234, 20],
      ].map(([x, h]) => (
        <rect key={x} x={x} y={190 - h} width="7" height={h} rx="2" />
      ))}
    </g>
    <path d="M160 196h80" stroke="#38bdf8" strokeWidth="1" opacity=".4" />
    <g stroke="#67e8f9" strokeWidth="1.6" fill="none" opacity=".55" strokeLinecap="round">
      <circle cx="74" cy="72" r="8" />
      <path d="M74 80v22M62 92h24M74 102l-10 20M74 102l10 20" />
      <path d="M300 84h44M300 84l-8 20h60l-8-20" />
      <circle cx="322" cy="140" r="16" />
      <path d="M322 130v10l7 6" />
    </g>
  </Frame>
)

/* Image grid feeding a small net, with confidence bars. */
const ClassifyArt = () => (
  <Frame id="classify" from="#3d1526" to="#1b0a11">
    {[
      [34, 48],
      [86, 48],
      [34, 100],
      [86, 100],
    ].map(([x, y], i) => (
      <rect
        key={`${x}-${y}`}
        x={x}
        y={y}
        width="44"
        height="44"
        rx="4"
        fill="rgba(251,113,133,.16)"
        stroke="#fb7185"
        strokeWidth={i === 0 ? '2.2' : '1.2'}
        opacity={i === 0 ? '1' : '.55'}
      />
    ))}
    <path d="M44 82l10-12 8 9 9-13 11 16" stroke="#fda4af" strokeWidth="1.4" fill="none" opacity=".8" />
    <g stroke="#fb7185" strokeWidth="1" opacity=".3" fill="none">
      {[70, 110, 150].map((y1) =>
        [84, 124, 164].map((y2) => <path key={`${y1}-${y2}`} d={`M158 ${y1}H214V${y2}`} />),
      )}
    </g>
    <g fill="#fda4af">
      {[70, 110, 150].map((cy) => (
        <circle key={`in-${cy}`} cx="158" cy={cy} r="5" opacity=".85" />
      ))}
      {[84, 124, 164].map((cy) => (
        <circle key={`out-${cy}`} cx="214" cy={cy} r="5" opacity=".7" />
      ))}
    </g>
    {[
      [78, 108, '1'],
      [110, 52, '.5'],
      [142, 28, '.35'],
    ].map(([y, w, o]) => (
      <g key={y}>
        <rect x="258" y={y} width="112" height="12" rx="6" fill="rgba(255,255,255,.07)" />
        <rect x="258" y={y} width={w} height="12" rx="6" fill="#fb7185" opacity={o} />
      </g>
    ))}
    <path d="M258 70h112" stroke="#fda4af" strokeWidth="1" opacity=".3" />
  </Frame>
)

/* Task cards with checkmarks — records being managed. */
const OrganizerArt = () => (
  <Frame id="organizer" from="#1e2150" to="#0c0d24">
    <rect
      x="62"
      y="34"
      width="276"
      height="182"
      rx="10"
      fill="rgba(255,255,255,.035)"
      stroke="#818cf8"
      strokeWidth="2"
    />
    <path d="M62 66h276" stroke="#818cf8" strokeWidth="1.4" opacity=".6" />
    <g fill="#a5b4fc" opacity=".8">
      <circle cx="80" cy="50" r="4" />
      <circle cx="94" cy="50" r="4" />
      <circle cx="108" cy="50" r="4" />
    </g>
    <rect x="244" y="43" width="78" height="14" rx="7" fill="#818cf8" opacity=".35" />
    {[84, 118, 152, 186].map((y, i) => (
      <g key={y}>
        <rect
          x="80"
          y={y}
          width="16"
          height="16"
          rx="4"
          fill="none"
          stroke="#a5b4fc"
          strokeWidth="1.6"
          opacity=".8"
        />
        {i < 2 && (
          <path
            d={`M83 ${y + 8}l4 4 7-8`}
            fill="none"
            stroke="#c7d2fe"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <rect
          x="108"
          y={y + 3}
          width={[150, 116, 178, 134][i]}
          height="10"
          rx="5"
          fill="#818cf8"
          opacity={i < 2 ? '.35' : '.55'}
        />
      </g>
    ))}
  </Frame>
)

/* Side-scroller — platforms, player, coins, HUD. */
const GameArt = () => (
  <Frame id="game" from="#07393a" to="#04191c">
    <g fill="#2dd4bf" opacity=".45">
      <rect x="28" y="196" width="130" height="16" rx="4" />
      <rect x="182" y="196" width="190" height="16" rx="4" />
      <rect x="96" y="146" width="78" height="13" rx="4" />
      <rect x="222" y="118" width="70" height="13" rx="4" />
    </g>
    <rect x="120" y="118" width="26" height="26" rx="6" fill="#5eead4" />
    <g fill="#04191c">
      <circle cx="128" cy="128" r="2.6" />
      <circle cx="138" cy="128" r="2.6" />
    </g>
    <path d="M128 136h10" stroke="#04191c" strokeWidth="2" strokeLinecap="round" />
    <g fill="none" stroke="#99f6e4" strokeWidth="1.8" opacity=".85">
      {[
        [244, 92],
        [268, 92],
        [292, 92],
        [206, 168],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" />
      ))}
    </g>
    <path d="M318 196l12-20 12 20z" fill="#2dd4bf" opacity=".6" />
    <g opacity=".75">
      <rect
        x="28"
        y="30"
        width="96"
        height="24"
        rx="6"
        fill="rgba(255,255,255,.06)"
        stroke="#5eead4"
        strokeWidth="1.2"
      />
      <g fill="#99f6e4">
        <rect x="38" y="39" width="30" height="6" rx="3" />
        <rect x="74" y="39" width="42" height="6" rx="3" opacity=".6" />
      </g>
      <g fill="#5eead4">
        {[300, 320, 340].map((x) => (
          <path
            key={x}
            d={`M${x} 34l4 8 9 1-6.5 6 1.5 9-8-4.5-8 4.5 1.5-9-6.5-6 9-1z`}
            opacity={x === 340 ? '.3' : '.9'}
          />
        ))}
      </g>
    </g>
    <g stroke="#5eead4" strokeWidth="1.3" fill="none" opacity=".4">
      <rect x="40" y="96" width="20" height="20" rx="4" />
      <rect x="64" y="96" width="20" height="20" rx="4" />
      <path d="M54 106h-8M50 102l-4 4 4 4M70 106h8M74 102l4 4-4 4" />
    </g>
  </Frame>
)

const ART = {
  rooms: RoomsArt,
  layout: LayoutArt,
  growth: GrowthArt,
  mobile: MobileArt,
  classify: ClassifyArt,
  organizer: OrganizerArt,
  game: GameArt,
}
