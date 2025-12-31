import CaseStudyOverview from "./CaseStudyOverview";

interface LinkItem {
  label: string;
  href: string;
}

interface CaseStudyInformationProps {
  heroImage: string;
  companyName: string;
  title: string;
  description: string;
  impact: string;
  role: string;
  collaborators: string;
  duration: string;
  skills: string;
  links: LinkItem[];
}

export default function CaseStudyInformation({
  heroImage,
  companyName,
  title,
  description,
  impact,
  role,
  collaborators,
  duration,
  skills,
  links,
}: CaseStudyInformationProps) {
  return (
    <div style={{ width: "896px" }}>
      <CaseStudyOverview
        heroImage={heroImage}
        companyName={companyName}
        title={title}
        description={description}
        impact={impact}
        role={role}
        collaborators={collaborators}
        duration={duration}
        skills={skills}
        links={links}
      />
    </div>
  );
}

