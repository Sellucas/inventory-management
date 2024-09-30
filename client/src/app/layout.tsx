import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DashboardWrapper from "./dashboard-wrapper";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory Management",
  description: "Inventory Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
