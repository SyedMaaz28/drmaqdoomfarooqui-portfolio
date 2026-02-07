import "./globals.css";
import {
  Playfair_Display,
  Inter,
} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Arabic Quran Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          font-sans
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
