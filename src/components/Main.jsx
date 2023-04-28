import { useState, useEffect } from "react";
import SearchFood from "./SearchFood";

const Main = () => {
  const [nose, setNose] = useState([]);

  useEffect(() => {
    async function obtenerToys() {
      const url = "http://localhost:3000/toys";
      const response = await fetch(url);
      const data = await response.json();
      setNose(data);
    }

    obtenerToys();
  }, []);

  return (
    <div>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="p-4">
            {/* Title and Search */}
            <SearchFood />

            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              >
                Hot Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Cold Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2 pr-4">
                Grill
              </a>
            </nav>

            {/* Title Content */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            </div>
          </header>

          <div className="text-white">
            <h1>My Data ctmr</h1>
            {nose.map((toys) => (
              <div key={toys.id} className="bg-green-300">
                <h1>{toys.name}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  );
};

export default Main;