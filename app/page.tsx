import Image from "next/image";
import Button from "./components/Button";
import { FileUser } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Hi, I'm Reid 👋</h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mt-4 md:mt-8">
        {/* Left column - photo */}
        <div className="flex-shrink-0 self-center md:self-auto">
          <Image
            src="/home/reid.jpg"
            alt="Photo of Reid"
            width={400}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Right column - bio text + buttons */}
        <div className="flex flex-col gap-4">
          <p className="text-lg leading-relaxed text-zinc-700">
            I'm passionate about creatively applying my skills in iOS and full-stack web development, IT, and more to delight users, improve processes, and empower a team.  I'm both a leader and independent contributor who is observant, dedicated, and not afraid to take risks to make our world a better place.
          </p>
          <p className="text-lg leading-relaxed text-zinc-700">
            I've had numerous experiences and worked on many projects, and I invite you to explore them throughout my website!
          </p>
          <p className="text-lg leading-relaxed text-zinc-700">
            I graduated from Cornell University in 2025 with a BS in Information Science and am currently an iOS Engineer at <a href="https://www.compass.com/">Compass</a>.
          </p>
          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            <Button
                href="/home/resumes/Reid_Fleishman_Resume_SP26.pdf"
                external
                colorset="secondary"
                size="lg"
                leftIcon={<FileUser size={20} />}>
              Resume
            </Button>
            <Button
              href="https://www.linkedin.com/in/thereidfleish"
              external
              colorset="primary"
              size="lg"
              leftIcon={<Image src="/logos/linkedin.svg" alt="LinkedIn Logo" width={20} height={20} />}
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


