import ItemsCard from "@/components/ItemsCard";
import { Button } from "@/components/Button";
import { ShoesMock } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

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
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] font-(--font-gothik)  mb-12">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/HeroImage.png"
            alt="Gallery Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido superpuesto */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-(--font-gothik) text-winered mb-4 md:mb-6">
            Domina el juego
          </h1>
          <h2 className="text-sm md:text-base  lg:text-lg text-white mb-6 md:mb-8 max-w-2xl">
            La colección definitiva de zapatillas "Fresh Style" ya disponible.
          </h2>
          <Button>Comprar Ahora</Button>
        </div>
      </section>

      {/* <div>
        <Link href="/gallery">Mostrar todos</Link>
        <Link href="/gallery?offer=true">En ofertas</Link>
      </div> */}

      <h2 className="text-6xl flex items-center text-winered mb-6 font-[--font-gothik]">
        Nuevos ingresos
      </h2>

      <ItemsCard searchParams={searchParams} />
    </main>
  );
}
