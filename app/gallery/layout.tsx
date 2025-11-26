import { MenuLink } from "@/components/menu-link";
import { ShoesMock } from "@/data/data";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <aside className="bg-gray-600">
        <h4 className="text-3xl font-bold m-3">Zapatillas</h4>
        <nav>
          <ul className="px-2 space-y-1.5">
            <li>
              <MenuLink href="/gallery">{"> "}Galería</MenuLink>{" "}
            </li>
            {ShoesMock.map((shoe) => (
              <li key={shoe.id}>
                <MenuLink key={shoe.id} href={`/gallery/${shoe.id}`}>
                  {"> "}
                  {shoe.name}
                </MenuLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main>{children}</main>
    </div>
  );
}
