import Nav from "@/components/nav";
import CaseStudySidebar from "@/components/CaseStudySidebar";
import CaseStudyOverview from "@/components/CaseStudyOverview";
import Image from "next/image";

export default function QuestOnboarding() {
  const navItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Problem", sectionId: "problem" },
    { label: "Design Process", sectionId: "design-process" },
    { label: "Initial Setup Steps", sectionId: "initial-setup-steps" },
    { label: "System Tutorial", sectionId: "system-tutorial" },
    { label: "Final Designs", sectionId: "final-designs" },
    { label: "Reflection", sectionId: "reflection" },
  ];

  return (
    <>
      <Nav />
      {/* Hero section */}
      <div className="w-full relative" style={{ height: "600px" }}>
        <Image
          src="/assets/Onboarding-Hero.png"
          alt="Quest Onboarding"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Spacer for 60px gap below hero */}
      <div style={{ height: "60px" }}></div>
      
      {/* Two-column layout: sidebar + content */}
      <div className="flex w-full max-w-[1440px] mx-auto px-8 gap-8">
        {/* Sidebar column - fixed width, sticky */}
        <aside className="flex-shrink-0" style={{ width: "240px" }}>
          <CaseStudySidebar navItems={navItems} />
        </aside>
        
        {/* Main content column - takes remaining space */}
        <main className="flex-1 min-w-0">
          <CaseStudyOverview
            heroImage=""
            companyName="Company Name"
            title="Quest Onboarding"
            description="Description text here..."
            impact="Impact text here..."
            role="Role here"
            collaborators="Collaborators here"
            duration="Duration here"
            skills="Skills here"
            links={[
              { label: "View Live Site", href: "https://example.com" },
              { label: "View Code", href: "https://github.com" },
            ]}
          />
        </main>
      </div>
    </>
  );
}

