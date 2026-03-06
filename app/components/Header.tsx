import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="page-container flex flex-col items-center gap-6 py-10">
      <Link href="/">
        <Image
          src="/banner/logov2.png"
          alt="Banner Image"
          width={400}
          height={400}
          priority
        />
      </Link>
      <NavBar />
    </header>
  );
}
