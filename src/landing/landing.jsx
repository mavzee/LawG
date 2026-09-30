import FilesSection from '../Files/files'
import backgroundImage from '../assets/background.webp'
import logoIcon from '../assets/icon.png'
import Footer from '../footer/footer'
import MemberSection from '../members/member'
import WebsitesSection from '../websites/website'
import './landing.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Sites', href: '#platforms' },
  { label: 'Staff', href: '#staff' },
  { label: 'Files', href: '#files' },
  { label: 'Our Staff', href: '#staff' },
]

export default function Landing() {
  return (
    <main className="landing-shell">
      <section
        id="home"
        className="landing-hero"
        style={{
          '--landing-background': `url(${backgroundImage})`,
        }}
      >
        <div className="landing-overlay" aria-hidden="true" />

        <header className="landing-nav">
          <a href="#home" className="landing-brand" aria-label="DGA Home">
            <span className="brand-logo-wrap">
              <img
                src={logoIcon}
                alt="David Grossman and Associates"
                className="brand-logo"
              />
            </span>

            <div className="brand-copy">
              <p className="brand-name">
                David Grossman <span>&amp;</span> Associates
              </p>

              <p className="brand-tag">Attorneys at Law</p>
            </div>
          </a>

          <nav className="landing-links" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={index === 0 ? 'is-active' : ''}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="landing-content">
          <div className="landing-copy">
            <p className="eyebrow">
              <span aria-hidden="true" />
              Welcome to
            </p>

            <h1>
              David Grossman
              <span>&amp; Associates Law Group</span>
            </h1>

            <div className="copy-divider" aria-hidden="true">
              <span />
            </div>

            <p className="accent-line">Excellence in legal practice.</p>

            <p className="subcopy">
              One central platform for accessing our legal websites, client
              resources, documents, and digital services.
            </p>

            <div className="landing-actions">
              <a href="#platforms" className="cta-button">
                Explore Our Sites

                <span className="cta-arrow" aria-hidden="true">
                  -&gt;
                </span>
              </a>

              <a href="#files" className="secondary-button">
                View Files
              </a>
            </div>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="orange-orb orange-orb-one" />
          <div className="orange-orb orange-orb-two" />

          <div className="light-beam beam-one" />
          <div className="light-beam beam-two" />

          <div className="legal-lines">
            <span />
            <span />
            <span />
          </div>
        </div>

        <a
          href="#platforms"
          className="scroll-indicator"
          aria-label="Scroll to our sites"
        >
          <span className="scroll-line" aria-hidden="true" />
        </a>
      </section>

      <WebsitesSection />
      <FilesSection />
      <MemberSection />
      <Footer />
    </main>
  )
}
