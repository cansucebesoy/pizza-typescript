import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Success = () => {
  let history = useHistory();
  const { state } = history.location;
  const { request } = state;

  return (
    <div className="bg-[#CE2829] w-screen h-screen">
      <div className="flex flex-col items-center gap-y-44 pt-28">
        <img src="/logo.svg" alt="" />
        <div className="text-7xl text-center text-white font-light">
          TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
        </div>
      </div>
    </div>
  );
};
export default Success;
