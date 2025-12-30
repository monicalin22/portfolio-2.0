import Nav from "@/components/nav";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <Nav />
      <main>
        <Link href="/work/quest-onboarding">
          <h1>Quest Onboarding</h1>
        </Link>
      </main>
    </>
  );
}

