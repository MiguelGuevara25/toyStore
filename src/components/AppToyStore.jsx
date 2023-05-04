import Sidebar from "./Sidebar";
import MenuMobile from "./MenuMobile";
import Main from "./Main";
import ModalLogin from "./ModalLogin";
import useStoreToys from "../hooks/useStoreToys";

const AppToyStore = () => {
  const { modalLogin } = useStoreToys();
  return (
    <div className="bg-[#262837] w-full">
      <Sidebar />
      <MenuMobile />
      <Main />
      {modalLogin && <ModalLogin />}
    </div>
  );
};

export default AppToyStore;
