export const metadata = { title: "Mamma Mia" };

const songs = [
  { label: "0. All Songs Put Together (large file! 100 MB!)", file: "all" },
  { label: "1. Honey, Honey", file: "honey" },
  { label: "2. Money Money Money", file: "money" },
  { label: "3. Thank You For for the Music", file: "music" },
  { label: "4. Mamma Mia", file: "mamma" },
  { label: "5. Chiquitita", file: "chiquitita" },
  { label: "6. Dancing Queen", file: "dq" },
  { label: "7. Lay All Your Love on Me", file: "love" },
  { label: "8. Super Trouper", file: "super" },
  { label: "9. Gimme! Gimme! Gimme!", file: "gimme" },
  { label: "10. The Name of the Game", file: "game" },
  { label: "11. Voulez-Vous", file: "voulez" },
  { label: "12. Under Attack", file: "attack" },
  { label: "13. S.O.S", file: "sos" },
  { label: "14. Does Your Mother Know", file: "mother" },
  { label: "15. Knowing Me, Knowing You", file: "knowingme" },
  { label: "16. Our Last Summer", file: "summer" },
  { label: "17. Slipping Through My Fingers", file: "slipping" },
  { label: "18. The Winner Takes It All", file: "winner" },
  { label: "19. Take a Chance on Me", file: "chance" },
  { label: "20. I Do I Do I Do I Do I Do", file: "ido" },
  { label: "21. I Have a Dream", file: "dream" },
  { label: "22. Bows and Finale", file: "finale" },
];

export default function MammaMiaPage() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Mamma Mia</h1>
        <p className="text-zinc-500 italic">
          I enjoyed the musical so much that I figured I&apos;d make a webpage
          dedicated to it...
        </p>
      </div>

      <p className="text-zinc-700 leading-relaxed">
        <em>
          The following are video/audio footage of the SHS Mamma Mia musical in
          November 2019. All of this was recorded by GNPS/TV and all credit goes
          to them. Please do not share this website with people outside of SHS
          since this musical is probably copyrighted.
        </em>
      </p>

      <section className="flex flex-col gap-2">
        <p className="font-semibold underline">Entire Musical:</p>
        <a
          href="https://youtu.be/WUVx4cMFT80"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://youtu.be/WUVx4cMFT80
        </a>
      </section>

      <section className="flex flex-col gap-2">
        <p className="font-semibold underline">Playlist of Each Song (videos):</p>
        <a
          href="https://www.youtube.com/playlist?list=PLFi1wuKpn-C68irnmUI0oi48uVSqXD74d"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.youtube.com/playlist?list=PLFi1wuKpn-C68irnmUI0oi48uVSqXD74d
        </a>
      </section>

      <section className="flex flex-col gap-2">
        <p className="font-semibold underline">
          MP3&apos;s of Each Song (same as the playlist above but in MP3
          format):
        </p>
        <ul className="flex flex-col gap-1">
          {songs.map((song) => (
            <li key={song.file}>
              <a
                href={`https://server.reidf.net/reidf_files/mm/${song.file}.mp3`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {song.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

