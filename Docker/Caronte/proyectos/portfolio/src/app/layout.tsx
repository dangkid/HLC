import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oliver Dangelo - Ciberseguridad & Desarrollador Web",
  description: "Portfolio de Oliver Dangelo Magallanes. Especialista en ciberseguridad, desarrollo web con vibecoding y soporte técnico. Google Certified en Ciberseguridad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
