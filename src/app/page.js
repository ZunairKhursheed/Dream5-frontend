"use client";
import { Header } from "@/client/components/layout/header";
import { Topbanner } from "@/client/components/topbanner";
import { Teamcarousel } from "@/client/components/layout/carousel";
import { Upcoming } from "@/client/components/layout/upcoming";
import { Vscard } from "@/client/components/cards/vsCards";
import { VscardNoAdd } from "@/client/components/cards/vsCardNoAdd";
// import "@/styles/global.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <div class="app-content">
        <Topbanner />
        <Teamcarousel />
        <Upcoming />
        <Vscard />
        <VscardNoAdd />
        <Vscard />
      </div>
    </main>
  );
}
