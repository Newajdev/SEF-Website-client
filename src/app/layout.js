import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarManager from "@/components/shared/NavbarManager";
import FooterWrapper from "@/components/shared/FooterWrapper";
import Script from "next/script";
import PageTransition from "@/components/shared/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shah Emdadia Freelancers",
  description: "Empowering the next generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {process.env.NEXT_PUBLIC_GoogleAnalitics_GID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GoogleAnalitics_GID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GoogleAnalitics_GID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-800 bg-white`}
      >
        <div className="flex flex-col min-h-screen">
          <NavbarManager />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
