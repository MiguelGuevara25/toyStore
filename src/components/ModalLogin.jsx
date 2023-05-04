import { useEffect } from "react";
import { RiCloseFill, RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import useStoreToys from "../hooks/useStoreToys";

const ModalLogin = () => {
  const {
    user,
    contra,
    verifUser,
    verifPassword,
    showPassword,
    setUser,
    setContra,
    setVerifUser,
    setVerifPassword,
    closeModalLogin,
    togglePassword,
    singin,
  } = useStoreToys();

  useEffect(() => {
    async function obtenerAdmin() {
      const administration = [
        {
          id: 1,
          user: "Codesor",
          password: "miguelynicole",
        },
      ];

      setUser(administration[0].user);
      setContra(administration[0].password);
    }

    obtenerAdmin();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative z-50 w-3/4 md:w-1/3 rounded-xl bg-[#1f1d2B] flex py-10 items-center justify-center">
        <RiCloseFill
          onClick={closeModalLogin}
          className="cursor-pointer right-3 top-3 text-gray-300 text-2xl absolute"
        />

        <form className="flex flex-col gap-3">
          <h1 className="uppercase font-bold text-gray-300 text-center">
            Iniciar Sesión
          </h1>

          <div className="my-5 flex flex-col gap-3 relative">
            <input
              type="text"
              name="user"
              placeholder="Usuario"
              className="bg-[#1f1d2B] border-b-4 border-[#ec7c6a] text-gray-300"
              value={verifUser}
              onChange={(e) => setVerifUser(e.target.value)}
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              className="bg-[#1f1d2B] border-b-4 border-[#ec7c6a] text-gray-300"
              value={verifPassword}
              onChange={(e) => setVerifPassword(e.target.value)}
            />
            <button
              className="text-gray-300 text-xl font-bold absolute right-1 bottom-2"
              onClick={togglePassword}
            >
              {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
            </button>
          </div>

          <button
            className={`text-gray-300 py-1 rounded-lg font-semibold ${
              verifUser === user && verifPassword === contra
                ? "bg-[#ec7c6a] hover:bg-[#ec7b6ad5]"
                : "bg-gray-300 text-white cursor-default"
            }`}
            onClick={singin}
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
