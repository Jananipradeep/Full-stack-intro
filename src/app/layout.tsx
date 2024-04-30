import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import localFonts from "next/font/local";
import "../styles/fonts.css";

export const metadata: Metadata = {
  title: "Test App",
  description: "This is a test app",
};

export const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const gemunu = localFonts({
  src: "../../public/fonts/GemunuLibre-Medium.ttf",
  variable: "--font-gemunu",
  weight: "500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "font-gemunu h-full bg-background antialiased",
          gemunu.variable,
          lato.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
