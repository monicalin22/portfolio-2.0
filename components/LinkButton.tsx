interface LinkButtonProps {
  label: string;
  href: string;
}

export default function LinkButton({ label, href }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-lg"
      style={{
        background: "var(--link-button-outline)",
        padding: "1px",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 2px 6px 2px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div
        className="inline-flex items-center h-12 rounded-lg"
        style={{
          backgroundColor: "var(--link-button-background)",
          paddingLeft: "16px",
          paddingRight: "12px",
        }}
      >
        <span
          className="mono flex-1"
          style={{
            color: "var(--link-button-text)",
          }}
        >
          {label}
        </span>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width="16"
          height="16"
          className="flex-shrink-0"
          style={{
            color: "var(--link-button-icon)",
          }}
        >
          <line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          <polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        </svg>
      </div>
    </a>
  );
}

