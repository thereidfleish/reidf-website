import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-6 py-10">
      {/* Replace src with your image path once added to /public */}
      <Image
        src="/logo.png"
        alt="Profile photo"
        width={400}
        height={400}
        priority
      />
      <NavBar />
    </header>
  );
}
