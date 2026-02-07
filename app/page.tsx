import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkHistory from "@/components/WorkHistory";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <section id="achievements" className="h-screen">Achievements</section>
      <WorkHistory />
      <section id="research" className="h-screen">Research</section>
      <section id="quranicteachings" className="h-screen">Quranic</section>
      <section id="media" className="h-screen">Gallery</section>
      <section id="contact" className="h-screen">Contact</section>
    </main>
  );
}
