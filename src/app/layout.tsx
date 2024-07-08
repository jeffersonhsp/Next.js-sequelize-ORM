import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "@/src/contexts/authContext";

export const metadata: Metadata = {
  title: "Next + Sequelize App",
  description: "Utlizando CLI do Sequelize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pt-br" className={'h-full bg-white'}>
      <body className={"h-full"} >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
