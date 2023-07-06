import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evo Galleria",
  description: "Discover an exceptional of my selected EVs collection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Evo Galleria</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="Evo Galleria" />
        <meta
          name="description"
          content="Discover an exceptional of my selected EVs collection."
        />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/e-icon.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Evo Galleria" />
        <meta
          property="og:description"
          content="Discover an exceptional of my selected EVs collection."
        />
        <meta property="og:image" content="/Banner-NextJS_Evo.Galleria.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Evo Galleria" />
        <meta
          property="twitter:description"
          content="Discover an exceptional of my selected EVs collection."
        />
        <meta
          property="twitter:image"
          content="/Banner-NextJS_Evo.Galleria.png"
        />
      </head>
      <body className={`${inter.className} overflow-hidden`}>{children}</body>
    </html>
  );
}
