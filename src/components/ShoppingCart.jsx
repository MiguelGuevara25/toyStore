const ShoppingCart = ({ cart, cartShopping }) => {
  return (
    <div
      className={`bg-[#1f1d2B] text-gray-300 fixed lg:right-0 top-0 w-[23%] h-screen flex flex-col items-center py-6 rounded-tr-xl rounded-br-xl z-50 ${
        cartShopping ? "right-0" : "-right-full"
      } ${cart.length ? " " : "justify-center"}`}
    >
      <p
        className={`text-xl font-bold my-5 ${
          cart.length ? "border-b-4 border-[#ec7c6a]" : ""
        }`}
      >
        {cart.length ? "Mis Productos" : "No hay nada en el carrito"}
      </p>
      <ul>
        {cart.map((toy) => (
          <li key={toy.id}>
            {toy.name} - ${toy.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
