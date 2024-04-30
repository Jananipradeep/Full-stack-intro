import React, { ReactNode } from "react";
import Head from "next/head";
import { cn } from "@/lib/utils";
import "../styles/fonts.css";
import "../styles/globals.css";
import { gemunu } from "@/lib/fonts";

export const metadata = {
  title: "Test App",
  description: "This is a test app",
};

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add any other required head elements */}
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-gemunu antialiased",
          gemunu.variable
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default Layout;
