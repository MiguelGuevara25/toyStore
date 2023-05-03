import { useState } from "react";

import Products from "./Products";
import SearchFood from "./SearchFood";
import ShoppingCart from "./ShoppingCart";

const Main = ({ cartShopping }) => {
  const [cart, setCart] = useState([]);
  const addProduct = (toy) => {
    setCart([...cart, toy]);
  };

  return (
    <div>
      <main className="lg:pl-28 grid grid-cols-1 ml-8 lg:grid-cols-8">
        <div className="lg:col-span-6">
          <header className="py-4 pr-8">
            <SearchFood />

            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6 links">
              <a href="#" className="py-2 pr-4">
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

            <div className="flex items-center justify-between">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            </div>
          </header>

          <Products addProduct={addProduct} />
        </div>

        <ShoppingCart cart={cart} cartShopping={cartShopping} />
      </main>
    </div>
  );
};

export default Main;
