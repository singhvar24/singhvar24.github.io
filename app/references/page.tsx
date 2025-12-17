import References from "@/components/References";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "References — Varnika Singh",
  description: "Professional references and recommendations",
};

export default function ReferencesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-16">
        <References />
      </div>
    </>
  );
}
