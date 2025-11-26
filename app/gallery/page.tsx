import { ShoesMock } from "@/data/data";

export default function Gallery() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Galería de Zapatillas
      </h1>
      <h2 className="text-2xl text-green-400 mb-6">
        Explora nuestra colección exclusiva de zapatillas. Aquí encontrarás una
        variedad de estilos y marcas para todos los gustos.
      </h2>
      <ul>
        
        {ShoesMock.map((shoe) => (
          <li key={shoe.id}>
            <h3 className="text-xl font-semibold hover:text-amber-500">
              {"-> "}
              {shoe.name}
            </h3>
          </li>
        ))}
      </ul>
    </main>
  );
}
