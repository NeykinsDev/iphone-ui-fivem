"use client";

import { useState } from "react";
import AppGrid from "./AppGrid";
import Dock from "./Dock";
import { FaSafari, FaCommentAlt, FaCamera } from "react-icons/fa";
import { MdPhoto, MdCalendarToday, MdNote } from "react-icons/md";

export default function IphoneFrame() {
  const appPages = [
    [
      { name: "Safari", icon: <FaSafari size={24} color="#3b82f6" /> },
      { name: "Messages", icon: <FaCommentAlt size={24} color="#10b981" /> },
      { name: "Photos", icon: <MdPhoto size={24} color="#fbbf24" /> },
      { name: "Calendar", icon: <MdCalendarToday size={24} color="#ef4444" /> },
      { name: "Camera", icon: <FaCamera size={24} color="#6b7280" /> },
      { name: "Notes", icon: <MdNote size={24} color="#facc15" /> },
    ],
    [
      { name: "App 7", icon: <FaSafari size={24} color="#6366f1" /> },
      { name: "App 8", icon: <FaCamera size={24} color="#ec4899" /> },
      { name: "App 9", icon: <MdNote size={24} color="#10b981" /> },
    ],
  ];

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div
      style={{
        width: 260,
        height: 500,
        borderRadius: 24,
        overflow: "hidden",
        backgroundImage: 'url("/images/wallpaper.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <AppGrid apps={appPages[currentPage]} />

      {/* Dots pour changer de page */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 10 }}>
        {appPages.map((_, i) => (
          <button
            onClick={() => setCurrentPage(i)}
            style={{
              all: "unset", // enlever les styles natifs
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: currentPage === i ? "#000" : "#ccc",
              cursor: "pointer",
            }}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      <Dock />
    </div>
  );
}
