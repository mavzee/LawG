import firefighterImage from '../assets/fire.png'
import logoIcon from '../assets/icon.png'
import pfasImage from '../assets/epa.png'
import webChemImage from '../assets/kits.png'
import './website.css'

const websites = [
  {
    number: '01',
    title: 'EPA Survey Autofind',
    description:
      'Automatically find the information needed to complete EPA AFFF surveys. EPA Survey AutoFind simplifies research by collecting relevant data, allowing users to complete surveys faster and more accurately.',
    href: 'https://twin-0ypf.onrender.com/',
    accent: 'litigation',
    image: pfasImage,
  },
  {
    number: '02',
    title: 'AFFF FIREFIGHTER TURNOUT GEAR',
    description:
      'AFFF Firefighter Turnout Gear AutoFind streamlines the collection of turnout gear information by automatically researching and organizing department-specific data. It reduces manual research by providing key details needed for legal investigations, compliance reviews, and AFFF-related cases.',
    href: 'https://firefighterafff.web.app/',
    accent: 'corporate',
    image: firefighterImage,
  },
  {
    number: '03',
    title: 'Advocacy & Community Initiatives',
    description:
      'Dedicated to public service, legal aid, and initiatives that create a positive impact in the community.',
    href: 'https://pfas-lawg.web.app/',
    accent: 'advocacy',
    image: webChemImage,
  },
]

export default function WebsitesSection() {
  return (
    <section id="platforms" className="websites-section">
      <div className="websites-glow websites-glow-one" aria-hidden="true" />
      <div className="websites-glow websites-glow-two" aria-hidden="true" />

      <div className="websites-shell">
        <div className="websites-heading">
          <p className="websites-eyebrow">
            <span aria-hidden="true" />
            Our Platforms
          </p>

          <h2>
            Explore Our
            <span> Specialized Websites</span>
          </h2>

          <p className="websites-intro">
            Three focused destinations designed to provide streamlined access
            to our legal services, digital resources, and client support.
          </p>
        </div>

        <div className="websites-grid">
          {websites.map((website) => (
            <a
              key={website.title}
              href={website.href}
              className={`website-card ${website.accent}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="website-card-media"
                style={
                  website.image
                    ? { '--website-image': `url(${website.image})` }
                    : undefined
                }
              >
                <div className="website-card-overlay" aria-hidden="true" />

                <span className="website-number">{website.number}</span>
              </div>

              <div className="website-card-badge">
                <img src={logoIcon} alt="" aria-hidden="true" />
              </div>

              <div className="website-card-body">
                <span className="website-card-label">Legal Platform</span>

                <h3>{website.title}</h3>

                <p>{website.description}</p>
              </div>

              <div className="website-card-footer">
                <span>Visit Website</span>

                <span className="website-arrow" aria-hidden="true">
                  -&gt;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
