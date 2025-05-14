import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Admin - facebook - Connect",
  description: "Admin page: Facebook is a social utility",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin Navbar</span>
       
        {children}
    </>
  )
}
