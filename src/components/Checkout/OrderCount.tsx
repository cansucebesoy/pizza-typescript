const OrderCount = ({ pizzaCount, setPizzaCount }) => {
  const handleNegativeClick = () => {
    if (pizzaCount > 1) {
      setPizzaCount(pizzaCount - 1);
    }
  };

  const handlePositiveClick = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="flex">
      <button
        onClick={handleNegativeClick}
        className="bg-[#FDC913] w-12 h-12 rounded-l-sm "
      >
        -
      </button>
      <div className="font-bold flex justify-center items-center w-12 h-12 border">
        {pizzaCount}
      </div>
      <button
        onClick={handlePositiveClick}
        className="bg-[#FDC913] w-12 h-12 rounded-r-sm"
      >
        +
      </button>
    </div>
  );
};
export default OrderCount;
