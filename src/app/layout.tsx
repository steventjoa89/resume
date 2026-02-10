import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Divider from "./components/Divider";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steven Tjoa Tanudjaja | Software Engineer & Web Developer Resume",
  description:
    "Resume and portfolio of Steven Tjoa Tanudjaja, a Software Engineer and Web Developer showcasing skills, experience, and real-world projects in modern web technologies.",
  authors: [{ name: "Steven Tjoa Tanudjaja" }],
  creator: "Steven Tjoa Tanudjaja",
  openGraph: {
    title: "Steven Tjoa Tanudjaja – Software Engineer & Web Developer",
    description:
      "Explore the resume and portfolio of Steven Tjoa Tanudjaja, featuring experience, skills, and projects in software engineering and web development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Tjoa Tanudjaja – Software Engineer & Web Developer",
    description:
      "Portfolio and resume of Steven Tjoa Tanudjaja showcasing software engineering and web development projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <AOSProvider />
        <Navbar />
        {children}

        <Divider />
        <Footer />

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
