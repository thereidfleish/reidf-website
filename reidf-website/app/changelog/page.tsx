export const metadata = { title: "Changelog" };

const versions = [
  {
    version: "3.6.2",
    date: "2/4/25",
    changes: ["Updated various content throughout the website"],
  },
  {
    version: "3.6.1",
    date: "10/14/24",
    changes: ["Updated various content throughout the website"],
  },
  {
    version: "3.6",
    date: "1/21/24",
    changes: [
      "Updated content throughout the website",
      'Changed the name of the "Engineering Projects" page to "Engineering and Operations Projects," since, well, I guess I have done some operations-related stuff',
    ],
  },
  {
    version: "3.5.1",
    date: "10/10/23",
    changes: ["Added and updated content throughout the website"],
  },
  {
    version: "3.5",
    date: "1/7/23",
    changes: [
      "Added much more content throughout the website",
      "Updated existing content",
      "Various layout changes",
    ],
  },
  {
    version: "3.4.1",
    date: "12/13/22",
    changes: [
      "Updated professional information on home page",
      "Various backend changes",
    ],
  },
  {
    version: "3.4",
    date: "9/2/22",
    changes: [
      "Made some changes, hence, that is why I am typing my changes into the changelog. Actually, I am too tired tonight to explain my changes, so you'll just have to figure them out on your own! Perhaps the Wayback Machine could help with this? Not sure, because they probably never actually index my website because it is very unimportant in the grand scheme of things. Does anyone even read this changelog??? If you're reading this right now, send me an email :)",
    ],
  },
  {
    version: "3.3.1",
    date: "8/4/22",
    changes: [
      "Edited the blog post again",
      "Minor layout changes on the homepage",
    ],
  },
  {
    version: "3.3",
    date: "3/26/22",
    changes: ["Edited a blog post", "Added some videos", "Other changes"],
  },
  {
    version: "3.2",
    date: "2/12/22",
    changes: ["Added another blog post :)", "Minor edits"],
  },
  {
    version: "3.1",
    date: "1/20/22",
    changes: [
      'Added my Resume to the front page',
      'The "Just for Fun" tab has been renamed to "Extras"',
    ],
  },
  {
    version: "3.0",
    date: "1/12/22",
    changes: ["Re-arranged some stuff, among other things"],
  },
  {
    version: "2.3",
    date: "12/27/21",
    changes: ["Added a new post and updated some other pages"],
  },
  {
    version: "2.2.1",
    date: "11/1/21",
    changes: ["Added some stuff…"],
  },
  {
    version: "2.2",
    date: "9/27/21",
    changes: ["It's time for some updates…"],
  },
  {
    version: "2.1",
    date: "1/19/21",
    changes: ["Adds another blog post :)"],
  },
  {
    version: "2.0.1",
    date: "11/15/20",
    changes: ["Minor changes"],
  },
  {
    version: "2.0",
    date: "9/25/20",
    changes: [
      'Adds new pages under "My Projects"',
      "Remote images in place",
    ],
  },
  {
    version: "1.5",
    date: "6/23/20",
    changes: ["Added June 23rd, 2020 post"],
  },
  {
    version: "1.4.1",
    date: "3/22/20",
    changes: ["Thanks for letting me know of the typo, Elia!"],
  },
  {
    version: "1.4",
    date: "3/1/20",
    changes: ["Added March 2020 post", "Design tweaks"],
  },
  {
    version: "1.3",
    date: "1/1/20",
    changes: ["Added January 2020 post", "Design tweaks"],
  },
  {
    version: "1.2",
    date: "11/1/19",
    changes: ["Added November 2019 post"],
  },
  {
    version: "1.1",
    date: "10/5/19",
    changes: ["Added Changelog"],
  },
  {
    version: "1.0",
    date: "9/22/19",
    changes: ["Initial Website Release"],
  },
];

export default function ChangelogPage() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Changelog</h1>
      </div>

      <div className="flex flex-col gap-6">
        {versions.map((v) => (
          <div key={v.version} className="flex flex-col gap-1.5">
            <h2 className="text-base font-bold">
              Version {v.version}{" "}
              <span className="font-normal text-zinc-500 dark:text-zinc-400">
                - {v.date}
              </span>
            </h2>
            <ul className="flex flex-col gap-0.5 text-sm text-zinc-700 dark:text-zinc-300">
              {v.changes.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-zinc-400 shrink-0">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
