import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Success = () => {
  let history = useHistory();
  const { state } = history.location;
  const { response } = state;
  return (
    <div className="bg-[#CE2829] w-screen h-screen overflow-auto">
      <div className="flex flex-col items-center gap-y-12 pt-28">
        <img src="/logo.svg" alt="" />
        <p className="text-[#FDC913] font-satisfy text-xl">siparişiniz yolda</p>
        <div className="text-7xl text-center text-white font-light">
          TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI! <br />{" "}
          <pre className="text-base">{JSON.stringify(response, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
export default Success;
