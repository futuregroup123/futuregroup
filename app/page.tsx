import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreValues from '@/components/CoreValues';
import Services from '@/components/Services';
import Markets from '@/components/Markets';
import Certifications from '@/components/Certifications';
import News from '@/components/News';
import Locations from '@/components/Locations';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <CoreValues />
      <Services />
      <Markets />
      <Contact />
      <Certifications />
      <News />
      <Locations />
    </main>
  );
}
