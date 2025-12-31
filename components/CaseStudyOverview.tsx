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
    <div style={{ width: "896px" }}>
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

      {/* Content Container - uses 8-column grid */}
      <div className="w-full" style={{ paddingTop: heroImage ? "60px" : "0" }}>
        <div 
          style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            columnGap: "32px",
            width: "100%"
          }}
        >
          {/* Company Name and Title - spans full width (columns 1-8) */}
          <div style={{ gridColumn: "1 / 9", marginBottom: "60px" }}>
            <p className="mono text-secondary mb-2 uppercase">{companyName}</p>
            <h1 className="text-primary">{title}</h1>
          </div>

          {/* Description - spans columns 1-4 */}
          <div style={{ gridColumn: "1 / 5", marginBottom: "60px" }}>
            <p className="mono text-secondary mb-2">DESCRIPTION</p>
            <p className="b1 text-primary">{description}</p>
          </div>

          {/* Impact - spans columns 5-8 (4 columns) */}
          <div style={{ gridColumn: "5 / 9", marginBottom: "60px" }}>
            <p className="mono text-secondary mb-2">IMPACT</p>
            <div className="b1 text-primary">
              {impact.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} style={{ marginBottom: lineIndex < impact.split('\n').length - 1 ? '0.5em' : 0 }}>
                  {line.split(/(57%|80%|27%|95%)/).map((part, index) => 
                    ['57%', '80%', '27%', '95%'].includes(part) ? (
                      <strong key={index}>{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Metadata Section - 60px below description/impact */}
          {/* Role - spans columns 1-2 */}
          <div style={{ gridColumn: "1 / 3", marginBottom: "60px" }}>
            <p className="mono text-secondary mb-2">ROLE</p>
            <div className="b1 text-primary">
              {role.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} style={{ marginBottom: lineIndex < role.split('\n').length - 1 ? '0.5em' : 0 }}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Collaborators - spans columns 3-4 */}
          <div style={{ gridColumn: "3 / 5", marginBottom: "60px" }}>
            <p className="mono text-secondary mb-2">COLLABORATORS</p>
            <div className="b1 text-primary">
              {collaborators.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} style={{ marginBottom: lineIndex < collaborators.split('\n').length - 1 ? '0.5em' : 0 }}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Duration - spans columns 5-6 (2 columns) */}
          <div style={{ gridColumn: "5 / 7", marginBottom: "60px" }}>
            <p className="mono text-secondary mb-2">DURATION</p>
            <p className="b1 text-primary">{duration}</p>
          </div>

          {/* Skills - spans columns 7-8 (2 columns) */}
          <div style={{ gridColumn: "7 / 9", marginBottom: "60px" }}>
            <p className="mono text-secondary mb-2">SKILLS</p>
            <div className="b1 text-primary">
              {skills.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} style={{ marginBottom: lineIndex < skills.split('\n').length - 1 ? '0.5em' : 0 }}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Link Buttons - 60px below metadata */}
          {links.slice(0, 2).map((link, index) => (
            <div 
              key={index} 
              style={{ 
                gridColumn: index === 0 ? "1 / 5" : "5 / 9",
                marginBottom: "60px"
              }}
            >
              <LinkButton label={link.label} href={link.href} fullWidth={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

