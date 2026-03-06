export type ExperienceType =
  | "full-time"
  | "part-time"
  | "internship"
  | "extracurricular"
  | "project";

export const typeLabels: Record<ExperienceType, string> = {
  "full-time": "Full-Time",
  "part-time": "Part-Time",
  internship: "Internship",
  extracurricular: "Extracurricular",
  project: "Project",
};

export const typeColors: Record<ExperienceType, string> = {
  "full-time": "bg-blue-100 text-blue-800 bg-blue-900 text-blue-200",
  "part-time": "bg-sky-100 text-sky-800 bg-sky-900 text-sky-200",
  internship: "bg-green-100 text-green-800 bg-green-900 text-green-200",
  extracurricular: "bg-purple-100 text-purple-800 bg-purple-900 text-purple-200",
  project: "bg-orange-100 text-orange-800 bg-orange-900 text-orange-200",
};

export type LinkIcon = "github" | "globe" | "external" | "video" | "paper";

export interface ExperienceLink {
  url: string;
  label: string;
  icon?: LinkIcon;
}

export interface Experience {
  id: string;
  image: string;
  title: string;
  dates: string;
  position?: string;
  description?: string;
  techStack?: string[];
  links?: ExperienceLink[];
  titleUrl?: string;
  location?: string;
  type: ExperienceType;
}

