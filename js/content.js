/* ==========================================================================
   DITO MO BABAGUHIN ANG LAHAT NG TEXT SA WEBSITE
   --------------------------------------------------------------------------
   Mga simpleng patakaran:
   1. Palitan lang ang text na nasa pagitan ng dalawang ` ` (backtick).
      Halimbawa:  title: `Pangalan ng project`,
      Puwede ang apostrophe (Let's) at puwede ang bagong linya sa loob.
   2. Huwag tanggalin ang mga kuwit (,) sa dulo ng bawat linya.
   3. Huwag tanggalin ang mga simbolong [ ] { } sa paligid.
   4. Pagkatapos mag-edit, pindutin ang Commit changes sa GitHub,
      at hintayin ang 1-2 minuto.
   Kapag nasira ang page, i-revert ang huling commit sa History.
   ========================================================================== */

var SITE = {
  /* ---------- PANGKALAHATAN ---------- */
  name: `Alyssa Singcuan`,
  shortName: `Alyssa`,                      /* nasa kaliwang-itaas ng menu */
  email: `singcuanalissa@gmail.com`,
  linkedin: `https://linkedin.com/in/alyssa-singcuan/`,
  location: `Biñan, Laguna, Philippines`,
  photo: `images/alyssa-portrait.jpg`,      /* ang larawan mo sa hero */
  footer: `© 2026 Alyssa Singcuan. Based in Biñan, Laguna, Philippines.`,

  /* ---------- HERO (unang bahagi ng page) ---------- */
  hero: {
    tag: `Social Media Marketer`,
    headline: `I bring fresh ideas to the`,   /* itim na bahagi */
    highlight: `digital spaces.`,             /* pulang bahagi */
    lead: `Social media management and virtual assistance for growing brands.`,
    button1: `Explore my work`,
    button2: `View resume`
  },

  /* ---------- UMIIKOT NA STRIP NG MGA SKILL ---------- */
  marquee: [
    `Social media management`,
    `Content planning`,
    `Administrative support`,
    `Workflow automation`,
    `Data management`
  ],

  /* ---------- ABOUT ---------- */
  about: {
    eyebrow: `About me`,
    heading: `Organized, reliable, and always learning.`,
    paragraphs: [
      `With a background in customer service, administrative support, and data management, I specialize in streamlining workflows and keeping complex information in order. My approach pairs careful attention to detail with a creative, editorial eye.`,
      `Whether it is managing spreadsheets, organizing emails, or handling social media, I help clients reclaim their time and focus on what matters most. I keep learning new tools and best practices so the work stays current.`,
      `I am now applying these strengths to social media marketing and digital content operations, while studying part-time on weekends.`
    ],
    glanceTitle: `At a glance`,
    glance: [
      { label: `Role`, value: `Social Media Marketer and Virtual Assistant` },
      { label: `Based in`, value: `Biñan, Laguna, Philippines` },
      { label: `Education`, value: `BS Industrial Engineering, Polytechnic University of the Philippines (August 2026 to present)` },
      { label: `Languages`, value: `Filipino (native), English (conversational)` }
    ],
    experienceTitle: `Experience`,
    experience: [
      { role: `Customer Service Representative`, place: `Afni, Sta. Rosa, Philippines`, when: `April 2026 to August 2026`,
        text: `Handled customer inquiries and service concerns, with a focus on troubleshooting and clear communication.` },
      { role: `Production Staff`, place: `Mitsubishi Motors Philippines Corporation`, when: `August 2024 to March 2026`,
        text: `Organized reports, attendance records, check sheets, and business files. Prepared monthly KPI and operational reports.` },
      { role: `Administrative Support Intern`, place: `Topsearch Manpower Provider Corporation`, when: `February 2024 to April 2024`,
        text: `Handled data entry, document filing, records management, and recruitment records.` }
    ],
    certsTitle: `Training and certifications`,
    certs: [
      { title: `General Virtual Assistance with Social Media Marketing`, by: `Department of Information and Communications Technology (DICT) · 2026` },
      { title: `Cyber Threat Monitoring Level I`, by: `Technical Education and Skills Development Authority (TESDA) · 2026 · Completed` }
    ],
    values: [
      { title: `Organized approach`, text: `Clear systems, tidy files, and structured plans keep every task on track.` },
      { title: `Attention to detail`, text: `Careful proofreading and double-checked data in every caption and spreadsheet.` },
      { title: `Creative execution`, text: `Polished visuals and thoughtful content that reflect a brand well.` },
      { title: `Continuous learning`, text: `Always exploring new tools, trends, and best practices.` }
    ]
  },

  /* ---------- TITLES NG WORK AT TOOLS ---------- */
  work: {
    eyebrow: `Selected work`,
    heading: `A closer look at the work.`,
    sub: `A quick preview of each project. Open one to see the full story.`
  },
  tools: {
    eyebrow: `Tools`,
    heading: `The tools I use, and why they matter.`,
    sub: `Pick a tool to see what it does and why it is worth knowing for client work.`
  },

  /* ---------- CONTACT ---------- */
  contact: {
    heading: `Let's make something good together.`,
    text: `I am always looking for new opportunities to help businesses and individuals thrive. Have a project in mind, or just want to say hello?`
  },

  /* ---------- RESUME PAGE ---------- */
  resume: {
    heading: `Resume`,
    sub: ``,
    image: `images/resume.jpg`,             /* larawan ng resume */
    pdf: `assets/Alyssa_Singcuan_Resume.pdf` /* PDF na dina-download */
  }
};

