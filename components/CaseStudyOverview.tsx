import Image from "next/image";
import LinkButton from "./LinkButton";

interface LinkItem {
  label: string;
  href: string;
}

interface CaseStudyOverviewProps {
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

export default function CaseStudyOverview({
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
}: CaseStudyOverviewProps) {
  return (
    <div className="w-full">
      {/* Hero Image - Full width, responsive (only if provided) */}
      {heroImage && (
        <div className="w-full relative" style={{ height: "600px" }}>
          <Image
            src={heroImage}
            alt={companyName}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Content Container - starts at 4th column */}
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="grid-12" style={{ paddingTop: heroImage ? "60px" : "0" }}>
          {/* Company Name and Title - starts at column 4, spans 8 columns */}
          <div style={{ gridColumn: "4 / 12", marginBottom: "60px" }}>
            <p className="mono text-secondary mb-2 uppercase">{companyName}</p>
            <h1 className="text-primary">{title}</h1>
          </div>

          {/* Description and Impact Section - 60px below title */}
          <div style={{ gridColumn: "4 / 12", marginBottom: "60px" }}>
            <div className="grid-12" style={{ columnGap: "32px" }}>
              {/* Description Block - 4 columns */}
              <div className="col-span-4">
                <p className="mono text-secondary mb-2">DESCRIPTION</p>
                <p className="b1 text-primary">{description}</p>
              </div>

              {/* Impact Block - 4 columns starting at column 8 of parent grid */}
              <div className="col-span-4" style={{ gridColumnStart: "8" }}>
                <p className="mono text-secondary mb-2">IMPACT</p>
                <p className="b1 text-primary">{impact}</p>
              </div>
            </div>
          </div>

          {/* Metadata Section - 60px below description/impact */}
          <div style={{ gridColumn: "4 / 12", marginBottom: "60px" }}>
            <div className="grid-12" style={{ columnGap: "32px" }}>
              <div className="col-span-2">
                <p className="mono text-secondary mb-2">ROLE</p>
                <p className="b1 text-primary">{role}</p>
              </div>
              <div className="col-span-2">
                <p className="mono text-secondary mb-2">COLLABORATORS</p>
                <p className="b1 text-primary">{collaborators}</p>
              </div>
              <div className="col-span-2">
                <p className="mono text-secondary mb-2">DURATION</p>
                <p className="b1 text-primary">{duration}</p>
              </div>
              <div className="col-span-2">
                <p className="mono text-secondary mb-2">SKILLS</p>
                <p className="b1 text-primary">{skills}</p>
              </div>
            </div>
          </div>

          {/* Link Buttons - 60px below metadata */}
          <div style={{ gridColumn: "4 / 12", marginBottom: "60px" }}>
            <div className="grid-12" style={{ columnGap: "32px" }}>
              {links.slice(0, 2).map((link, index) => (
                <div key={index} className="col-span-4">
                  <LinkButton label={link.label} href={link.href} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

