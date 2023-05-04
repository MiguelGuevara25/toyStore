import { useEffect } from "react";
import useStoreToys from "../hooks/useStoreToys";
import toys from "../data";

const Products = () => {
  const { juguetes, setJuguetes, addProduct } = useStoreToys();

  useEffect(() => {
    setJuguetes(toys);
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-3xl uppercase mb-3">Nuestros Productos</h1>
      <div className="grid grid-cols-4 gap-5">
        {juguetes.map((toy) => (
          <div key={toy.id} className="flex flex-col items-center">
            <img src={`${toy.img}`} alt="Products" className="w-40 h-40" />
            <p>{toy.name}</p>
            <p>{toy.price}</p>
            <button
              className="bg-white rounded-md text-gray-600 px-5 py-2"
              onClick={() => addProduct(toy)}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
