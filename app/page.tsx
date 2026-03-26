import { Navbar } from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import AboutScroll from '@/src/components/AboutScroll';
import HowWeWork from '@/src/components/HowWeWork';
import FooterSection from '@/src/components/footer';
import ContactSection from '@/src/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Secciones con sus IDs correspondientes */}
      <section id="inicio">
        <Hero />
      </section>

      <section id="metodologia" className="scroll-mt-20">
        <HowWeWork />
      </section>

      <section id="nosotros" className="scroll-mt-20">
        <AboutScroll />
      </section>

      <section id="contacto" className="scroll-mt-20">
        <ContactSection />
      </section>

      <FooterSection />
    </main>
  );
}