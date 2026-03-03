import Image from "next/image";

export const metadata = { title: "Morrison Dining" };

interface TimelineEntry {
  date: string;
  caption: string;
  image: string;
  imageAlt?: string;
  audio?: string;
}

const entries: TimelineEntry[] = [
  {
    date: "September 27th, 2022",
    caption: "Reid excitedly sends the original email for the idea",
    image: "https://server.reidf.net/reidf_files/other/morrison/1",
  },
  {
    date: "September 30th, 2022",
    caption: "Reid visits the dish room with Cornell Dining admin to discuss ideas",
    image: "https://server.reidf.net/reidf_files/other/morrison/dishroom",
  },
  {
    date: "October 20th, 2022",
    caption: "Reid deposits notes onto the Morrison dish drop to thank the staff for their hard work",
    image: "https://server.reidf.net/reidf_files/other/morrison/notes",
  },
  {
    date: "October 20th, 2022",
    caption: "😊😊😊",
    image: "https://server.reidf.net/reidf_files/other/morrison/noteemail",
  },
  {
    date: "October 22nd, 2022",
    caption: "Reid begins doing investigative work",
    image: "https://server.reidf.net/reidf_files/other/morrison/notesapp",
  },
  {
    date: "November 7th, 2022",
    caption: "Reid presents his ideas at his first Student Assembly Dining Committee Meeting",
    image: "https://server.reidf.net/reidf_files/other/morrison/1stsamtg",
  },
  {
    date: "November 14th, 2022",
    caption: "Cornell Dining is interested, and Reid knows he can't do it alone and assembles a team to tackle the issue",
    image: "https://server.reidf.net/reidf_files/other/morrison/team",
  },
  {
    date: "November 20th, 2022",
    caption: "We come up with a drawing of our first idea",
    image: "https://server.reidf.net/reidf_files/other/morrison/firstidea",
  },
  {
    date: "November 21st, 2022",
    caption: "We have fun weighing various Morrison items to make sure our solution will work",
    image: "https://server.reidf.net/reidf_files/other/morrison/weigh",
  },
  {
    date: "November 22nd, 2022",
    caption: "Reid presents the idea to Director of Cornell Dining and Morrison General Manager. They like the idea, but say to come back to them once Morrison is better staffed",
    image: "https://server.reidf.net/reidf_files/other/morrison/1-2",
  },
  {
    date: "December 5th, 2022",
    caption: "Reid presses his passion and ideas again at his 2nd SA Dining Meeting. Morrison GM, Dustin, promises reusable small plates and bowls next semester",
    image: "https://server.reidf.net/reidf_files/other/morrison/2ndsamtg",
  },
  {
    date: "January 18th, 2023",
    caption: "Promise is kept!",
    image: "https://server.reidf.net/reidf_files/other/morrison/smallplates",
  },
  {
    date: "March 2nd, 2023",
    caption: "Reid does a lot of thinking, and comes up with a new idea that he presents to Dustin",
    image: "https://server.reidf.net/reidf_files/other/morrison/7",
  },
  {
    date: "March 21st, 2023",
    caption: "Reid mentions this again at the next SA meeting, and gains support from the Senior Executive Director of Cornell Dining. Dustin agrees to try this out!",
    image: "https://server.reidf.net/reidf_files/other/morrison/dustingood",
  },
  {
    date: "March 21st, 2023",
    caption: "The same day, in a surprise turn of events — real plates show up at Morrison for the first time ever!",
    image: "https://server.reidf.net/reidf_files/other/morrison/plates",
  },
  {
    date: "March 30th, 2023",
    caption: "After chasing Dustin around the dining hall a little more, Reid finally gets him to try the utensil separation out",
    image: "https://server.reidf.net/reidf_files/other/morrison/utensils",
  },
  {
    date: "March 30th, 2023",
    caption: "Was a little rough on the edges — made some suggestions to make it better",
    image: "https://server.reidf.net/reidf_files/other/morrison/suggestions",
  },
  {
    date: "April 9th, 2023",
    caption: "Was a little worried the bins wouldn't survive spring break. They did, and these were confirmed to be a permanent addition to the dining hall!",
    image: "https://server.reidf.net/reidf_files/other/morrison/afterbreak",
  },
  {
    date: "April 9th, 2023",
    caption: "Bethe Dining Hall became jealous!",
    image: "https://server.reidf.net/reidf_files/other/morrison/bethe",
  },
  {
    date: "April 14th, 2023",
    caption: "Becker too!!",
    image: "https://server.reidf.net/reidf_files/other/morrison/becker",
  },
  {
    date: "April 14th, 2023",
    caption: "Basking in the glow",
    image: "https://server.reidf.net/reidf_files/other/morrison/sidechat",
  },
  {
    date: "April 18th, 2023",
    caption: "More and more stations have real plates",
    image: "https://server.reidf.net/reidf_files/other/morrison/moreplates",
  },
  {
    date: "May 8th, 2023",
    caption: "Getting famous",
    image: "https://server.reidf.net/reidf_files/other/morrison/famous",
  },
  {
    date: "May 11th, 2023",
    caption: "Won the most prestigious sustainability award at Cornell for my efforts",
    image: "https://server.reidf.net/reidf_files/other/morrison/ssa",
  },
  {
    date: "Aug 20th, 2023",
    caption: "I thought this day would never come…Morrison Dining was officially on fully reusable dishware. My bins were still in action. I couldn't sleep that night.",
    image: "https://server.reidf.net/reidf_files/other/morrison/fa23",
  },
  {
    date: "September 1st, 2023",
    caption: "North Star gets jealous!",
    image: "https://server.reidf.net/reidf_files/other/morrison/northstar",
  },
  {
    date: "September 11th, 2023",
    caption: "Got a huge round of applause from everyone in Dining administration and all the students for all my successful efforts and persistence at the first SA meeting of FA 23 🥹 It really can't get any better than this…",
    image: "https://server.reidf.net/reidf_files/other/morrison/applause",
  },
  {
    date: "October 17th, 2023",
    caption: "A small blip in the system, but I have hope it will get better!",
    image: "https://server.reidf.net/reidf_files/other/morrison/laura",
    audio: "https://server.reidf.net/reidf_files/other/morrison/laura",
  },
];

export default function MorrisonPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Morrison Dining</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          1 Year In The Life of A Boy Who Wanted To Help Morrison
        </p>
      </div>

      <div className="flex flex-row gap-6 overflow-x-auto pb-4 -mx-4 px-4">
        {entries.map((entry, i) => (
          <div key={i} className="flex flex-col gap-3 shrink-0 w-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.image}
              alt={entry.caption}
              className="rounded-xl w-full h-64 object-cover"
            />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                {entry.date}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm">
                {entry.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
