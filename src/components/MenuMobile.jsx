import { useState } from "react";
import {
  RiAddLine,
  RiMenu3Fill,
  RiUser3Line,
  RiCloseLine,
  RiLogoutBoxLine,
  RiShoppingCartLine,
} from "react-icons/all";

const MenuMobile = ({
  showMenu,
  setShowMenu,
  setModalLogin,
  successfulLogin,
}) => {
  const [cartShopping, setCartShopping] = useState(false);

  const showModalLogin = () => {
    setModalLogin(true);
  };

  const showCartShopping = () => {
    setCartShopping(!cartShopping);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="bg-[#1f1d2B] py-2 px-8 rounded-tl-xl z-20 rounded-tr-xl lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 flex items-center justify-between">
        <button className="p-2">
          {successfulLogin ? (
            <RiLogoutBoxLine className="text-2xl" />
          ) : (
            <RiUser3Line
              className="text-2xl"
              onClick={showModalLogin}
              cartShopping={cartShopping}
            />
          )}
        </button>

        <button className="p-2">
          <RiAddLine />
        </button>

        {/* {successfulLogin && (
          <button className="p-2" onClick={showCartShopping}>
            <RiShoppingCartLine />
          </button>
        )} */}

        <button className="p-2" onClick={showCartShopping}>
          <RiShoppingCartLine />
        </button>

        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
    </div>
  );
};

export default MenuMobile;
