import { useForm } from "react-hook-form";
import DoughSelection from "../DoughSelection/DoughSelection";

export default function SizeSelection({ setSize, dough, setDough }) {
  const { register, watch } = useForm();

  // Radio button seçimi izleniyor
  const selectedSize = watch("size", "");

  // Seçilen boyutu state'e aktarma
  const handleSizeChange = (value) => {
    setSize(value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-2/3 xl:w-2/5 px-4 flex">
        <div className="w-1/2">
          <h3 className="font-bold text-lg my-4">
            Boyut Seç <span className="text-[#CE2829]">*</span>
          </h3>
          <div className="text-sm space-y-2 space-x-2 flex">
            {/* Küçük Boy */}
            <label
              htmlFor="sizeRadio1"
              className="flex items-center mt-2 cursor-pointer"
            >
              <input
                className="hidden peer"
                type="radio"
                value="Küçük"
                id="sizeRadio1"
                {...register("size", {
                  onChange: (e) => handleSizeChange(e.target.value),
                })}
              />
              <div className="w-10 h-10 bg-[#FAF7F2] peer-checked:bg-[#FDC913] flex items-center justify-center rounded-full">
                S
              </div>
            </label>

            {/* Orta Boy */}
            <label
              htmlFor="sizeRadio2"
              className="flex items-center mt-2 cursor-pointer"
            >
              <input
                className="hidden peer"
                type="radio"
                value="Orta"
                id="sizeRadio2"
                {...register("size", {
                  onChange: (e) => handleSizeChange(e.target.value),
                })}
              />
              <div className="w-10 h-10 bg-[#FAF7F2] peer-checked:bg-[#FDC913] flex items-center justify-center rounded-full">
                M
              </div>
            </label>

            {/* Büyük Boy */}
            <label
              htmlFor="sizeRadio3"
              className="flex items-center mt-2 cursor-pointer"
            >
              <input
                className="hidden peer"
                type="radio"
                value="Büyük"
                id="sizeRadio3"
                {...register("size", {
                  onChange: (e) => handleSizeChange(e.target.value),
                })}
              />
              <div className="w-10 h-10 bg-[#FAF7F2] peer-checked:bg-[#FDC913] flex items-center justify-center rounded-full">
                L
              </div>
            </label>
          </div>
        </div>
        {/* Hamur seçimi */}
        <DoughSelection dough={dough} setDough={setDough} />
      </div>
    </div>
  );
}
