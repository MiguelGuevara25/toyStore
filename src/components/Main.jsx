import Products from "./Products";
import SearchFood from "./SearchFood";
import ShoppingCart from "./ShoppingCart";

const Main = () => {
  return (
    <div>
      <main className="lg:pl-28 grid grid-cols-1 ml-8 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="py-4 pr-8">
            {/* Title and Search */}
            <SearchFood />

            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="relative py-2 pr-4 text-[#ec7c6a]">
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

          <Products />
        </div>

        <ShoppingCart />
      </main>
    </div>
  );
};

export default Main;
