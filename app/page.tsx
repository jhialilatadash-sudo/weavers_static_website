import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HeadOfState from "./components/HeadOfState";
import SchemesTabs from "./components/SchemesTabs";
import StaticsSection from "./components/StaticsSection";
import SuccessfulSchemes from "./components/SuccessfulSchemes";
import WeaversEvent from "./components/WeaversEvent";
import NewsEventsSection from "./components/NewsEventsSection";
import ContactSection from "./components/ContactSection";
import InitiativesSlider from "./components/InitiativesSlider";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-32">
        <AboutSection />
      </section>

      {/* HEAD OF STATE */}
      <section id="head">
        <HeadOfState />
      </section>

      {/* SCHEMES */}
      <section id="schemes" className="scroll-mt-32">
        <SchemesTabs />
      </section>

      {/* STATISTICS */}
      <section id="statistics">
        <StaticsSection />
      </section>

      {/* SUCCESSFUL SCHEMES */}
      <section id="success">
        <SuccessfulSchemes />
      </section>

      {/* EVENTS */}
      <section id="events" className="scroll-mt-32">
        <WeaversEvent />
      </section>

      {/* NEWS */}
      <section id="news">
        <NewsEventsSection />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-32">
        <ContactSection />
      </section>

      {/* INITIATIVES */}
      <section id="initiatives">
        <InitiativesSlider />
      </section>

      <Footer />
    </main>
  );
}
