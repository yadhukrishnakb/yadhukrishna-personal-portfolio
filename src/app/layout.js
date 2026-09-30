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
  metadataBase: new URL(
    "https://yadhukrishna-personal-portfolio-flax.vercel.app",
  ),

  title: "Yadhu Krishna | Full Stack Developer",

  description:
    "Portfolio of Yadhu Krishna, a full-stack developer building modern, responsive and user-focused web applications.",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "WyKu8AjwqQzjUEIQNJXuw7AlmLDuhlXD-RKlKt185gw",
  },

  openGraph: {
    title: "Yadhu Krishna | Full Stack Developer",
    description:
      "Yadhu Krishna is a full-stack developer building modern, responsive, and user-focused web applications.",
    url: "/",
    siteName: "Yadhu Krishna",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Yadhu Krishna | Full Stack Developer",
    description:
      "Yadhu Krishna is a full-stack developer building modern, responsive, and user-focused web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
