import type { Metadata } from "next";
import "./globals.css";
import ClerkProvider from "@clerk/nextjs";


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
    <ClerkProvider>
    <html lang="en">
      <body
        className="pt-6">
          {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
