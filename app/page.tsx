import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HeadOfState from "./components/HeadOfState";
import StaticsSection from "./components/StaticsSection";
import SuccessfulSchemes from "./components/SuccessfulSchemes";
import SchemesTabs from "./components/SchemesTabs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HeadOfState />
      <StaticsSection />
      <SuccessfulSchemes />
      <SchemesTabs />
    </>
  );
}
