import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '500', '600','700'],
  variable: '--font-family-montserrat',
});

export const metadata: Metadata = {
  title: "Eventit",
  description: "Eventit is a platform for event organisations!",
  icons: {
    icon:'/eventit/app/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body className={montserrat.variable}>{children}</body>
    </html>
      </ClerkProvider>
  );
}
