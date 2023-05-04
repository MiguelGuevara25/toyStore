import { useContext } from "react";
import ToyStoreContext from "../context/ToyStoreProvider";

const useStoreToys = () => {
  return useContext(ToyStoreContext);
};

export default useStoreToys;
