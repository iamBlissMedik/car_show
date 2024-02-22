import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
export const metadata: Metadata = {
  title: "Car Display",
  description: "To showcase your cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
