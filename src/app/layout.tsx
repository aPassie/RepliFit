import type { Metadata } from "next";
import "./globals.css";
import ConvexClerkProvider from "./provider/ConvexClerkProvider";



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
        className="pt-6">
          {children}
      </body>
    </html>
    </ConvexClerkProvider>
  );
}
