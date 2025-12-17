import Experience from "@/components/Experience";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Experience — Varnika Singh",
  description: "Professional experience in AI and cloud engineering",
};

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-16">
        <Experience />
      </div>
    </>
  );
}
