import {
  RiAddLine,
  RiPieChartLine,
  RiMenu3Fill,
  RiUser3Line,
  RiCloseLine,
} from "react-icons/all";

const MenuMobile = ({ showMenu, setShowMenu }) => {
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="bg-[#1f1d2B] py-2 px-8 rounded-tl-xl rounded-tr-xl lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 flex items-center justify-between">
        <button className="p-2">
          <RiUser3Line />
        </button>

        <button className="p-2">
          <RiAddLine />
        </button>

        <button className="p-2">
          <RiPieChartLine />
        </button>

        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
    </div>
  );
};

export default MenuMobile;
