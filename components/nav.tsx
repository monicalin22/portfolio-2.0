import Link from "next/link";

export default function Nav() {
  return (
    <nav className="py-6 relative z-50 w-full">
      <div className="max-w-[1440px] mx-auto px-8 flex justify-end">
        <div className="flex gap-12">
          <Link href="/work" className="mono uppercase text-white">
            WORK
          </Link>
          <Link href="/projects" className="mono uppercase text-white">
            PROJECTS
          </Link>
          <Link href="/about" className="mono uppercase text-white">
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
}

