import AppIcon from "./AppIcon";

const dockApps = [
  { name: "Phone", color: "#22c55e" },
  { name: "Mail", color: "#2563eb" },
  { name: "Music", color: "#ec4899" },
  { name: "Settings", color: "#9ca3af" },
];

export default function Dock() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: 20,
        padding: "8px 10px",
        display: "flex",
        justifyContent: "space-around",
        backdropFilter: "blur(8px)",
      }}
    >
      {dockApps.map((app, i) => (
        <AppIcon key={i} {...app} />
      ))}
    </div>
  );
}
