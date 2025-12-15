import { ShoesMock } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

export default async function ItemsCard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const offer = params.offer === "true";

  const filteredShoes = ShoesMock.filter((shoe) => !offer || shoe.offer);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredShoes.map((shoe) => (
        <li key={shoe.id}>
          <Link
            href={`/gallery/${shoe.id}`}
            className="block transition-transform hover:scale-105"
          >
            <div className="bg-black p-4 flex flex-col items-center border border-winered rounded-lg h-full">
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={shoe.image || "/placeholder.svg"}
                  alt={shoe.name}
                  fill // fill hace que la imagen llene todo el contenedor
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl  text-winered font-(--font-gothik) text-center mb-2">
                {shoe.name}
              </h3>
              <p className="text-white text-lg">$ {shoe.price}.00</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
