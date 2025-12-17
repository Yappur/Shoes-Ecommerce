"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  children: React.ReactNode;
  href: string;
}

export function MenuLink({ children, href }: MenuLinkProps) {
  const pathname = usePathname();

  return (
    <nav className="text-white flex gap-5">
      <Link
        className="hover:text-yellow-300 active:text-yellow-500 transform transition-colors duration-200"
        href={href}
        data-activate={pathname === href}
      >
        {children}
      </Link>
    </nav>
  );
}
