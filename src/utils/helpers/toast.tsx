import { toast as hotToast } from "react-hot-toast";

export function toast(
  message: string,
  variant: "success" | "error" = "success",
  duration: number = 3000,
) {
  // Define bar and close colors based on variant
  const barColor =
    variant === "success" ? "var(--color-primary)" : "var(--color-destructive)";
  const closeColor = barColor;

  return hotToast.custom(
    (t) => (
      <div
        style={{
          background: "var(--color-background)",
          color: "var(--color-foreground)",
          padding: "12px 16px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          minWidth: "240px",
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          fontSize: "14px",
        }}
      >
        {/* Colored left bar */}
        <div
          style={{
            height: "100%",
            width: "5px",
            backgroundColor: barColor,
            borderRadius: "4px",
            marginRight: "12px",
          }}
        />

        {/* Message content */}
        <div style={{ flex: 1 }}>{message}</div>

        {/* Close button */}
        <button
          onClick={() => hotToast.dismiss(t.id)}
          style={{
            position: "absolute",
            top: 6,
            right: 8,
            background: "transparent",
            border: "none",
            color: closeColor,
            fontSize: "16px",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    ),
    { duration, position: "top-center" },
  );
}
