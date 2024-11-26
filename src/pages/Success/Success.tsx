import React from "react";
import { useHistory } from "react-router-dom";

const Success = () => {
  let history = useHistory();
  const { state } = history.location;
  const { response } = state;

  console.log("response data:", response);
  const totalCost =
    (response.pizzaCost + response.toppingsCost) * response.pizzaCount;

  return (
    <div className="bg-[#CE2829] w-screen h-screen overflow-auto">
      <div className="flex flex-col items-center gap-y-12 pt-28">
        <img src="/logo.svg" alt="" />
        <p className="text-[#FDC913] font-satisfy text-xl">siparişiniz yolda</p>
        <div className="text-7xl text-center text-white font-light">
          TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI! <br />{" "}
        </div>
      </div>
      <div className="w-full max-w-md mx-auto my-16 text-white bg-white/10 rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex items-center border-b border-white/20 pb-2">
            <span className="font-semibold">Boyut:&nbsp; </span>
            <span> {response.size}</span>
          </div>
          <div className="flex  items-center border-b border-white/20 pb-2">
            <span className="font-semibold">Hamur:&nbsp; </span>
            <span> {response.dough}</span>
          </div>
          <div className="flex items-center border-b border-white/20 pb-2">
            <span className="font-semibold">Ek Malzemeler:&nbsp;</span>
            <span>
              {response.toppings.map((topping, index) => (
                <span key={index}>
                  {topping}
                  {index !== response.toppings.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/20">
          <p className="text-center font-semibold mb-4">Sipariş Toplamı</p>
          <div className="flex justify-between items-center">
            <span>Seçimler:</span>
            <span>{response.toppingsCost * response.pizzaCount}₺</span>
          </div>
          <div className="flex justify-between items-center font-bold mt-2">
            <span>Toplam:</span>
            <span>{totalCost}₺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