/* ==========================================================================
   MGA PROJECT (Work)
   --------------------------------------------------------------------------
   PAGDAGDAG NG BAGONG PROJECT: kopyahin ang isang buong bloke mula { hanggang },
   i-paste sa ilalim ng huling bloke, at palitan ang laman.

   MGA LARAWAN:
   1. Ilagay ang larawan sa folder:  images/projects/<id ng project>/
      Halimbawa:  images/projects/spreadsheet-mastery/01.jpg
   2. Sa project, gawing ganito ang images:
        images: [ { file: `01.jpg`, caption: `Expense tracker` },
                  { file: `02.jpg`, caption: `Sales tracker` } ],
   3. Para sa larawan sa mismong card, lagyan ng  cover: `cover.jpg`,
   Kapag walang laman ang images, placeholder ang ipapakita.

   cls ay ang kulay ng cover kapag walang larawan: c1, c2, o c3.
   ========================================================================== */
var PROJECTS = [
  {
    id: `academic-activity-tracker`,
    cls: `c1`,
    cover: `tracker-interface.jpg`,
    title: `Academic Activity Tracker & Ledger`,
    cat: `Systems · Google Sheets and Apps Script`,
    short: `A spreadsheet system that tracks academic activities, deadlines, and submissions, automated with Apps Script.`,
    overview: `A personal tracking system that organizes academic activities, monitors deadlines, and keeps submission records in one spreadsheet enhanced with Google Apps Script to automate repetitive tracking, document organization, and record synchronization.`,
    objectives: [
      `Keep academic activities, deadlines, and submission records in one place`,
      `Monitor deadlines and submission status at a glance`,
      `Automate repetitive tracking and document organization`
    ],
    challenge: `Academic activities, attendance proofs, supporting files, and class notes can end up spread across many sheets and Drive folders, which makes deadlines and submissions easy to lose track of.`,
    approach: [
      `Organized activity records with deadline monitoring and a remaining-days calculation`,
      `Tracked submission status and added an activity summary with unique activity identification`,
      `Used Google Apps Script to match attendance IDs to files in Google Drive and create proof links`,
      `Linked supporting files to their respective submission records`,
      `Synchronized class notes and related records across sheets and Drive folders`
    ],
    tools: [`Google Sheets`, `Google Apps Script`, `Google Drive`, `Workflow automation`, `Records management`],
    toolsNote: ``,
    results: ``,
    images: [
      { file: `tracker-interface.jpg`, caption: `The full tracker: course, activity, deadline, status, and submission records in one view` },
      { file: `tracker-rows.jpg`, caption: `Status, submission links, outputs, and proof links for each activity` },
      { file: `apps-script-code.jpg`, caption: `The Google Apps Script that automates notes and proof syncing (folder IDs hidden)` },
      { file: `drive-folders.jpg`, caption: `The organized Google Drive folder structure the script connects to` }
    ]
  },
  {
    id: `social-media-campaign-support`,
    cls: `c2`,
    cover: ``,
    title: `Social Media Campaign Support`,
    cat: `Posts and graphics · Social media`,
    short: `Sample content scheduling, basic graphics, and engagement monitoring.`,
    overview: `Sample social media marketing support tasks, including content scheduling, basic graphic creation, and engagement monitoring. This project highlights the ability to maintain a consistent brand presence online.`,
    objectives: [
      `Plan and schedule content consistently`,
      `Create basic graphics that fit a brand`,
      `Monitor engagement on published posts`
    ],
    challenge: `Keeping a brand visible online takes steady scheduling, consistent visuals, and regular engagement checks.`,
    approach: [
      `Planned and scheduled content for a consistent posting rhythm`,
      `Created basic graphics to support the posts`,
      `Monitored engagement to keep the brand presence consistent`
    ],
    tools: [`Content scheduling`, `Basic graphic creation`, `Engagement monitoring`],
    toolsNote: `Add the apps you used for this project, for example Canva or CapCut.`,
    results: ``,
    images: []
  },
  {
    id: `spreadsheet-mastery`,
    cls: `c3`,
    cover: ``,
    title: `Spreadsheet Mastery`,
    cat: `Systems · Spreadsheets`,
    short: `Sample spreadsheets for tracking expenses, sales, and project timelines.`,
    overview: `Highlights expertise in spreadsheet management and analysis. Includes sample projects demonstrating the creation of dynamic spreadsheets for tracking expenses, sales, and project timelines, with formulas and data visualization.`,
    objectives: [
      `Track expenses, sales, and project timelines in dynamic spreadsheets`,
      `Use formulas to calculate and update figures`,
      `Present data with clear visualizations`
    ],
    challenge: `Figures are hard to read and keep accurate unless they are organized and calculated consistently.`,
    approach: [
      `Built dynamic spreadsheets for expenses, sales, and project timelines`,
      `Applied formulas to calculate figures automatically`,
      `Added data visualization to make the numbers easier to read`
    ],
    tools: [`Spreadsheet management`, `Formulas`, `Data visualization`],
    toolsNote: `Add the spreadsheet app you used, for example Google Sheets or Excel.`,
    results: ``,
    images: []
  }
];

