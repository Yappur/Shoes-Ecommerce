import { MenuLink } from "@/components/menu-link";
import { ShoesMock } from "@/data/data";
import { Suspense } from "react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-wrap  gap-10 pl-5 ">
      <aside className="bg-gray-600 h-[600px] p-4 rounded-b-2xl text-white">
        <h4 className="text-3xl font-bold m-3">Zapatillas</h4>
        <nav>
          <ul className="px-2 space-y-1.5">
            <li>
              <MenuLink href="/gallery">{"> "}Galería</MenuLink>{" "}
            </li>
            {ShoesMock.map((shoe) => (
              <li key={shoe.id}>
                <Suspense fallback={<span>Loading...</span>}>
                  <MenuLink key={shoe.id} href={`/gallery/${shoe.id}`}>
                    {"> "}
                    {shoe.name}
                  </MenuLink>
                </Suspense>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main>{children}</main>
    </div>
  );
}
