import { ShoesMock } from "@/data/data";
import Link from "next/link";

// En Next.js 13+ (App Router), los componentes son Server Components por defecto.
// La palabra "async" convierte esta función en asíncrona, permitiendo usar "await"
// dentro de ella. Esto es útil para operaciones como fetch de datos o leer parámetros.

export default async function Gallery({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  // Extrae el valor del parámetro "offer" y verifica si es exactamente "true".
  const offer = params.offer === "true";

  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Galería de Zapatillas
      </h1>
      <div>
        <Link href="/gallery">Mostrar todos</Link>
        <Link href="/gallery?offer=true">En ofertas</Link>
      </div>
      <h2 className="text-2xl text-green-400 mb-6">
        Explora nuestra colección exclusiva de zapatillas. Aquí encontrarás una
        variedad de estilos y marcas para todos los gustos.
      </h2>
      {/* PASO 1: FILTRAR las zapatillas según la condición 
       - Si offer = false: !offer es true, devuelve TODAS las zapatillas 
        - Si offer = true: solo devuelve las que tienen shoe.offer = true 
        Esta es una técnica de cortocircuito: (!offer || shoe.offer) */}
      <ul>
        {ShoesMock.filter((shoe) => !offer || shoe.offer).map((shoe) => (
          <li key={shoe.id}>
            <Link href={`/gallery/${shoe.id}`}>
              {" "}
              <h3 className="text-xl font-semibold hover:text-amber-500">
                {"-> "}
                {shoe.name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
