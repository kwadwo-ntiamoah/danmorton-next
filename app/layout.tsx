import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/ui/global.css";
import Image from "next/image";
import invalidAccess from "@/public/images/dog.png";
import { HomeIcon } from "./ui/common/icons";

const nunito = Nunito_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "24 Laundry",
  description: "Your No. 1 Laundy tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`} suppressHydrationWarning={true}>
        <div className="hidden md:block">{children}</div>

        <div className="relative h-screen flex md:hidden md:h-0 overflow-hidden">
          <div className="fixed top-5 left-10  flex items-center space-x-2">
            <HomeIcon />
            <p className="uppercase text-xs">Jemma</p>
          </div>

          <div className="md:hidden flex flex-col p-12 items-center justify-center space-y-10 overflow-hidden">
            <Image
              src={invalidAccess}
              alt="invalid_device_type.png"
              height={80}
            />
            <p className="text-center">
              This application is optimized for tablets & desktop agents. Kindly
              use a tablet or desktop to access the application for a richer
              experience
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
