import { useState, createContext } from "react";

const ToyStoreContext = createContext();

const ToyStoreProvider = ({ children }) => {
  const [juguetes, setJuguetes] = useState([]);
  const [time, setTime] = useState(new Date());
  const [cart, setCart] = useState([]);
  const [countToys, setCountToys] = useState(0);
  const [user, setUser] = useState("");
  const [contra, setContra] = useState("");
  const [verifUser, setVerifUser] = useState("");
  const [verifPassword, setVerifPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const [cartShopping, setCartShopping] = useState(false);

  const addProduct = (toy) => {
    setCountToys(countToys + 1);

    const index = cart.findIndex((item) => item.id === toy.id);
    if (index !== -1) {
      const updatedCartItems = [...cart];
      updatedCartItems[index].cantidad++;
      setCart(updatedCartItems);
    } else {
      setCart([...cart, { ...toy }]);
    }
  };

  const closeModalLogin = () => {
    setModalLogin(false);
  };

  const singin = (e) => {
    e.preventDefault();

    if (verifUser === user && verifPassword === contra) {
      setSuccessfulLogin(true);
      setModalLogin(false);
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const showModalLogin = () => {
    setModalLogin(true);
  };

  const showCartShopping = () => {
    setCartShopping(!cartShopping);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
  };

  return (
    <ToyStoreContext.Provider
      value={{
        juguetes,
        setJuguetes,
        time,
        setTime,
        options,
        cart,
        setCart,
        countToys,
        setCountToys,
        addProduct,
        user,
        setUser,
        contra,
        setContra,
        verifUser,
        setVerifUser,
        verifPassword,
        setVerifPassword,
        showPassword,
        setShowPassword,
        closeModalLogin,
        singin,
        togglePassword,
        showMenu,
        modalLogin,
        setModalLogin,
        successfulLogin,
        cartShopping,
        setShowMenu,
        setCartShopping,
        showModalLogin,
        showCartShopping,
        toggleMenu,
      }}
    >
      {children}
    </ToyStoreContext.Provider>
  );
};

export { ToyStoreProvider };
export default ToyStoreContext;
