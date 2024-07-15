export default function NavbarSecondary() {
  return (
    <div className="w-full flex justify-center py-4">
      <div className=" w-2/3 flex text-[#292929] font-semibold text-md justify-between">
        <button className="bg-[#ffffff] rounded-full p-2 mx-2">
          <div className="flex items-center mx-4 ">
            <img className="mx-2" src="/1.svg" alt="" />
            <span>Ramen</span>
          </div>
        </button>
        <button className="bg-[#ffffff] rounded-full  p-2 mx-2">
          <div className="flex items-center mx-4">
            <img className="mx-2" src="/2.svg" alt="" />
            <span>Pizza</span>
          </div>
        </button>
        <button className="bg-[#ffffff] rounded-full  p-2 mx-2">
          <div className="flex items-center mx-4">
            <img className="mx-2" src="/3.svg" alt="" />
            <span>Burger</span>
          </div>
        </button>
        <button className="bg-[#ffffff] rounded-full  p-2 mx-2">
          <div className="flex items-center mx-4">
            <img className="mx-2" src="/4.svg" alt="" />
            <span>French Fries</span>
          </div>
        </button>
        <button className="bg-[#ffffff] rounded-full  p-2 mx-2">
          <div className="flex items-center mx-4">
            <img className="mx-2" src="/5.svg" alt="" />
            <span>Fast Food</span>
          </div>
        </button>
        <button className="bg-[#ffffff] rounded-full  p-2 mx-2">
          <div className="flex items-center mx-4">
            <img className="mx-2" src="/6.svg" alt="" />
            <span>Soft Drinks</span>
          </div>
        </button>
      </div>
    </div>
  );
}
