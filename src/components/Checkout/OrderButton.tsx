import axios from "axios";
import { useHistory } from "react-router-dom";

type OrderSummaryProps = {
  name: string;
  toppings: string[];
  size: string;
  dough: string;
};

type OrderButtonProps = {
  orderSummary: OrderSummaryProps;
  pizzaCount: number;
};

const OrderButton = ({ orderSummary, pizzaCount }: OrderButtonProps) => {
  let history = useHistory();

  const handleClick = async () => {
    const { name, toppings, size, dough } = orderSummary;

    if (
      toppings.length >= 4 &&
      name.length >= 3 &&
      size !== "" &&
      dough !== ""
    ) {
      try {
        const response = await axios.post("https://reqres.in/api/pizza", {
          ...orderSummary,
          pizzaCount,
        });
        history.push({
          pathname: "/Success",
          state: {
            response: response.data,
            pizzaCount,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <button
      data-cy="submit-button"
      onClick={handleClick}
      className=" bg-[#FDC913] w-full h-12 rounded-b-sm font-bold"
    >
      SİPARİŞ VER
    </button>
  );
};
export default OrderButton;
