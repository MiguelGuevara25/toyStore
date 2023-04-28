import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutBoxLine,
} from "react-icons/all";

const Sidebar = ({ showMenu }) => {
  return (
    <div
      className={`bg-[#1f1d2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>

          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutBoxLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
