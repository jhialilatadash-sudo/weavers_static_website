import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HeadOfState from "./components/HeadOfState";
import StaticsSection from "./components/StaticsSection";
import SuccessfulSchemes from "./components/SuccessfulSchemes";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HeadOfState />

      {/* Successful Schemes Section */}
      

      <StaticsSection />
      <SuccessfulSchemes />
    </>
  );
}
