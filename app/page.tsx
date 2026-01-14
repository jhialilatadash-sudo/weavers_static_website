import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HeadOfState from "./components/HeadOfState";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HeadOfState /> {/* 👈 HERE */}
    </>
  );
}
