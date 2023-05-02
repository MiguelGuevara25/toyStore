import { useState, useEffect } from "react";
import { RiSearch2Line } from "react-icons/all";

const SearchFood = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
  };

  const fecha = time.toLocaleString("es-ES", options);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Toy Store</h1>
          <p className="text-gray-500">{fecha}</p>
        </div>

        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1f1d2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFood;
