import { MenuLink } from "@/components/menu-link";
import { ShoesMock } from "@/data/data";
import { Suspense } from "react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 p-4 lg:p-6">
      <aside className="bg-[#1b1b1b] border-2 border-winered p-4 rounded-lg text-white h-fit lg:sticky lg:top-32 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
        <div>
          <nav>
            <ul className="space-y-2">
              <li className="text-center text-2xl flex justify-center border-b-2 border-winered pb-2 mb-4">
                <MenuLink href="/gallery">Galería</MenuLink>
              </li>
              {ShoesMock.map((shoe) => (
                <li
                  key={shoe.id}
                  className="border border-winered p-2 hover:bg-winered/10 rounded-md transition-colors"
                >
                  <MenuLink href={`/gallery/${shoe.id}`}>{shoe.name}</MenuLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="min-w-0">{children}</main>
    </div>
  );
}
