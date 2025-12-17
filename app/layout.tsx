import { MenuLink } from "@/components/menu-link";
import "./globals.css";
import localFont from "next/font/local";

const gothik = localFont({
  src: "../public/fonts/Gothik-Steel.ttf",
  display: "swap",
  variable: "--font-gothik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gothik.variable}>
      <body>
        <header className="bg-[#1b1b1b] sticky top-0 left-0 right-0 p-4 opacity-95 border-b-3 border-winered z-50">
          <nav className="container max-w-4xl mx-auto text-white p-5 flex gap-5">
            <div>
              <MenuLink href="/">
                <span className="text-winered">Nova Shoes</span>
              </MenuLink>
            </div>
            <div className="flex ml-auto gap-4 font-bold">
              <MenuLink href="/gallery"> Colecciones</MenuLink>
              <span className=" border border-winered"></span>
              <MenuLink href="/about"> About</MenuLink>
              <span className="border border-winered"></span>
              <MenuLink href="/contact"> Contact</MenuLink>
            </div>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
