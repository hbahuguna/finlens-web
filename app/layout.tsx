import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinLens | Modern Financial Portal",
  description: "A high-fidelity financial testbed for TestSquad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
