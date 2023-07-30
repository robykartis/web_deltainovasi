import NextAuthSessionProvider from "@/providers/sessionProvider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deltainovasi",
  description: "website deltainovasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-800 text-white">{children}</body>
    </html>
  );
}
