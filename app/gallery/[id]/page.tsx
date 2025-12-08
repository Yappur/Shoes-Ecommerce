import { ShoesMock } from "@/data/data";
export default async function ShoeView({ params }: { params: { id: string } }) {
  const { id } = await params;

  const shoe = ShoesMock.find((shoe) => shoe.id === id);

  return (
    <main>
      <div className="p-10 grid grid-cols-2 mt-6 gap-5 border-2 border-gray-900 rounded-2xl">
        <div>
          <h1 className="text-3xl">{shoe?.name}</h1>
          <img className="w-[500px]" src={shoe?.image} alt={shoe?.name} />
        </div>
        <div>
          <div className="flex ml-auto text-3xl my-10 gap-5">
            <p className="text-green-400">Talle:{shoe?.size}</p>
            <p className="text-rose-400 mb-auto">Color: {shoe?.color}</p>
          </div>
          <div className="ml-auto text-4xl font-bold text-blue-700">
            {/* ${shoe?.price} */}
            Talles:
          </div>
        </div>

        <button className="ml-auto bg-violet-900 border-2 border-blue-800 px-5 py-2 my-3.5 cursor-pointer hover:bg-violet-950">
          Comprar
        </button>
      </div>
    </main>
  );
}
