import Link from "next/link";
import Script from "next/script";
import { versions } from "../data/changelog";

const LINK_CLASS = "text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline-offset-2 hover:underline";

export default function Footer() {
  const year = new Date().getFullYear();
  const latest = versions[0];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-4">
      {/* Default Statcounter code for Reidf.net https://reidf.net */}
      <Script
        id="statcounter-vars"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
var sc_project=12106690;
var sc_invisible=0;
var sc_security="458e529a";
var sc_text=2;
          `,
        }}
      />
      <Script
        src="https://statcounter.com/counter/counter.js"
        strategy="afterInteractive"
      />
      {/* End of Statcounter Code */}
      <div className="page-container py-8 flex flex-col items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400 text-center">
        <p className="leading-6">
          © {year} Reid Fleishman<br />
          <a href="mailto:reidfleishman5@gmail.com" className={LINK_CLASS}>reidfleishman5@gmail.com</a><br />
          Website last updated: {latest.date}<br />
          Version {latest.version} —{" "}
          <Link href="/changelog" className={LINK_CLASS}>view changelog</Link>
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://www.linkedin.com/in/thereidfleish" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>LinkedIn</a>
          <a href="https://www.facebook.com/reid.fleishman.9" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Facebook</a>
          <a href="https://www.youtube.com/channel/UCy1RJHj-SuhGqc-9E_VdXcw/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>YouTube</a>
          <a href="https://www.instagram.com/thereidfleish/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Instagram</a>
        </div>

        {/* Meta links */}
        <p className="flex flex-wrap justify-center gap-x-2">
          <Link href="/about-this-website" className={LINK_CLASS}>About this Website</Link>
          <span>|</span>
          <a href="https://server.reidf.net/system-status/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>System Status</a>
          <span>|</span>
          <Link href="/thank-you" className={LINK_CLASS}>Thank You</Link>
        </p>
      </div>
    </footer>
  );
}
