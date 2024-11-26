import { useForm } from "react-hook-form";
import { FormGroup, Input, Label } from "reactstrap";
import { toppingData } from "../../data/toppings";
import { ChangeEvent } from "react";

type ToppingsProps = {
  toppings: string[];
  setToppings: (value: string[]) => void;
};
const Toppings = ({ toppings, setToppings }: ToppingsProps) => {
  const { register, watch } = useForm();

  const selectedToppings = watch("toppings", []);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      //console.log(e); - target -> checked:true/false
      if (!(toppings.length < 10)) {
        e.preventDefault();
        console.error("En fazla 10 malzeme seçebilirsiniz");
      } else {
        setToppings([...toppings, e.target.value]);
      }
    } else {
      //checkbox iptal edilirse
      //seçtiğimiz toppingleri tutmamız lazım
      const newToppings = toppings.filter(
        (topping) => topping !== e.target.value
      );
      setToppings(newToppings);
    }
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full md:w-2/3 xl:w-2/5 px-4">
        <h3 className="text-lg font-bold mt-4">Ek Malzemeler</h3>
        <p className="mb-10">En fazla 10 malzeme seçebilirsiniz. (5₺)</p>
        <div data-cy="toppings" className="w-full flex flex-wrap gap-y-2">
          {toppingData.map((topping, index) => {
            return (
              <FormGroup className="w-1/2 sm:w-1/3" check key={index}>
                <Input
                  {...register("toppings", {
                    onChange: handleClick,
                  })}
                  data-cy={topping}
                  bsSize="sm"
                  className="bg-[#FAF7F2] w-8 h-4 checked:bg-[#FDC913] border-none accent-black"
                  id={"toppingOption" + index}
                  value={topping}
                  type="checkbox"
                />
                <Label
                  for={"toppingOption" + index}
                  className="font-semibold text-[#5F5F5F] text-sm flex items-center px-2 h-full"
                  check
                >
                  {topping}
                </Label>
              </FormGroup>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Toppings;
