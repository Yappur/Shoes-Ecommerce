import { ShoesMock } from "@/data/data";
export default async function ShoeView({ params }: { params: { id: string } }) {
  const { id } = await params;

  const shoe = ShoesMock.find((shoe) => shoe.id === id);

  return (
    <main>
      <h1 className="text-3xl">{shoe?.name}</h1>
      <img src={shoe?.image} alt={shoe?.name} />
      <div className="flex text-3xl gap-5">
        <p className="text-green-400">Talle:{shoe?.size}</p>
        <p className="text-rose-400">Color: {shoe?.color}</p>
      </div>

      <button className="ml-auto bg-violet-900 border-2 border-blue-800 px-5 py-2 my-3.5 cursor-pointer hover:bg-violet-950">
        Comprar
      </button>
    </main>
  );
}
