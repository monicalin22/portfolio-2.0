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
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="relative" style={{ display: "grid", gridTemplateColumns: "240px 112px 896px", gap: "0" }}>
          {/* Sidebar column - fixed width, sticky */}
          <aside className="flex-shrink-0" style={{ width: "240px" }}>
            <CaseStudySidebar navItems={navItems} />
          </aside>
          
          {/* Gap column (1 column) */}
          <div></div>
          
          {/* Main content column - starts at column 3, width 896px (8 columns) */}
          <main>
            <CaseStudyOverview
              heroImage=""
              companyName="META"
              title="VR First-Time User Experience"
              description="I lead strategy and design for Quest's system tutorial, balancing art direction, platform constraints, and user education needs to prepare millions for VR.  I also support design for device setup, ensuring a seamless first impression."
              impact="Cut setup time by 57% (35 to 15 minutes). 
Increased tutorial entry rate to 80% from 30%. 
Boosted engagement with core OS features by 27%. Raised user preparedness sentiment to 95% from 60%."
              role="Senior Product 
Designer"
              collaborators="Engineering, Art,
5 Feature Teams"
              duration="August 2024 to Present"
              skills="UI Design,
2D & 3D Prototyping,
Unity & React Dev."
              links={[
                { label: "Meta Quest 3S", href: "https://www.meta.com/quest/quest-3s/" },
                { label: "Meta Quest 3", href: "https://www.meta.com/quest/quest-3/" },
              ]}
            />
          </main>
        </div>
      </div>
    </>
  );
}

