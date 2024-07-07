"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { themeStore } from "@/store/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = themeStore((state: any) => state.theme);

  return (
    <html lang="en">
      <body className={theme}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
