import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-16">
        <Hero />
        <Projects />
      </div>
    </>
  );
}
