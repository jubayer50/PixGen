import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const outfit = Outfit({
  variable: "outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "PixGen",
  description: "AI Image Generation Gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body>
        <Navbar></Navbar>

        <main className="max-w-285 mx-auto">{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
