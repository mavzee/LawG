import './files.css'

const fileGroups = [
  {
    code: 'SMA',
    title: 'SMA Sheets',
    sheets: [
      { title: 'SMA SCRIPT', href: 'https://docs.google.com/document/d/1nvLElF-p7Wp04p5SWLwSCWR34c2tm-vl-J_L9LZhtm0/edit?tab=t.4xelktn28zub#heading=h.ozxk9m8s62e3' },
      { title: 'SMA Clients to Email - QUALIFIED ', href: 'https://docs.google.com/spreadsheets/d/12G4Tbgi3eNNvTTIe7BeMJSZHHU_Q-xqY3L2tfUEgXzc/edit?gid=1364548#gid=1364548' },
      { title: 'SMA STATUS ', href: 'https://docs.google.com/spreadsheets/d/149W_WMcTGFnNFrmYa32xZWzKDHk_TQfQ3CnT968TLvE/edit?gid=993147888#gid=993147888' },
      { title: 'SMA Clients - NOT QUALIFIED ', href: 'https://docs.google.com/spreadsheets/d/1jalcuu_F_PsNQ1S65eplbB10qhTJgi0e4FuOyI6C9ms/edit?gid=1074539159#gid=1074539159' },
      { title: 'Copy of SMAA_Intake_Template', href: 'https://docs.google.com/spreadsheets/d/1S3cAxd8lkP_ngs2Z7I0t6wSfJgJWqgu-yrH2bc39cec/edit?gid=577588769#gid=577588769' },
      { title: 'LAWG - DAR ', href: 'https://docs.google.com/spreadsheets/d/1p3eRVJQI3Oj2mxVlXyNfPMuOwlEWAid5CBOU9zumoBY/edit?gid=1662211285#gid=1662211285' },
      { title: 'SMA CALL LIST ', href: 'https://docs.google.com/spreadsheets/d/1rbCYB9cWR2ccBoWrxf3nZaVoMGFDqOBF/edit?gid=2014751562#gid=2014751562' },
       
    ],
  },
  {
    code: 'PFAS',
    title: 'PFAS Sheets',
    sheets: [
      { title: 'AFFF Auditing', href: 'https://docs.google.com/spreadsheets/d/1dAZiv17ZxY-tjhrk74J-3VevULjxy7ct2aA725JlqI8/edit?gid=1639236205#gid=1639236205' },
      { title: 'Signature Audit for CRM', href: 'https://docs.google.com/spreadsheets/d/1BdVnFAaPAMMptjKJNRyAixhAcv9tahrleuvti2u0rc0/edit?gid=0#gid=0' },
      { title: 'AFFF Tracker ', href: 'https://docs.google.com/spreadsheets/d/1yRbhQXgV9DS_549SAUynJ6yvwm9up40YooDNoHnxXUw/edit?gid=0#gid=0' },
      { title: 'Euro Test Kit Tracker', href: 'https://docs.google.com/spreadsheets/d/1rBCqqrsaWpo-JopR1bhd-An6QymeZgBZQROD_C48GME/edit?gid=791876910#gid=791876910' },
      { title: 'PFAS STATUS UPDATE', href: 'https://docs.google.com/spreadsheets/d/1wBTG-s0AwE1W7S-sQXGO9niP2srC-iFGkC6FmtgGdPA/edit?gid=1851802937#gid=1851802937' },
    ],
  },
  {
    code: 'FFF',
    title: 'FireFighter Sheets',
    sheets: [
      { title: 'Target List of Fire Departments, rev 6-11-2026', href: 'https://docs.google.com/spreadsheets/d/17COLxq0RwxXNBG05iiarvwSc4NGL832vKK1R_9j5rUM/edit?gid=747409949#gid=747409949' },
      { title: 'Fire Fighter', href: 'https://docs.google.com/spreadsheets/d/1LqNr4D89JAE60W9T6JPHIRfp-vj7yWMxREUq0WOeSOM/edit?gid=0#gid=0' },
      { title: 'Firefighter Turnout Gear ', href: 'https://docs.google.com/spreadsheets/d/1IKfOMA3qA9dsppin3vRAXMR6jYwtoxhfLRjoWbByDCc/edit?gid=0#gid=0' },
       
    ],
  },
]

export default function FilesSection() {
  return (
    <section id="files" className="files-section">
      <div className="files-shell">
        <div className="files-heading">
          <p className="files-eyebrow">
            <span aria-hidden="true" />
            Google Sheets
          </p>

          <h2>
            File Access for
            <span> SMA, PFAS, and FireFighter</span>
          </h2>

          <p className="files-intro">
            Each category can hold multiple Google Sheets. Replace the sample
            titles and links with your actual sheet names whenever you are
            ready.
          </p>
        </div>

        <div className="files-grid">
          {fileGroups.map((group) => (
            <article key={group.code} className="file-card">
              <div className="file-card-top">
                <span className="file-code">{group.code}</span>
                <span className="file-tag">Sheets</span>
              </div>

              <h3>{group.title}</h3>

              <div className="sheet-list">
                {group.sheets.map((sheet) => (
                  <a
                    key={`${group.code}-${sheet.title}`}
                    href={sheet.href}
                    className="sheet-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{sheet.title}</span>
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
