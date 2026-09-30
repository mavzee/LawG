import logoIcon from '../assets/icon.png'
import './footer.css'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Sites', href: '#platforms' },
  { label: 'Files', href: '#files' },
  { label: 'Staff', href: '#staff' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="site-footer-top">
          <a href="#home" className="site-footer-brand" aria-label="DGA Home">
            <span className="site-footer-logo-wrap">
              <img
                src={logoIcon}
                alt="David Grossman and Associates"
                className="site-footer-logo"
              />
            </span>

            <div className="site-footer-brand-copy">
              <p className="site-footer-brand-name">
                David Grossman <span>&amp;</span> Associates
              </p>

              <p className="site-footer-brand-tag">Attorneys at Law</p>
            </div>
          </a>

          <p className="site-footer-message">
            One place for legal resources, internal tools, websites, and staff
            access.
          </p>
        </div>

        <div className="site-footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="site-footer-bottom">
          <p>&copy; {year} David Grossman &amp; Associates Law Group. All rights reserved.</p>

          <a href="#home" className="site-footer-backtotop">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
