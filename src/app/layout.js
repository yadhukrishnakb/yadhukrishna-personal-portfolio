import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yadhu Krishna | Full Stack Developer",
  description:
    "Portfolio of Yadhu Krishna, a full-stack developer building modern, responsive and user-focused web applications.",

  openGraph: {
    title: "Yadhu Krishna | Full Stack Developer",
    description:
      "Portfolio of Yadhu Krishna, a full-stack developer building modern, responsive and user-focused web applications.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Yadhu Krishna | Full Stack Developer",
    description:
      "Portfolio of Yadhu Krishna, a full-stack developer building modern, responsive and user-focused web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
