import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HeadOfState from "./components/HeadOfState";
import SchemesTabs from "./components/SchemesTabs";
import StaticsSection from "./components/StaticsSection";
import SuccessfulSchemes from "./components/SuccessfulSchemes";
import WeaversEvent from "./components/WeaversEvent";
import NewsEventsSection from "./components/NewsEventsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer"

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <AboutSection />
      <HeadOfState />
      <SchemesTabs />
      <StaticsSection />
      <SuccessfulSchemes />
      <WeaversEvent />
      <NewsEventsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
