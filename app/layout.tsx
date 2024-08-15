import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css"; // Import global styles

export const metadata = {
  title: "Epic Crypto Games",
  description: "Play epic crypto-based games",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
