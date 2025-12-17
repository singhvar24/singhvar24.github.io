import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
}
