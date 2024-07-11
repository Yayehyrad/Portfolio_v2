import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yayehyrad | Personal Portfolio",
  description:
    "Yayehyrad is a full-stack developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-bodyColor text-lightText relative">
        <div className=" absolute bg-gradient-to-b bg-backgroundImage from-[#212428] to-bodyColor w-[100vw] h-[100vh] top-0   -z-40"></div>
        {/* <ThemeContextProvider> */}
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
        </ActiveSectionContextProvider>
        {/* </ThemeContextProvider> */}
        <Toaster position="top-right" />
        {/* <ThemeSwitch /> */}
      </body>
    </html>
  );
}
