import { useForm } from "react-hook-form";
const OrderNote = ({ setNote }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleInput = (value) => {
    setNote(value.trim());
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-2/3 xl:w-2/5 px-4">
        <h3 className="text-lg font-bold mt-4">Sipariş Notu</h3>
        <form action="">
          <div>
            <textarea
              data-cy="customer-order-note"
              placeholder="Sipariş notu ekleyebilirsiniz"
              className={`bg-[#FAF7F2] p-2 rounded w-full h-20 ${
                errors.name ? "border-[#CE2829]" : "border-gray-300"
              }`}
              type="text"
              {...register("siparis notu", {
                required: false,
                onChange: (e) => handleInput(e.target.value),
              })}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderNote;
