import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SlideShowcase from "@/components/SlideShowcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SlideShowcase />
        <Contact />
      </main>
    </>
  );
}
