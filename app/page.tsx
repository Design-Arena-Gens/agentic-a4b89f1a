import Image from 'next/image';
import logoMark from '../public/logo.svg';

const palette = [
  {
    name: 'Saffron Clay',
    hex: '#D2693C',
    rgb: '210 105 60',
    cmyk: '0 50 71 18',
    description: 'Anchor tone inspired by artisan earthen dyes and loom-warmed yarns.',
  },
  {
    name: 'Sunlit Cotton',
    hex: '#F2C94C',
    rgb: '242 201 76',
    cmyk: '0 17 69 5',
    description: 'Highlight accent referencing sunlight across woven fabrics.',
  },
  {
    name: 'Deep Indigo',
    hex: '#101820',
    rgb: '16 24 32',
    cmyk: '50 25 0 87',
    description: 'Grounding contrast color reminiscent of natural indigo dye vats.',
  },
  {
    name: 'Soft Loom',
    hex: '#F8F6F3',
    rgb: '248 246 243',
    cmyk: '0 1 2 3',
    description: 'Background neutral that evokes cotton slub and parchment pattern books.',
  },
];

const usageCards = [
  {
    title: 'Primary Lockup',
    description:
      'Use on light backgrounds with the motif leading the eye into the logotype. Maintain generous breathing room equal to the height of the motif on all sides.',
    style: {
      background: 'linear-gradient(140deg, #fffefd, #f5eadf)',
    } as React.CSSProperties,
  },
  {
    title: 'Reversed Treatment',
    description:
      'For dark fabric swatches or photography overlays, invert the colors: set the emblem and type in Soft Loom against Deep Indigo.',
    className: 'dark',
  },
  {
    title: 'Mark-Only Variant',
    description:
      'Ideal for weaving labels, social icons, and merchandise tooling where the Subodh wordmark would lose legibility.',
    style: {
      background: 'linear-gradient(160deg, #e1d6ca, #fffaf2)',
    } as React.CSSProperties,
  },
];

export default function Page() {
  return (
    <main>
      <section className="section">
        <div className="content hero">
          <div className="hero-copy">
            <p className="tagline">Subodh Textiles</p>
            <h1>Crafting woven luxury with a modern Indian cadence.</h1>
            <p>
              The Subodh Textiles emblem intertwines a stylized thread shuttle with a rising sun motif, symbolizing meticulous craftsmanship in every weave. The flowing logotype balances heritage serifs with contemporary precision.
            </p>
            <p>
              Use this guide for digital, print, and woven applications, ensuring consistent storytelling across touchpoints—from atelier labels to global showrooms.
            </p>
          </div>
          <div className="logo-panel" role="img" aria-label="Subodh Textiles logo">
            <Image src={logoMark} alt="Subodh Textiles logo" className="logo-display" priority />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="content">
          <h2>Color Weave</h2>
          <p>
            The palette contrasts earthen warmth with radiant highlights and grounded indigo. For brand cohesion, keep ratios at roughly 60% neutrals, 25% primary accent, and the balance in highlight and dark contrast.
          </p>
          <div className="swatch-grid">
            {palette.map((tone) => (
              <div key={tone.hex} className="swatch">
                <div className="swatch-top" style={{ backgroundColor: tone.hex }} />
                <div className="swatch-bottom">
                  <strong>{tone.name}</strong>
                  <span>{tone.description}</span>
                  <span className="swatch-code">{tone.hex}</span>
                  <span className="swatch-code">RGB {tone.rgb}</span>
                  <span className="swatch-code">CMYK {tone.cmyk}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <h2>Logo Usage</h2>
          <div className="usage-grid">
            {usageCards.map((card) => (
              <div
                key={card.title}
                className={`usage-block${card.className ? ` ${card.className}` : ''}`}
                style={card.style}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <LogoMockup variant={card.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="content">
          <h2>Typography</h2>
          <p>
            Pair the elegant Playfair Display for headlines with Source Sans for supporting copy. Maintain a 1.4 line-height for paragraph text and use generous letter spacing on uppercase accents to echo the loom pattern rhythm.
          </p>
          <div className="grid-samples">
            <div className="card dark">
              <h3>Headline Style</h3>
              <h1>Elevated Loomworks</h1>
              <p>
                Tracking -40 | Playfair Display | Use for hero statements, collection names, and lookbook covers.
              </p>
            </div>
            <div className="card dark">
              <h3>Body Copy</h3>
              <p>
                Source Sans 3 Regular — Crafted for brochures, product details, and digital storytelling. Maintain 18px minimum size for clarity across fibers and finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">Subodh Textiles Identity System · 2024</footer>
    </main>
  );
}

function LogoMockup({ variant }: { variant: string }) {
  const isReversed = variant === 'Reversed Treatment';
  const isMarkOnly = variant === 'Mark-Only Variant';

  return (
    <div
      style={{
        borderRadius: '16px',
        padding: isMarkOnly ? '32px' : '28px',
        background: isReversed ? '#101820' : '#fff',
        display: 'grid',
        placeItems: 'center',
        minHeight: '180px',
        boxShadow: isReversed
          ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
          : 'inset 0 0 0 1px rgba(34, 24, 16, 0.08)',
      }}
    >
      <svg
        width={isMarkOnly ? 120 : 260}
        viewBox="0 0 240 72"
        role="presentation"
        aria-hidden
      >
        <defs>
          <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isReversed ? '#F8F6F3' : '#D2693C'} />
            <stop offset="100%" stopColor={isReversed ? '#F8F6F3' : '#F2C94C'} />
          </linearGradient>
        </defs>
        <LogoPaths isReversed={isReversed} markOnly={isMarkOnly} />
      </svg>
    </div>
  );
}

function LogoPaths({
  isReversed,
  markOnly,
}: {
  isReversed: boolean;
  markOnly: boolean;
}) {
  const baseColor = isReversed ? '#F8F6F3' : '#2F2A26';

  return (
    <g>
      <path
        d="M40 12c-9.941 0-18 8.059-18 18s8.059 18 18 18c4.803 0 9.173-1.898 12.366-4.983l-5.12-4.42A12.002 12.002 0 0140 42c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.098 0 5.923 1.177 8.05 3.107l5.84-5.842C49.898 13.898 45.18 12 40 12z"
        fill="url(#accent)"
      />
      <path
        d="M40 24a6 6 0 100 12 6 6 0 000-12z"
        fill={isReversed ? '#101820' : '#F8F6F3'}
      />
      <path
        d="M64.824 21.276a2 2 0 00-3.648 1.448l4.824 36a2 2 0 003.648-1.448l-4.824-36z"
        fill={baseColor}
      />
      <path
        d="M23.176 21.276l-4.824 36a2 2 0 003.648 1.448l4.824-36a2 2 0 10-3.648-1.448z"
        fill={baseColor}
      />
      {!markOnly && (
        <text
          x="88"
          y="43"
          fill={baseColor}
          fontFamily="Playfair Display, serif"
          fontWeight={600}
          fontSize="28"
          letterSpacing="0.08em"
        >
          SUBODH
        </text>
      )}
      {!markOnly && (
        <text
          x="88"
          y="60"
          fill={baseColor}
          fontFamily="Source Sans Pro, sans-serif"
          fontSize="16"
          letterSpacing="0.45em"
        >
          TEXTILES
        </text>
      )}
    </g>
  );
}
