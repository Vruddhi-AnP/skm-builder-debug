import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "@/components/providers";

export const metadata = {
  title: "Startup Ka Mall",
  description: "Founder ecosystem platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}