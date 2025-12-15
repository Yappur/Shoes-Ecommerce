import { MenuLink } from "@/components/menu-link";
import { ShoesMock } from "@/data/data";
import { Suspense } from "react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 p-4 lg:p-6">
      <aside className="bg-gray-600 p-4 rounded-lg text-white h-fit lg:sticky lg:top-6">
        <h4 className="text-2xl font-bold mb-4">Zapatillas</h4>
        <nav>
          <ul className="space-y-2">
            <li>
              <MenuLink href="/gallery">{"> "}Galería</MenuLink>
            </li>
            {ShoesMock.map((shoe) => (
              <li key={shoe.id}>
                <MenuLink href={`/gallery/${shoe.id}`}>
                  {"> "}
                  {shoe.name}
                </MenuLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="min-w-0">{children}</main>
    </div>
  );
}
