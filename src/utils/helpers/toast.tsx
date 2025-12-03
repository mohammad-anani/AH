import { toast as hotToast } from "react-hot-toast";

export function toast(
  message: string,
  variant: "success" | "error" = "success",
  duration: number = 3000,
) {
  const barColor =
    variant === "success" ? "var(--color-primary)" : "var(--color-destructive)";
  const closeColor = barColor;

  return hotToast.custom(
    (t) => (
      <div
        style={{
          background: "var(--color-background)",
          color: "var(--color-foreground)",
          padding: "16px 20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          minWidth: "320px",
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "5px",
            backgroundColor: barColor,
            borderRadius: "4px",
            marginRight: "12px",
          }}
        />

        <div style={{ flex: 1, paddingRight: "16px" }}>{message}</div>

        <button
          onClick={() => hotToast.dismiss(t.id)}
          style={{
            position: "absolute",
            top: 8,
            right: 10,
            background: "transparent",
            border: "none",
            color: closeColor,
            fontSize: "18px",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    ),
    { duration, position: "bottom-left" },
  );
}
