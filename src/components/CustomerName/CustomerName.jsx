import { useForm } from "react-hook-form";

export default function CustomerName({ name, setName }) {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const watchedName = watch("name", "");

  const handleInput = (value) => {
    setName(value.trim());
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-2/3 xl:w-2/5 px-4">
        <h3 className="text-lg font-bold mt-4">
          İsminiz
          {watchedName.length > 0 && watchedName.length < 3 && (
            <span className="text-sm font-normal text-[#CE2829] ml-4">
              En az 3 karakter girilmelidir
            </span>
          )}
        </h3>
        <form>
          <div>
            <input
              data-cy="customer-name-text"
              className={`bg-[#FAF7F2] p-2 rounded w-full ${
                errors.name ? "border-[#CE2829]" : "border-gray-300"
              }`}
              type="text"
              placeholder="İsminiz"
              {...register("name", {
                required: true,
                minLength: {
                  value: 3,
                  message: "En az 3 karakter girilmelidir.",
                },
                onChange: (e) => handleInput(e.target.value),
              })}
              defaultValue={name}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
