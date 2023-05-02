import toys from "../data";

const Products = () => {
  return (
    <div className="text-white">
      <h1>Nuestros Productos</h1>
      <div className="flex gap-5">
        {toys.map((toy) => (
          <div key={toy.id}>
            <p>{toy.name}</p>
            <p>{toy.price}</p>
            <button className="bg-white rounded-md text-gray-600 px-5 py-2">
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
