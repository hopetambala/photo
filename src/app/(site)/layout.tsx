import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hope's Photo Journal",
  description: "Created to showcase my photography",
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
