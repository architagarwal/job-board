import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Board",
  description: "Created by Archit Agarwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-dvh">
        <Header/>
        <ToastContainer position="bottom-right" autoClose={5000} />
        {children}
        </div>
      </body>
    </html>
  );
}
