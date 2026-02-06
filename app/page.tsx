import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />

      <section id="achievements" className="h-screen">Achievements</section>
      <section id="workhistory" className="h-screen">Work</section>
      <section id="research" className="h-screen">Research</section>
      <section id="quranicteachings" className="h-screen">Quranic</section>
      <section id="media" className="h-screen">Gallery</section>
      <section id="contact" className="h-screen">Contact</section>
    </main>
  );
}
