import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Epic Crypto Games",
  description: "Play epic crypto-based games",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-white font-press-start">
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
