import { experiences, type ExperienceLink } from "./experience";

export type ProjectType = "software" | "engineering-operations" | "research";

export const projectTypeLabels: Record<ProjectType, string> = {
    software: "Software",
    "engineering-operations": "Engineering/Operations",
    research: "Research",
};

export const projectTypeColors: Record<ProjectType, string> = {
    software: "bg-blue-100 text-blue-800 bg-blue-900 text-blue-200",
    "engineering-operations": "bg-amber-100 text-amber-800 bg-amber-900 text-amber-200",
    research: "bg-teal-100 text-teal-800 bg-teal-900 text-teal-200",
};

export interface Project {
    id: string;
    image: string;
    title: string;
    dates: string;
    type: ProjectType;
    position?: string;
    description?: string;
    techStack?: string[];
    links?: ExperienceLink[];
    titleUrl?: string;
    location?: string;
}

export const projects: Project[] = [
    {
        id: "lifted",
        image: experiences.find((e) => e.id === "lifted")!.image,
        title: "Cornell Lifted",
        dates: "Apr 2024 - Present",
        description: "Over the course of my senior year, I led two peer-to-peer gratitude events with 7,500+ participants.  Lifted is a beloved tradition at Cornell, and I led a team to take this event to the next level.  As part of this initiative, I built a full-stack web app to facilitate the event and automate repetitive processes (e.g., emails, PDF conversion), which has saved us dozens of hours and eliminated countless errors from previous manual processes.  The site currently sees approximately 7,500+ active users each year.  Although I have graduated, I still maintain the web app and assist with the event planning each year.",
        techStack: experiences.find((e) => e.id === "lifted")!.techStack,
        links: experiences.find((e) => e.id === "lifted")!.links,
        titleUrl: "/projects/lifted",
        type: "software",
    },
    {
        id: "morrison",
        image: "/logos/morrison.jpg",
        title: "Morrison Dining Utensil Separation Bins",
        dates: "Sep 2022 - May 2025",
        description: "I saw a huge sustainability problem in many dining halls on Cornell's campus: the utilization of disposable paper dishes and plastic utensils. This was particularly an issue in Morrison Dining, the brand-new largest dining hall on campus, which struggled to utilize reusable dishes and utensils due to understaffing.",
        techStack: experiences.find((e) => e.id === "rsls")!.techStack,
        links: [
            { url: "https://www.cornellsun.com/article/2024/11/reid-fleishmans-25-passionate-pursuit-of-sustainability-at-morrison-dining-hall", label: "Daily Sun Article", icon: "paper" },
            { url: "https://president.cornell.edu/speeches-writings/2024-state-of-the-university-address/", label: "Cornell President Recognizes Me", icon: "globe" },
        ],
        titleUrl: "/projects/morrison",
        type: "engineering-operations",
    },
    {
        id: "ccra-website",
        image: experiences.find((e) => e.id === "ccra")!.image,
        title: "Cornell Computer Reuse Association Website",
        dates: "Dec 2022",
        description: "For the final project of INFO 1300, an introductory web design and development class, we had to design and develop a static website for a client. My group and I choose the Cornell Computer Reuse Association, a club that I am a part of that repurposes and donates computers to those in need.",
        techStack: experiences.find((e) => e.id === "ccra")!.techStack,
        links: experiences.find((e) => e.id === "ccra")!.links,
        titleUrl: "/projects/ccra-website",
        type: "software",
    },
    {
        id: "fumehood",
        image: experiences.find((e) => e.id === "esw")!.image,
        title: "Cornell Fume Hood Dashboard",
        dates: experiences.find((e) => e.id === "esw")!.dates,
        description: "As part of my project in Engineers for a Sustainable World, I led the design and development of a web dashboard to display energy usage information about fume hoods that are left open on campus.",
        techStack: experiences.find((e) => e.id === "esw")!.techStack,
        links: experiences.find((e) => e.id === "esw")!.links,
        titleUrl: "/projects/fumehood",
        type: "software",
    },
    {
        id: "currents",
        image: experiences.find((e) => e.id === "cusd")!.image,
        title: "Currents iOS App",
        dates: experiences.find((e) => e.id === "cusd")!.dates,
        description: "As part of my project in Cornell University Sustainable Design, I designed and developed an app to control and optimize Cornell's HVAC systems based on room occupancy. Essentially, the app connects to an occupant's Google or Outlook calendar and will control the room's heating or cooling system according to whether they are in their room or not. We envision this being used mainly for single-occupancy rooms, such as professors' offices.",
        techStack: experiences.find((e) => e.id === "cusd")!.techStack,
        links: experiences.find((e) => e.id === "cusd")!.links,
        titleUrl: "/projects/currents",
        type: "software",
    },
    {
        id: "myace",
        image: experiences.find((e) => e.id === "myace")!.image,
        title: "MyAce iOS App",
        dates: experiences.find((e) => e.id === "myace")!.dates,
        description: "This is an app I worked on with some friends at Cornell aimed at improving communications between coaches, students, and parents in tennis clubs. One of my friends in the group is passionate about that and initiated the idea.",
        techStack: experiences.find((e) => e.id === "myace")!.techStack,
        links: experiences.find((e) => e.id === "myace")!.links,
        titleUrl: "/projects/myace",
        type: "software",
    },
    {
        id: "quarantine-tutors",
        image: "/logos/quarantine-tutors.png",
        title: "Quarantine Tutors iOS App",
        dates: experiences.find((e) => e.id === "qt")!.dates,
        description: "This was a fun app I made for Quarantine Tutors, an organization which coordinated free virtual tutoring services during the COVID-19 pandemic.",
        techStack: experiences.find((e) => e.id === "qt")!.techStack,
        links: experiences.find((e) => e.id === "qt")!.links,
        titleUrl: "/projects/quarantine-tutors",
        type: "software",
    },
    {
        id: "shs-app",
        image: "/logos/shs.jpg",
        title: "Great Neck South High School iOS App",
        dates: "Aug 2020 - Dec 2020",
        description: "Since entering high school, I had always wanted to re-make my school's app. It honestly wasn't very useful at all and I wanted to make it much better.  So after teaching myself how to make an app for Wash Your Hands Streaks (scroll down), I decided to bring my skills to a much more complicated app.",
        techStack: ["Swift", "SwiftUI", "CloudKit"],
        titleUrl: "/projects/shs-app",
        type: "software",
    },
    {
        id: "save-the-frontline",
        image: "/logos/stfl.png",
        title: "#SavetheFrontline Website",
        dates: "May 2020 - May 2021",
        description: "I was very proud to be part of SavetheFrontline, an organization made up of Cornell undergraduates/alumni that donates face masks to underserved residents in communities around Long Island and New York City.",
        techStack: ["Wordpress", "PHP"],
        links: [
            { url: "https://savethefrontline.org/", label: "Website", icon: "globe" },
        ],
        titleUrl: "/projects/save-the-frontline",
        type: "software",
    },
    {
        id: "wash-your-hands-streaks",
        image: "/logos/wash-your-hands-streaks.png",
        title: "Wash Your Hands Streaks iOS App",
        dates: "Mar 2020 - Apr 2020",
        description: "I had always wanted to learn how to make an app. No, not like half-make an app. Like, <i>really</i> make an app. And what better time would it have been for me to teach myself than when I was locked inside my house with, quite frankly, not much else to do (school had just closed down due to COVID-19).",
        techStack: ["Swift", "SwiftUI", "Firebase"],
        links: [
            { url: "https://apps.apple.com/us/app/wash-your-hands-streaks/id1503924536", label: "App Store Link", icon: "globe" },
        ],
        titleUrl: "/projects/wash-your-hands-streaks",
        type: "software",
    },
    {
        id: "scouting-app",
        image: "/logos/scouting-app.png",
        title: "Robotics Scouting App",
        dates: "Dec 2019",
        description: "It's way too hard to explain here, but basically my robotics team (and all of FRC for that matter) does something called Scouting, which is essentially keeping track of other teams at competitions so that if we had to pick them for our alliance, we would know their stats/strategies/weaknesses etc.  Most teams just use pen and paper. But we wanted to get creative and make a mobile app to do the trick.",
        links: [
            { url: "https://apps.apple.com/us/app/2638-scout/id1460336620", label: "App Store Link", icon: "globe" },
        ],
        titleUrl: "/projects/scouting-app",
        type: "software",
    },
    {
        id: "2638-stickers",
        image: "/logos/2638-stickers.png",
        title: "2638 Stickers",
        dates: "May 2019",
        description: "What's more fun than an iOS iMessage Sticker Pack???  Well, probably lots of things. But at the time (and still now), I thought that creating one of those little iOS iMessage Sticker Pack things that you use every once in a while would be pretty cool.",
        links: [
            { url: "https://apps.apple.com/us/app/2638-stickers/id1460620834", label: "App Store Link", icon: "globe" },
        ],
        titleUrl: "/projects/2638-stickers",
        type: "software",
    },
    {
        id: "2638-website",
        image: experiences.find((e) => e.id === "robotics")!.image,
        title: "Robotics Website Redesign",
        dates: "Apr 2018",
        description: "After getting my Synology server (see here), I had come up with the idea of redesigning the website for my robotics team. Not necessarily redesigning it as in changing how it looked, but more changing how it functioned and moving it from Wix to a Mac exclusive called RapidWeaver.",
        links: [
            { url: "https://gnsrobotics.com", label: "Website", icon: "globe" },
        ],
        titleUrl: "/projects/2638-website",
        type: "software",
    },
    {
        id: "robotics-cad",
        image: "/logos/robotics-cad.png",
        title: "Robotics CAD/Design",
        dates: "Jan 2018 -  Jun 2021",
        description: "Here are some of the major mechanisms I have either primarily designed or worked closely with other teammates to design for my robotics team.",
        titleUrl: "/projects/robotics-cad",
        type: "engineering-operations",
    },
    {
        id: "videowall",
        image: "/logos/videowall.jpg",
        title: "The Videowall",
        dates: "Jul 2018 - Aug 2021",
        description: "Ahhh yes. The Videowall.  This started in the summer going into 10th grade. It was my first summer job, and I was really excited to work at the Great Neck Public Schools TV Studio since it has really shaped who I am as a person.  One day, these two huge boxes just arrived. And the next thing I knew, I was working with those two huge Samsung Digital Signage monitors for the next couple weeks.",
        titleUrl: "/projects/videowall",
        type: "engineering-operations",
    },
    {
        id: "synology",
        image: "/logos/synology.jpg",
        title: "The Synology Server",
        dates: "Dec 2017 - Feb 2018",
        description: "I still remember the moment it happened. I was just about to get into the shower when I happened to look at the \"Accessories\" page on Apple's website and saw something called a Network Attached Storage. Intrigued at the new thing I had never seen before, I looked into it some more and realized that this was something useful for me.",
        titleUrl: "/projects/synology",
        type: "engineering-operations",
    },
    {
        id: "pancreatic-cancer-project",
        image: "/logos/pancreatic-cancer-project.png",
        title: "Creation of a Machine Learning App to Facilitate Pancreatic Cancer Prediction",
        dates: "Jan 2020 - Jun 2021",
        description: "It all started the summer before junior year in high school. While looking for a research project to conduct, I had found out that one of my good friend’s grandfathers had passed away due to pancreatic cancer. Given that he had received a late diagnosis, he was unable to survive for much time. I had been thinking of conducting a machine learning project, and after hearing that, I knew what I wanted to do — use machine learning for the early diagnosis of pancreatic cancer.",
        titleUrl: "/projects/pancreatic-cancer-project",
        links: [
            { url: "/projects/pancreatic-cancer-project/pcPaper.pdf", label: "Final Paper", icon: "paper" },
            { url: "/projects/pancreatic-cancer-project/nspcPres.pdf", label: "Final Presentation", icon: "paper" },
        ],
        type: "research",
    },
    {
        id: "planarian-blue-light",
        image: "/logos/planarian-blue-light.jpg",
        title: "Effect of Blue Light on Planarian Sleep",
        dates: "Jan 2019 - May 2019",
        description: "This was my first science research project and was part of my introductory research class.  We all had to choose our own projects, and I decided to come up with this one since I had known about the effects of blue light on sleep, and I thought it could be cool to investigate its effects on planarian, which was one of the only organisms we were allowed to use.",
        titleUrl: "/projects/planarian-blue-light",
        links: [
            { url: "/projects/planarian-blue-light/planariaposter.pdf", label: "Poster (apologies for the color...)", icon: "paper" },
        ],
        type: "research",
    },
];

