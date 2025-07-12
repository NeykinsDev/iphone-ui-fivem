import AppIcon from "./AppIcon";
import { FaSafari, FaCommentAlt, FaCamera } from "react-icons/fa";
import { MdPhoto, MdCalendarToday, MdNote } from "react-icons/md";

type App = {
  name: string;
  icon: JSX.Element;
};

type AppGridProps = {
  apps: App[];
};

export default function AppGrid({ apps }: AppGridProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      justifyItems: "center",
    }}>
      {apps.map((app, i) => (
        <AppIcon key={i} {...app} />
      ))}
    </div>
  );
}

