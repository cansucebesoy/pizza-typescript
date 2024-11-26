import OrderButton from "./OrderButton";
import OrderCount from "./OrderCount";
import OrderSummary from "./OrderSummary";
import { useState } from "react";

const Checkout = ({ orderSummary }) => {
  const [pizzaCount, setPizzaCount] = useState(1);

  return (
    <div className="w-full flex justify-center mb-16">
      <div className="w-full md:w-2/3 xl:w-2/5 px-4">
        <hr className="w-full p-2" />
        <div className="sm:flex w-full gap-2 space-y-4 sm:space-y-0">
          <OrderCount pizzaCount={pizzaCount} setPizzaCount={setPizzaCount} />
          <div className="w-full">
            <OrderSummary
              pizzaCost={orderSummary.pizzaCost}
              toppingsCost={orderSummary.toppingsCost}
              pizzaCount={pizzaCount}
            />
            <OrderButton orderSummary={orderSummary} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
