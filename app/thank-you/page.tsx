"use client";

import { useState } from "react";

const people: { name: string; description: string }[] = [
  { name: "Carol H.", description: "Thank you, Dr. Hersh, for providing tremendous help and support for my high school science research project, for being a great mentor, and for securing my passion for science research." },
  { name: "Connor E.", description: "Thank you, Connor, for sharing my love of Apple, for making ESAP such an incredible experience, and for always being there for me when I need it most." },
  { name: "Diane H.", description: "Thank you, Mrs. Hodgson, for being one of my favorite teachers ever, for making me enjoy math, and for trusting me to always fix your SMARTBoard!" },
  { name: "Dustin F.", description: "Thank you, Dustin, for always considering my ideas and giving me the chance to help Morrison Dining transition to reusable dishware." },
  { name: "Eden K.", description: "Thank you, Eden, for being my first true love, for creating incredible memories that I will never forget, and for…well…I'll add that here once I know why it all happened." },
  { name: "Erica D.", description: "Thank you, Erica, for welcoming me into COMPASS and the Cornell Engineering Leadership Certification Program, for creating an unforgettable experience, and for shaping me into the leader I am" },
  { name: "Forest", description: "Thank you, Forest, for kickstarting my interest in machine learning and CS." },
  { name: "Gyuseok K.", description: "Thank you, Dr. Kim, for making the ESAP experience transformative for me." },
  { name: "Ido S.", description: "Thank you, Ido, for introducing me to full-stack development and for making my summer experience at BloomX so interesting and rewarding." },
  { name: "Isabella S.A.", description: "Thank you, Isabella, for welcoming me into the incredible SavetheFrontline team, for letting me express my creativity with the website, and for answering all my Cornell questions." },
  { name: "James T.", description: "Thank you, Dr. T, for kickstarting my passion for science research and for being an awesome SFT mentor." },
  { name: "Jared A.", description: "Thank you, Jared, for being my first best friend — doing everything from playing Pirate101 to building J and R Airlines was super fun." },
  { name: "Jennifer H.", description: "Thank you, Mrs. Hastings, for being one of my favorite teachers ever, for sparking my love for journaling, and for being someone I can talk to about life." },
  { name: "Jill M.", description: "Thank you, Jill, for guiding me and providing tremendous help throughout the entire college application process." },
  { name: "John M.", description: "Thank you, Motch, for literally everything — for building an absolutely amazing robotics team, for giving me every opportunity to improve the team, for taking me on incredible trips, and for giving me a lifelong family." },
  { name: "Kat R.", description: "Thank you, Eugene, for making my Spotify internship experience an incredible one." },
  { name: "Matthew C.", description: "Thank you, Corrigan, for sparking my interest in engineering and for working with me throughout the four years of robotics." },
  { name: "Matthew S.", description: "Thank you, Mr. Sckalor, for teaching such fun classes, for allowing me to express my creativity, and for teaching me to be less hyper-focused on grades and more focused on learning." },
  { name: "Nate C.", description: "Thank you, Nate, for being the best friend anyone could ever have, for always encouraging me to step out of my comfort zone, for taking me on amazing hikes and bike rides, for teaching me to \"enjoy the ride,\" and for always, always, always being there for me." },
  { name: "Paul D.", description: "Thank you, Mango, for helping me out with everything related to the TV Studio, for being a great mentor, and for giving me the opportunity to work on new and exciting projects." },
  { name: "Rob P.", description: "Thank you, Rob, for welcoming me into COMPASS and the Cornell Engineering Leadership Certification Program and for coaching me and my teams to success" },
  { name: "Robert Z.", description: "Thank you, Mr. Zahn, for inspiring my passion for filmmaking through HTV, Advanced Filmmaking, and Independent Study; for helping me build my confidence; and for trusting me with, essentially, the entire TV Studio." },
  { name: "Sabra S.", description: "Thank you, Mrs. Satten, for being an amazing Kindergarten teacher and for sparking my love for school and learning." },
  { name: "Sarah B.", description: "Thank you, Sarah, for being an amazing mentee in robotics and for always being there for me when I need it most." },
  { name: "Steve Jobs", description: "Thank you, Steve Jobs, for inspiring my love for Apple and, frankly, all-things tech." },
  { name: "Will C.", description: "Thank you, Will, for teaching me some hard lessons that have truly served me well to this day." },
  { name: "Yosh", description: "Thank you, Yosh, for encouraging me to go on Birthright and Onward and for creating an unforgettable experience." },
  { name: "And everyone in my family.", description: "<3" },
];

function AccordionItem({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setOpen((p) => !p)}
        className="font-semibold text-base hover:underline cursor-pointer transition-colors py-1"
      >
        {name}
      </button>
      {open && (
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mt-1 max-w-sm text-center">
          {description || (
            <span className="italic text-zinc-400 dark:text-zinc-500">
              Coming soon...
            </span>
          )}
        </p>
      )}
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Thank You</h1>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl">
          Thank You to everyone listed below. If your name is on this list, that
          means you have had a very meaningful impact on my life — in a good
          way. Some of you have guided me to where I am today, some of you have
          been very close friends of mine, and some of you have taught me
          valuable lessons. Whatever it was, I sincerely and wholeheartedly
          appreciate you. So again, Thank You.
        </p>
      </div>

      <div className="flex flex-col items-center gap-1">
        {people.map((p) => (
          <AccordionItem key={p.name} name={p.name} description={p.description} />
        ))}
      </div>
    </div>
  );
}
