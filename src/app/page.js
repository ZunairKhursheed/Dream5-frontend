import { Header } from "@/client/components/layout/header";
import { Topbanner } from "@/client/components/topbanner";
import { Carousel } from "@/client/components/layout/header";
import { Teamcarousel } from "@/client/components/layout/carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Topbanner />
      <Teamcarousel />
    </main>
  );
}
