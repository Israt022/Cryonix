import About from "@/component/home/About";
import Features from "@/component/home/Features";
import Hero from "@/component/home/Hero";
import Infrastructure from "@/component/home/Infrastructure";
import MarketAccess from "@/component/home/MarketAccess";
import Platform from "@/component/home/Platform";
import TrustedBy from "@/component/home/TrustedBy";

export default function Home() {
  return (
    <section>
      <Hero/>
      <TrustedBy/>
      <About/>
      <Features/>
      <MarketAccess/>
      <Platform/>
      <Infrastructure/>
    </section>
  );
}
