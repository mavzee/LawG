import './member.css'
import adminSpecialistImage from '../assets/qads.png'
import adminSpecialistImage1 from '../assets/jof.png'
import adminSpecialistImage2 from '../assets/rai.png'
import adminSpecialistImage3 from '../assets/james.png'
import adminSpecialistImage4 from '../assets/mj.png'
import adminSpecialistImage5 from '../assets/nouf.png'
import adminSpecialistImage6 from '../assets/sha.png'
import adminSpecialistImage7 from '../assets/cris.png'
import adminSpecialistImage8 from '../assets/xhe.png'
import supervisorImage from '../assets/cat.jpg'
import supportLeadImage from '../assets/ivan.png'

const staffMembers = [
  {
    name: 'Catrizia Patrimonio',
    role: 'Supervisor',
    image: supervisorImage,
    bio: 'Oversees daily team operations, coaching, and quality control across active case support workstreams.',
  },
  {
    name: 'Ivan Guerrero',
    role: 'IT Specialist',
    image: supportLeadImage,
    bio: 'Manages the law firms technology infrastructure, cybersecurity, and internal systems while developing web applications and automation tools that improve efficiency, security, and day-to-day operations.',
  },
  {
    name: 'Qadeer Tulawie',
    role: 'Admin Specialist',
    image: adminSpecialistImage,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
  {
    name: 'Joffrey Esperancilla',
    role: 'Admin Specialist1',
    image: adminSpecialistImage1,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
  {
    name: 'Raiza Aming',
    role: 'Admin Specialist',
    image: adminSpecialistImage2,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
  {
    name: 'James Santos',
    role: 'Admin Specialist',
    image: adminSpecialistImage3,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
  {
    name: 'Maria Jerika K.',
    role: 'Admin Specialist',
    image: adminSpecialistImage4,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
  {
    name: 'Nouf Hassan',
    role: 'Admin Specialist',
    image: adminSpecialistImage5,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
  {
    name: 'Shahida Sangcopan',
    role: 'Admin Specialist',
    image: adminSpecialistImage6,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
  {
    name: 'Cris Ann Aguirre',
    role: 'Admin Specialist',
    image: adminSpecialistImage7,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
  {
    name: 'Xhean Macrohon',
    role: 'Admin Specialist',
    image: adminSpecialistImage8,
    bio: 'Handles intake coordination, document flow, scheduling, and the details that keep internal processes moving smoothly.',
  },
]

export default function MemberSection() {
  return (
    <section id="staff" className="member-section">
      <div className="member-shell">
        <div className="member-heading">
          <p className="member-eyebrow">
            <span aria-hidden="true" />
            Our Staff
          </p>

          <h2>
            Meet the Team
            <span> Supporting Daily Operations</span>
          </h2>

           
        </div>

        <div className="member-grid">
          {staffMembers.map((member) => (
            <article key={member.name} className="member-card">
              <div className="member-photo-wrap">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="member-photo"
                />
              </div>

              <div className="member-card-body">
                <p className="member-role">{member.role}</p>
                <h3>{member.name}</h3>
                <p className="member-bio">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}