export default function Cards({ handleClick }) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-3 px-4 md:px-0">
          <div className="relative md:w-1/2">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="/kart-1.png"
              alt=""
            />
            <div className="absolute top-4 left-4 md:top-10 md:left-10 z-50">
              <p className="text-white font-quattrocento font-semibold text-4xl md:text-6xl">
                Özel <br /> Lezzetus
              </p>
              <p className="text-white text-sm md:text-base">
                Position: Absolute Acı Burger
              </p>
              <button
                onClick={handleClick}
                className="text-[#CE2829] bg-[#ffffff] rounded-full px-3 py-1 md:px-4 md:py-2 mt-2 md:mt-4 font-semibold text-sm md:text-base"
              >
                Sipariş Ver!!!
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-3">
            <div className="relative h-1/2">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="/kart-2.png"
                alt=""
              />
              <div className="absolute top-4 left-4 md:top-5 md:left-5 z-50">
                <p className="text-white font-semibold text-3xl md:text-4xl">
                  Hackathlon <br /> Burger Menu
                </p>
                <button
                  onClick={handleClick}
                  className="text-[#CE2829] bg-[#ffffff] rounded-full px-3 py-1 md:px-4 md:py-2 mt-2 md:mt-4 font-semibold text-sm md:text-base"
                >
                  Sipariş Ver
                </button>
              </div>
            </div>

            <div className="relative h-1/2">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="/kart-3.png"
                alt=""
              />
              <div className="absolute top-4 left-4 md:top-5 md:left-5 z-50">
                <p className="text-black font-semibold text-3xl md:text-4xl">
                  <span className="text-[#CE2829]">Çoooook</span> hızlı <br />{" "}
                  npm gibi kurye
                </p>
                <button
                  onClick={handleClick}
                  className="text-[#CE2829] bg-[#ffffff] rounded-full px-3 py-1 md:px-4 md:py-2 mt-2 md:mt-4 font-semibold text-sm md:text-base"
                >
                  Sipariş Ver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/3 flex flex-col items-center py-8 px-4 md:px-0">
          <p className="font-satisfy text-[#CE2829] font-semibold text-lg md:text-xl text-center">
            en çok paketlenen menüler
          </p>
          <p className="font-semibold text-2xl md:text-3xl mt-2 text-center">
            Acıktıran Kodlara Doyuran Lezzet
          </p>
        </div>
      </div>
    </>
  );
}
