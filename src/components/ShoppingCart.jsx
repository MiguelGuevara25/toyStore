const ShoppingCart = ({ cart, cartShopping }) => {
  return (
    <div
      className={`lg:col-span-2 fixed w-[23%] lg:right-0 bg-[#1f1d2B] text-gray-300 rounded-tl-xl rounded-bl-xl h-screen flex-col lg:flex py-5 items-center hidden ${
        cart.length ? "" : "justify-center"
      } ${cartShopping ? "flex" : ""}`}
    >
      <p className="">
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
