import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavbarPrimary from "../../components/NavbarPrimary/NavbarPrimary";
import Cards from "../../components/Cards/Cards";
import NavbarSecondary from "../../components/NavbarSecondary/NavbarSecondary";
import PizzaOptions from "../../components/PizzaOptions/PizzaOptions";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/Order");
  };

  return (
    <>
      <div className=" h-screen flex flex-col">
        <img
          className="w-screen h-screen object-cover absolute -z-10"
          src="/home-banner.png"
          alt="pizza"
        />
        <div className="flex flex-col items-center gap-y-4 sm:gap-y-8 px-8">
          <img className="mt-12" src="/logo.svg" alt="" />
          <p className="text-[#FDC913] font-satisfy text-xl">fırsatı kaçırma</p>
          <p className="text-7xl text-center text-white font-light ">
            KOD ACIKTIRIR
            <br />
            PİZZA DOYURUR
          </p>
          <button
            className="bg-[#FDC913] py-2 px-8 rounded-full text-white font-bold"
            onClick={handleClick}
          >
            ACIKTIM
          </button>
        </div>
      </div>
      <div className="mt-auto"></div>
      <NavbarPrimary />
      <div className="bg-[#FAF7F2]">
        <Cards handleClick={handleClick} />
        <NavbarSecondary />
        <PizzaOptions />
        <Footer />
      </div>
    </>
  );
};
export default Home;
