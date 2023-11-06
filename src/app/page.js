"use client";
import { Teamcarousel } from "@/client/components/layout/carousel";
import { Header } from "@/client/components/layout/header";
import { Topbanner } from "@/client/components/topbanner";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("cricket");

  function handleTabs() {
    switch (activeTab) {
      case "cricket":
        return <Teamcarousel />;

      case "football":
        return <Teamcarousel />;

      case "kabaddi":
        return <Teamcarousel />;
      default:
        break;
    }
  }
  return (
    <main>
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="app-content">
        {/* <Topbanner /> */}
        {handleTabs()}
      </div>
    </main>
  );
}
