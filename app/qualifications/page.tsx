import Qualifications from "@/components/Qualifications";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Qualifications — Varnika Singh",
  description: "Educational qualifications and academic achievements",
};

export default function QualificationsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-16">
        <Qualifications />
      </div>
    </>
  );
}
