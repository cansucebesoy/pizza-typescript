export default function NavBar1() {
  return (
    <div className="w-full flex justify-center py-4">
      <div className=" w-2/3 flex text-[#292929] font-semibold text-md justify-between ">
        <div className="flex items-center mx-4">
          <img className="mx-2" src="/1.svg" alt="" />
          <span>Yeni! Kore</span>
        </div>
        <div className="flex items-center mx-4">
          <img className="mx-2" src="/2.svg" alt="" />
          <span>Pizza</span>
        </div>
        <div className="flex items-center mx-4">
          <img className="mx-2" src="/3.svg" alt="" />
          <span>Burger</span>
        </div>
        <div className="flex items-center mx-4">
          <img className="mx-2" src="/4.svg" alt="" />
          <span>Kızartmalar</span>
        </div>
        <div className="flex items-center mx-4">
          <img className="mx-2" src="/5.svg" alt="" />
          <span>Fast Food</span>
        </div>
        <div className="flex items-center mx-4">
          <img className="mx-2" src="/6.svg" alt="" />
          <span>Gazlı İçecek</span>
        </div>
      </div>
    </div>
  );
}
