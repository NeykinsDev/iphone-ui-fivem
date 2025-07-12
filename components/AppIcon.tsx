import { ReactElement } from "react";

type AppIconProps = {
  name: string;
  icon: ReactElement;
};

export default function AppIcon({ name, icon }: AppIconProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: 12 }}>{name}</span>
    </div>
  );
}
