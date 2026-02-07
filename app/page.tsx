import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkHistory from "@/components/WorkHistory";
import Research from "@/components/Research";
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import QuranSection from "@/components/QuranSection";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WorkHistory />
      {/* <section id="achievements" className="h-screen">Achievements</section> */}
      <section id="research"><Research/></section>
      <section id="quranicteachings" className="mt-32"><QuranSection/></section>
      <section id="media" className="h-screen"><Gallery/></section>
      <section id="contact" className="h-screen"><Contact/></section>
      
    </main>
  );
}
