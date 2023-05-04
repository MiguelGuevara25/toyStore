import Products from "./Products";
import SearchFood from "./SearchFood";
import ShoppingCart from "./ShoppingCart";
import useStoreToys from "../hooks/useStoreToys";

const Main = () => {
  const { addProduct, cart, countToys, cartShopping } = useStoreToys();

  return (
    <div>
      <main className="lg:pl-28 grid grid-cols-1 ml-8 lg:grid-cols-8">
        <div className="lg:col-span-6 w-[98%]">
          <header className="py-4 pr-8">
            <SearchFood />

            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b links">
              <a href="#" className="py-2 pr-4">
                Juguetes
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
          </header>

          <Products addProduct={addProduct} />
        </div>

        <ShoppingCart
          cart={cart}
          cartShopping={cartShopping}
          countToys={countToys}
        />
      </main>
    </div>
  );
};

export default Main;
