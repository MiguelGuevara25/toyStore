import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MenuMobile from "./components/MenuMobile";
import Main from "./components/Main";
import ModalLogin from "./components/ModalLogin";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  return (
    <div className="bg-[#262837] w-full h-screen">
      <Sidebar
        showMenu={showMenu}
        setModalLogin={setModalLogin}
        successfulLogin={successfulLogin}
      />
      <MenuMobile
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setModalLogin={setModalLogin}
        successfulLogin={successfulLogin}
      />
      <Main />
      {modalLogin && (
        <ModalLogin
          setModalLogin={setModalLogin}
          setSuccessfulLogin={setSuccessfulLogin}
        />
      )}
    </div>
  );
}

export default App;