/* ==========================================================================
   MGA TOOL
   --------------------------------------------------------------------------
   PAGDAGDAG: kopyahin ang isang linyang { n: ... }, at i-paste sa loob ng
   group na bagay dito.
   LOGO: ilagay ang logo file sa folder  images/logos/  (halimbawa canva.png)
   at isulat sa tool:  logo: `canva.png`
   Kapag walang logo, bilog na may unang letra ang ipapakita.
   ========================================================================== */
var TOOLS = [
  { group: `Create`, items: [
    { n: `Canva`, logo: `canva.png`, what: `An online design tool with ready-made templates.`, use: `Social posts, carousels, covers, and graphics that match a brand.`, why: `Clients need a steady stream of on-brand visuals. Templates and brand kits keep colors and fonts consistent and let me deliver quickly.` },
    { n: `CapCut`, logo: `capcut.png`, what: `A video editor built for short clips.`, use: `Reels, TikToks, and Shorts: trimming, captions, music, and transitions.`, why: `Short video earns strong reach on social platforms. Quick, clean editing keeps a posting schedule on track.` },
    { n: `Google Flow`, logo: ``, what: `Google's AI tool for making video clips from text prompts.`, use: `Drafting short visual ideas and concept clips.`, why: `AI video tools speed up first drafts. Knowing them lets me offer ideas fast, then review and polish before anything is published.` }
  ]},
  { group: `Marketing`, items: [
    { n: `Meta Ads Manager`, logo: `meta.png`, what: `Meta's tool for creating and tracking ads on Facebook and Instagram.`, use: `Setting up campaigns, audiences, and budgets, and reading the results.`, why: `Posts alone reach a limited audience. Understanding ads helps me support clients who want new customers and need to see what is working.` },
    { n: `Mailchimp`, logo: `mailchimp.png`, what: `An email marketing platform.`, use: `Building newsletters, managing subscriber lists, and scheduling sends.`, why: `Email reaches people directly without depending on an algorithm. Clean lists and steady sends keep a client's audience engaged.` }
  ]},
  { group: `Organize and communicate`, items: [
    { n: `Trello`, logo: `trello.png`, what: `A board-style task manager with lists and cards.`, use: `Tracking content, tasks, and client requests from idea to done.`, why: `Clients can see what is planned, in progress, and finished. Clear boards cut back-and-forth and missed deadlines.` },
    { n: `Slack`, logo: `slack.png`, what: `Team messaging organized into channels.`, use: `Daily updates, quick questions, and shared files with a client's team.`, why: `Many remote teams run on it. Clear replies and tidy channels keep communication fast and easy to find later.` },
    { n: `Zoom`, logo: `zoom.png`, what: `A video meeting platform.`, use: `Client calls, check-ins, and screen sharing.`, why: `Remote work depends on clear meetings. Scheduling, hosting, and sharing a screen smoothly makes every session look professional.` },
    { n: `Microsoft Teams`, logo: `teams.png`, what: `Chat and meetings inside Microsoft 365.`, use: `Meetings, chat, and shared files for organizations that use Microsoft.`, why: `Some clients use Teams instead of Slack or Zoom. Being comfortable in it means no setup friction on day one.` }
  ]},
  { group: `Office and automation`, items: [
    { n: `Google Workspace`, logo: `google-workspace.png`, what: `Gmail, Calendar, Drive, Docs, and Sheets.`, use: `Managing inboxes, calendars, documents, spreadsheets, and shared folders.`, why: `These are the daily tools of admin work. An organized inbox, calendar, and file system saves a client hours each week.` },
    { n: `Microsoft Office`, logo: `microsoft-office.png`, what: `Word, Excel, PowerPoint, and Outlook.`, use: `Documents, spreadsheets, presentations, and reports.`, why: `Many businesses still send and receive files in Office formats. Being fluent means no conversion problems and no delays.` },
    { n: `Google Apps Script`, logo: `apps-script.png`, what: `A scripting tool that automates Google apps.`, use: `Automating repeated steps in Sheets, Drive, and Gmail, as in my Academic Activity Tracker.`, why: `Automation removes repetitive tasks and human error, so time goes to work that needs judgment.` }
  ]},
  { group: `AI assistants`, items: [
    { n: `ChatGPT`, logo: `chatgpt.png`, what: `An AI assistant from OpenAI.`, use: `Drafting captions, outlining content, brainstorming, and summarizing.`, why: `AI speeds up first drafts. Checking the output for accuracy and brand voice is the skill that makes it useful to a client.` },
    { n: `Gemini`, logo: `gemini.png`, what: `Google's AI assistant.`, use: `Research, summaries, and drafting that connects with Google apps.`, why: `It helps me gather and organize information quickly. I still verify facts before they reach a client.` },
    { n: `Claude`, logo: `claude.png`, what: `An AI assistant from Anthropic.`, use: `Drafting, editing, organizing information, and building small tools.`, why: `Good for turning rough notes into clear writing. Human review keeps the final work accurate and on brand.` }
  ]}
];
