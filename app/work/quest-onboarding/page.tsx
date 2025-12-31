import Nav from "@/components/nav";
import CaseStudySidebar from "@/components/CaseStudySidebar";

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
      <CaseStudySidebar navItems={navItems} />
    </>
  );
}

