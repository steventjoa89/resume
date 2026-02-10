import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import LenisScroll from "./components/LenisScroll";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Divider from "./components/Divider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   variable: "--font-sans",
//   subsets: ["latin"],
// });

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
        {/* <LenisScroll /> */}
        <Navbar />
        {children}

        <Divider />
        <Footer />
      </body>
    </html>
  );
}
