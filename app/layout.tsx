import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import "easymde/dist/easymde.min.css";

export const metadata: Metadata = {
  title: "Startups Directory",
  description: "Pitch your startup, connect with enterpreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
