import About from "@/component/home/About";
import Features from "@/component/home/Features";
import Hero from "@/component/home/Hero";
import TrustedBy from "@/component/home/TrustedBy";

export default function Home() {
  return (
    <section>
      <Hero/>
      <TrustedBy/>
      <About/>
      <Features/>
    </section>
  );
}
