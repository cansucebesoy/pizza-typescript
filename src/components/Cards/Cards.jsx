export default function Cards({ handleClick }) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex w-2/3 gap-3">
          <div className="relative ">
            <img className="h-full rounded-xl" src="/kart-1.png" alt="" />
            <div className="absolute top-10 left-10 z-50 ">
              <p className="text-white font-quattrocento font-semibold text-6xl">
                Özel <br /> Lezzetus
              </p>
              <p className="text-white">Position: Absolute Acı Burger</p>
              <button
                onClick={handleClick}
                className="text-[#CE2829] bg-[#ffffff] rounded-full px-4 py-2 mt-4 font-semibold"
              >
                Sipariş Ver
              </button>
            </div>
          </div>

          <div className="h-full flex flex-col gap-3">
            <div className=" h-1/2 relative">
              <img className="h-full rounded-xl" src="/kart-2.png" alt="" />
              <div className="absolute top-5 left-5 z-50">
                <p className="text-white font-semibold text-4xl">
                  Hackathlon <br /> Burger Menu
                </p>
                <button
                  onClick={handleClick}
                  className="text-[#CE2829] bg-[#ffffff] rounded-full px-4 py-2 mt-4 font-semibold"
                >
                  Sipariş Ver
                </button>
              </div>
            </div>

            <div className="relative h-1/2">
              <img className="h-full rounded-xl" src="/kart-3.png" alt="" />
              <div className="absolute top-5 left-5 z-50">
                <p className="text-black font-semibold text-4xl">
                  <span className="text-[#CE2829]">Çoooook</span> hızlı <br />{" "}
                  npm gibi kurye
                </p>
                <button
                  onClick={handleClick}
                  className="text-[#CE2829] bg-[#ffffff] rounded-full px-4 py-2 mt-4 font-semibold"
                >
                  Sipariş Ver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-2/3 flex flex-col items-center py-8">
          <p className="font-satisfy text-[#CE2829] font-semibold text-xl">
            en çok paketlenen menüler
          </p>
          <p className="font-semibold text-3xl mt-2">
            Acıktıran Kodlara Doyuran Lezzet
          </p>
        </div>
      </div>
    </>
  );
}
