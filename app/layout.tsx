import type { Metadata } from "next";
import ConfigureAmplify from '@/components/ConfigureAmplify';
import AuthenticatorWrapper from "./AuthenticatorWrapper";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { Geist, Geist_Mono } from "next/font/google";
import '@aws-amplify/ui-react/styles.css'; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AWS Projects",
  description: "AWS S3 File Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigureAmplify />
        <AuthenticatorWrapper>
          <Sidebar />
          <div className="lg:pl-56">
            <Topbar />
            <main>{children}</main>
          </div>
        </AuthenticatorWrapper>
      </body>
    </html>
  );
}
