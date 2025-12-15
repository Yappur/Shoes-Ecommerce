import { MenuLink } from "@/components/menu-link";
import "./globals.css";
import styles from "./page.module.css";

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-[#1b1b1b] sticky top-0 left-0 right-0 p-4 opacity-95 border-b-3 border-winered">
          <nav className="text-white p-5 flex gap-5">
            <MenuLink href="/">NovaKicks</MenuLink>
            <MenuLink href="/gallery"> Gallery</MenuLink>
            <MenuLink href="/about"> About</MenuLink>
            <MenuLink href="/contact"> Contact</MenuLink>
          </nav>
        </header>
        <div className={styles.Layout}>{children}</div>
      </body>
    </html>
  );
}
