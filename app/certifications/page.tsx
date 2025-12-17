import Certifications from "@/components/Certifications";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Certifications — Varnika Singh",
  description: "Professional certifications in cloud and AI technologies",
};

export default function CertificationsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-16">
        <Certifications />
      </div>
    </>
  );
}