export const experiences: Experience[] = [
  {
    id: "compass",
    image: "/logos/compass.jpg",
    title: "Compass",
    position: "iOS Engineer",
    dates: "Jan 2026 - Present",
    description:
    `<ul>
      <li>Developing core features across agent &amp; client tools, including re-tooling universal links and push notifications to support a major acquisition</li>
      <li>Improved internal software catalog tool by integrating multiple data sources to help engineers find ownership of services</li>
    </ul>`,
    techStack: ["Swift", "SwiftUI", "UIKit", "Kotlin", "React"],
    location: "🗽 New York, NY",
    titleUrl: "https://www.compass.com",
    type: "full-time",
  },
  {
    id: "nowadays",
    image: "/logos/nowadays.jpg",
    title: "Nowadays",
    position: "Product Engineer Intern",
    dates: "Aug 2025 - Dec 2025",
    description:
    `<ul>
      <li>Built core internal and customer-facing features, including AI agents, to automate venue sourcing, attendee management, and negotiations</li>
      <li>Built UI and voice/text AI features to launch a venue review platform, The Venue Collective</li>
    </ul>`,
    techStack: ["React", "Next.js", "Supabase", "ElevenLabs", "Phonic", "Vapi"],
    location: "🌉 San Francisco, CA",
    titleUrl: "https://www.nowadays.ai",
    links: [
      { url: "https://www.nowadays.ai/login/?redirect=%2Fvenue-collective%2F", label: "The Venue Collective", icon: "globe" },
    ],
    type: "internship",
  },
    {
    id: "lifted",
    image: "/logos/lifted.png",
    title: "Cornell Lifted",
    position: "Project Lead",
    dates: "Apr 2024 - May 2025",
    description:
    `<ul>
      <li>Revamped and executed two peer-to-peer gratitude events with 7,500+ participants; led a team of 30+ volunteers</li>
      <li>Collaborated across Cornell departments and administrators; developed and managed $8,000 budget</li>
      <li>Developed a full-stack web app to facilitate the event and automate repetitive processes (e.g., emails, PDF conversion); saved 50+ hours and eliminated errors</li>
    </ul>`,
    techStack: ["React", "Next.js", "Flask", "Supabase", "OIDC Auth", "LDAP"],
    location: "🍁 Ithaca, NY",
    titleUrl: "https://cornelllifted.com/",
    links: [
      { url: "https://cornelllifted.com/", label: "Web App", icon: "globe" },
      { url: "https://github.com/thereidfleish/cornell-lifted", label: "GitHub", icon: "github" },
    ],
    type: "extracurricular",
  },
      {
    id: "esw",
    image: "/logos/esw.jpg",
    title: "Cornell Engineers for a Sustainable World",
    position: "Energy Dashboard Lead and Carbon Neutrality Lead",
    dates: "Sep 2022 - May 2025",
    description:
    `<ul>
      <li>Developed a web dashboard to monitor the energy usage of 1,500+ fume hoods (highest energy consuming devices on campus)</li>
      <li>Led four teams and projects across 25 students to accelerate Cornell’s carbon neutrality goals</li>
      <li>Automated team-wide recruitment with Python scripts and HubSpot emails; saving 10+ hours each application cycle</li>
    </ul>`,
    techStack: ["HTML", "CSS", "Plotly Dash", "DynamoDB", "Python", "Sustainability", "Leadership", "Hubspot"],
    location: "🍁 Ithaca, NY",
    titleUrl: "https://esw.engineering.cornell.edu/",
    links: [
      { url: "/projects/fumehood/1.png", label: "Web App", icon: "globe" },
      { url: "https://esw.engineering.cornell.edu/indexPROJECTS_CN.html", label: "CN Projects", icon: "globe" },
      { url: "https://github.com/thereidfleish/fume-hood-dashboard", label: "GitHub", icon: "github" },
    ],
    type: "extracurricular",
  },
        {
    id: "ccra",
    image: "/logos/ccra.jpg",
    title: "Cornell Computer Reuse Association",
    position: "President",
    dates: "Sep 2022 - May 2025",
    description:
    `<ul>
      <li>Led repurposing of 350+ old computers (fixing hard drive, RAM, power supply, fan, and OS issues) for donation to underserved populations globally</li>
      <li>Collaborated with donors, recipients, and administrators</li>
      <li>Increased club membership by 4x through 5+ Repair Fair events, tabling, and social media</li>
    </ul>`,
    techStack: ["HTML", "CSS", "JS", "Leadership", "Sustainability"],
    location: "🍁 Ithaca, NY",
    titleUrl: "https://www.cornellcomputerreuse.org/",
    links: [
      { url: "https://www.cornellcomputerreuse.org/", label: "Website", icon: "globe" },
      { url: "https://github.com/thereidfleish/ccra-webstie", label: "GitHub", icon: "github" },
    ],
    type: "extracurricular",
  },
  {
    id: "spotify",
    image: "/logos/spotify.jpg",
    title: "Spotify",
    position: "iOS Engineer Intern",
    dates: "Jun 2024 - Aug 2024",
    description:
    `<ul>
      <li>Built a new major iOS component (ad format/placement on the Search tab with images, buttons, and animation) expected to reach 212M users weekly.  Developed UI, behavior, models, and feature flags.</li>
      <li>Spearheaded initiative to create a reusable ad header component, saving 100s of lines of code across ad formats</li>
      <li>Improved UX and accessibility of in-app web browser and video ad formats; fixed 5+ bugs including UI and logging issues</li>
    </ul>`,
    techStack: ["Swift", "UIKit", "Objective-C"],
    titleUrl: "https://www.spotify.com",
    location: "🗽 New York, NY",
        links: [
      { url: "https://ads.spotify.com/en-US/ad-formats/display-ads/", label: "View My Work!", icon: "globe" },
    ],
    type: "internship",
  },
    {
    id: "anabels",
    image: "/logos/anabels.jpg",
    title: "Anabels Grocery",
    position: "Operations Team Member",
    dates: "Jan 2024 - May 2025",
    description:
    `<ul>
      <li>Streamlined customer checkout experience by adding barcodes to products, re-organizing the POS, and creating a custom Shopify POS UI Extension.  These initiatives increased checkout efficiency by 2x</li>
      <li>Worked weekly 2-hr shifts in all positions (cashier, maintaining stock, helping customers, etc.)</li>
      <li>Created a web app for a petition for restored funding, gaining 2700+ signatures</li>
    </ul>`,
    techStack: ["React", "Shopify", "Qualtrics API", "Flask", "Jinja2", "SQLite"],
    titleUrl: "https://www.anabelsgrocery.org/",
    location: "🍁 Ithaca, NY",
    links: [
      { url: "https://petition.anabelsgrocery.org/", label: "Petition for Funding", icon: "globe" },
    ],
    type: "extracurricular",
  },
      {
    id: "rsls",
    image: "/logos/rsls.jpg",
    title: "Cornell Residential Sustainability Leaders",
    position: "Dining Subteam Lead",
    dates: "Sep 2022 - May 2025",
    description:
    `<ul>
      <li>Proposed and designed a student-facing utensil separation and sorting system to improve dish room efficiency at Morrison Dining, the largest dining hall on campus. This system reduces the number of items placed on the dish carousel and helps staff wash utensils quicker, which enabled Morrison to fully transition to reusable dishware in Spring/Fall 2023.</li>
      <li>Co-led an initiative to increase the discount of Cornell Dining's reusable mug program and implement a reusable mug punch card rewards program.</li>
    </ul>`,
    techStack: ["Leadership", "Sustainability", "Operations"],
    titleUrl: "https://www.cornellresidentialsustainabilityleaders.org/",
    location: "🍁 Ithaca, NY",
    links: [
      { url: "https://www.cornellresidentialsustainabilityleaders.org/teams/dining", label: "Morrison Utensil Separation Project", icon: "globe" },
      { url: "https://scl.cornell.edu/news-events/news/beverage-punch-card-sustainability", label: "Beverage Punch Card", icon: "paper" },
      { url: "https://www.cornellsun.com/article/2024/11/reid-fleishmans-25-passionate-pursuit-of-sustainability-at-morrison-dining-hall", label: "Daily Sun Article", icon: "paper" },
      { url: "https://president.cornell.edu/speeches-writings/2024-state-of-the-university-address/", label: "Cornell President Recognizes Me", icon: "globe" },
    ],
    type: "extracurricular",
  },
  {
    id: "bloomx",
    image: "/logos/bloomx.jpg",
    title: "BloomX",
    position: "Full Stack Engineer Intern",
    dates: "Jun 2023 - Aug 2023",
    description:
    `<ul>
      <li>Built two new major web dashboard features (authentication and real-time hardware testing) on the frontend and backend using Angular and Flask</li>
      <li>Fixed 10+ bugs, improved performance, and developed a fully responsive UI through HTML/CSS refactoring</li>
      <li>Enhanced product security by creating encrypted, regularly changing wireless passwords for connection to the Raspberry Pi</li>
      <li>Improved version management by switching from manual version numbering to automatically fetching Git commit hashes</li>
    </ul>`,
    techStack: ["Angular", "Flask", "HTML", "CSS", "TypeScript", "Linux", "Raspberry Pi", "Arduino"],
    location: "🏖️ Rishpon, IL",
    titleUrl: "https://bloomx.ag/",
    type: "internship",
  },
  {
    id: "cusd",
    image: "/logos/cusd.jpg",
    title: "Cornell University Sustainable Design",
    position: "iOS App Lead",
    dates: "Sep 2022 - May 2023",
    description:
    `<ul>
      <li>Led a team to design and develop an iOS app to control Cornell's HVAC systems based on room occupancy</li>
      <li>Handled POST/GET requests with URLRequest, implemented Google OAuth, managed async loading state</li>
      <li>Collaborated with stakeholders at Cornell and demoed app to Cornell Center for Technology Licensing</li>
    </ul>`,
    techStack: ["Swift", "SwiftUI", "Figma"],
    location: "🍁 Ithaca, NY",
    titleUrl: "https://cusd.cornell.edu/",
    links: [
      { url: "https://docs.google.com/presentation/d/1fi9TYraUecu6A8_jfte3hNKVPj0xP3lDrI6Fx9Ho6tk/edit?slide=id.g1d198d8e939_0_275#slide=id.g1d198d8e939_0_275", label: "Currents Pitch", icon: "globe" },
    ],
    type: "extracurricular",
  },
    {
    id: "pa-ta",
    image: "/logos/cornelleng.jpg",
    title: "Cornell Duffield Engineering",
    position: "Peer Advisor and Teaching Assistant",
    dates: "Aug 2022 - May 2023",
    description:
    `<ul>
      <li>Selected to teach a weekly Engineering Seminar class and advise 20+ freshmen in engineering academics/programs.  Nominated for the Peer Advisor Outstanding Service Award.</li>
      <li>TA for ENGRI 1165: Climate Change and You, the Engineer.  Held weekly office hours, organized class activities, and graded assignments for 50+ students.</li>
    </ul>`,
    techStack: ["TA", "Mentorship"],
    location: "🍁 Ithaca, NY",
    titleUrl: "https://www.duffield.cornell.edu/",
    links: [
      { url: "https://www.duffield.cornell.edu/advising/engineering-advising-office/peer-advisors/", label: "Peer Advisors", icon: "globe" },
      { url: "https://classes.cornell.edu/browse/roster/FA23/class/ENGRI/1165", label: "ENGRI 1165", icon: "globe" },
    ],
    type: "part-time",
  },
  {
    id: "myace",
    image: "/logos/myace.jpg",
    title: "MyAce",
    position: "Founding iOS Engineer",
    dates: "Dec 2021 - Jan 2023",
    description:
    `Led the design/development of an iOS app (Figma, SwiftUI) to improve tennis coach/student communication`,
    techStack: ["Swift", "SwiftUI", "Figma"],
    location: "🍁 Ithaca, NY",
    links: [
      { url: "https://github.com/thereidfleish/myace", label: "GitHub", icon: "github" },
    ],
    type: "extracurricular",
  },
    {
    id: "cev",
    image: "/logos/cev.jpg",
    title: "Cornell Electric Vehicles",
    position: "iOS App Developer",
    dates: "Oct 2021 - Dec 2022",
    description:
    `<ul>
      <li>Proposed/configured HubSpot to automate email communications with 100s of sponsors and team members</li>
      <li>Scripted, filmed, and edited two promotional team videos to raise over $7,500; managed team social media</li>
      <li>Configured new team email and CAD server</li>
      <li>Worked on autonomous vehicle simulation using Gazebo</li>
    </ul>`,
    techStack: ["Simulation", "Video Editing", "Operations"],
    location: "🍁 Ithaca, NY",
    titleUrl: "https://www.cornellelectricvehicles.org/",
    links: [
      { url: "https://www.youtube.com/watch?v=elLplcWUzDw", label: "Giving Day Video", icon: "video" },
      { url: "https://www.youtube.com/watch?v=Nf2YCHuA7MQ", label: "Recruitment Video", icon: "video" },
    ],
    type: "extracurricular",
  },
  {
    id: "mountsinai",
    image: "/logos/mountsinai.jpg",
    title: "Ma'ayan Lab",
    position: "Bioinformatics Intern",
    dates: "Jun 2022 - Aug 2022",
    description:
    `<ul>
      <li>Processed/added Tabula Sapiens scRNA-seq data to the Tumor Gene Target Screener Appyter</li>
      <li>Created a new Enrichr library from the Tabula Sapiens dataset</li>
      <li>Presented project at public symposium; research published in peer-reviewed Aging Cell and Nucleic Acids Research journals</li>
    </ul>`,
    techStack: ["Pandas", "Numpy", "Python"],
    location: "🍁 Ithaca, NY",
    titleUrl: "https://labs.icahn.mssm.edu/maayanlab/",
    links: [
      { url: "https://appyters.maayanlab.cloud/#/Tumor_Gene_Target_Screener", label: "Tumor Gene Target Screener", icon: "globe" },
      { url: "https://www.youtube.com/watch?v=4HZqDsilOlo", label: "Project Presentation", icon: "video" },
      { url: "https://onlinelibrary.wiley.com/doi/full/10.1111/acel.13809", label: "Aging Cell Paper", icon: "paper" },
      { url: "https://academic.oup.com/nar/article/51/W1/W213/7160193", label: "Nucleic Acids Paper", icon: "paper" },
    ],
    type: "internship",
  },
  {
    id: "gnpstv",
    image: "/logos/gnpstv.jpg",
    title: "Great Neck Public Schools TV",
    position: "Audio-Visual Helper",
    dates: "Jun 2018 - Aug 2022",
    description:
    `<ul>
      <li>Filmed and edited 10+ district videos, including graduations, school events, and more</li>
      <li>Researched/configured digital signage televisions and software for in-school display</li>
      <li>Transitioned studio to new Premiere Pro and researched/configured 5+ new high-end studio computers</li>
      <li>Organized over 50 years of video footage</li>
      <li>Made purchasing decisions</li>
    </ul>`,
    techStack: ["Final Cut Pro", "Premiere Pro", "IT", "DSLR Filming", "Operations"],
    location: "🏡 Great Neck, NY",
    titleUrl: "https://www.greatneck.k12.ny.us/programs/gnpstv/home",
    type: "part-time",
  },
    {
    id: "qt",
    image: "/logos/qt.jpg",
    title: "Quarantine Tutors",
    position: "Solo iOS Engineer",
    dates: "Dec 2020 - Dec 2021",
    description:
    `Designed/developed frontend and backend of an iOS app to facilitate 4,500+ tutoring sessions`,
    techStack: ["Swift", "SwiftUI", "Firebase"],
    location: "🖥️ Remote",
    titleUrl: "https://abc7ny.com/videoClip/6260196/",
    links: [
      { url: "https://apps.apple.com/dz/app/qtutors/id1546893198", label: "App Store Link", icon: "globe" },
    ],
    type: "part-time",
  },
  {
    id: "robotics",
    image: "/logos/robotics.png",
    title: "Rebel Robotics FRC Team 2638",
    position: "Team Lead, CAD & Digital/Social Media Lead",
    dates: "Sep 2017 - Jun 2021",
    description:
    `<ul>
      <li>Led training of new members through presentations and hands-on workshops. Active participant in team recruitment and outreach; grew membership by 100+</li>
      <li>Created course to teach 75+ students CAD in Autodesk Inventor and configured a remote WebDAV server to access CAD files anywhere in the world</li>
      <li>Created two award-winning Chairman’s Award videos, two robot reveal videos, and "Country Roads" video to foster team connection during COVID</li>
      <li>Redesigned team website</li>
      <li>Started team Apps Committee (Scouting App and Parts & Tools App)</li>
    </ul>`,    techStack: ["SolidWorks", "Autodesk Fusion 360", "Adobe Creative Suite", "Python"],
    location: "🏡 Great Neck, NY",
    titleUrl: "https://gnsrobotics.com/",
    links: [
      { url: "https://gnsrobotics.com/", label: "Team Website", icon: "globe" },
      { url: "https://www.gnsrobotics.com/impact/cad/", label: "CAD Course", icon: "globe" },
      { url: "https://apps.apple.com/us/app/2638-scout/id1460336620", label: "Scouting App", icon: "globe" },
      { url: "https://www.youtube.com/watch?v=QFwCCbsWXj0", label: "2019 Winning Chairman's Award Video", icon: "video" },
      { url: "https://www.youtube.com/watch?v=Z4IICUNg2Bw", label: "2019 Robot Reveal Video", icon: "video" },
      { url: "https://www.youtube.com/watch?v=-2-xiex9E-Q", label: "Country Roads Video", icon: "video" },
    ],
    type: "extracurricular",
  },
];

