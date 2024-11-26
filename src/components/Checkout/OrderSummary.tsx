const OrderSummary = ({ toppingsCost, pizzaCost, pizzaCount }) => {
  return (
    <div className="w-full">
      <div className="p-8 border rounded-sm font-semibold">
        <div className="mb-3">Sipariş Toplamı</div>
        <div className=" mb-2 flex justify-between font-semibold text-[#5F5F5F] text-sm margin-r">
          Seçimler <span>{toppingsCost * pizzaCount}₺</span>
        </div>
        <div className=" flex justify-between font-semibold text-[#CE2829] text-sm ">
          Toplam <span>{(pizzaCost + toppingsCost) * pizzaCount}₺</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
