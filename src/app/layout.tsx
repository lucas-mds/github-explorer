import type { Metadata } from "next";
import localFont from "next/font/local";
import ReactQueryClientProvider from "@/components/react-query-client-provider";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Github Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider>
        <html lang="en">
          <body
            id="__tailwind_important"
            className={`${geistSans.variable} ${geistMono.variable}`}
          >
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
}
