import { ShoesMock } from "@/data/data";
import Link from "next/link";

export default async function Card({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const offer = params.offer === "true";

  {
    ShoesMock.filter((shoe) => !offer || shoe.offer).map((shoe) => (
      <li key={shoe.id}>
        <Link href={`/gallery/${shoe.id}`}>
          {" "}
          <h3 className="text-xl font-semibold hover:text-amber-500">
            {"-> "}
            {shoe.name}
          </h3>
        </Link>
      </li>
    ));
  }
}
