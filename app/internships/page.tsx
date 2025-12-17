import Internships from "@/components/Internships";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Internships — Varnika Singh",
  description: "Internship experience in cloud and AI technologies",
};

export default function InternshipsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-16">
        <Internships />
      </div>
    </>
  );
}
