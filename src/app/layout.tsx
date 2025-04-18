import type { Metadata } from "next";
import "./globals.css";
import ConvexClerkProvider from "./provider/ConvexClerkProvider";
import Background from "./components/Background";
import {CustomNavbar} from "./components/NavBar";
import Footer from "./components/Footer";




export const metadata: Metadata = {
  title: "RepliFit AI - Get Jacked!",
  description: "An AI fitness platform for Body Recomposition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
    <html lang="en">
      <body
        className="pt-2">
           <CustomNavbar/>
          <Background />
         <main>
         {children}
          </main> 
          <Footer/>
      </body>
    </html>
    </ConvexClerkProvider>
  );
}
