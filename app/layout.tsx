import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import AppBar from "@/components/sections/AppBar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "klypzo - AI Video Generator",
  description: "",
};

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${spaceGrotesk.className} `}>
          {/* <ThemeProvider attribute="class" defaultTheme="system"> */}
          <AppBar />
          {children}
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
