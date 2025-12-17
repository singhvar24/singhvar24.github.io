import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varnika Singh — AI & Cloud Engineer",
  description: "Portfolio of Varnika Singh - AI & Cloud Engineer specializing in intelligent systems and scalable cloud solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-gray-900">
        {children}
      </body>
    </html>
  );
}
