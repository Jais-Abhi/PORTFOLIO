// import { Geist, Geist_Mono } from "next/font/google";
import DisableInspect from "@/Components/DisableInspect";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Abhi Portfolio",
  description: "Generate Responsive web apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="bg-gray-900 text-white"
      >
        {/* <DisableInspect/> */}
        {children}
        
      </body>
      
    </html>
  );
}
