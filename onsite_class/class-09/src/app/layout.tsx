import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Footer from "./Components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "appwrite-crud",
  description: " Book Create , Edited , Updated ,Delete",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-3xl mx-auto text-slate-300">
          <header  className="p-6 border-b flex items-center justify-between bg-blue-500 rounded-bl-lg rounded-br-lg">
            <Link className="text-2xl font-bold text-white"  href="/">Literary Haven</Link >
            <Link className="bg-slate-100 grid place-items-center py-2 px-4 rounded-full font-bold shadow-md text-black" href="/create">Add New</Link >
          </header>
          <main className="p-4 text-lg">
            {children}
          </main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
