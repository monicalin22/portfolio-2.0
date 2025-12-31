interface LinkButtonProps {
  label: string;
  href: string;
  fullWidth?: boolean;
}

export default function LinkButton({ label, href, fullWidth = false }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={fullWidth ? "block" : "inline-block"}
      style={{
        position: "relative",
        borderRadius: "8px",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 2px 6px 2px rgba(0, 0, 0, 0.15)",
        width: fullWidth ? "100%" : undefined,
      }}
    >
      {/* Gradient border layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "8px",
          background: "var(--link-button-outline)",
          zIndex: 0,
        }}
      />
      {/* Inner content with solid background to show border */}
      <div
        className="flex items-center w-full relative"
        style={{
          height: "48px",
          backgroundColor: "var(--background)",
          borderRadius: "6px",
          margin: "2px",
          paddingLeft: "16px",
          paddingRight: "12px",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        {/* Semi-transparent overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--link-button-background)",
            borderRadius: "6px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <span
          className="mono flex-1 relative z-10"
          style={{
            color: "var(--link-button-text)",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width="16"
          height="16"
          className="flex-shrink-0 relative z-10"
          style={{
            color: "var(--link-button-icon)",
          }}
        >
          <rect width="256" height="256" fill="none"/>
          <line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          <polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        </svg>
      </div>
    </a>
  );
}

