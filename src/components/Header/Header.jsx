import Breadcrumb from "../Breadcrumb/Breadcrumb";
import PizzaBanner from "../PizzaBanner/PizzaBanner";

export default function Header() {
  return (
    <>
      <div className="w-full h-24 bg-[#CE2829] flex flex-col items-center">
        <div className="w-full md:w-2/3 xl:w-2/5 h-full flex justify-center items-center">
          <img className="w-3/4" src="/logo.svg" />
        </div>
      </div>
      <div className="bg-[#FAF7F2]">
        <PizzaBanner />
        <div className="w-full flex justify-center">
          <div className="w-2/5 md:w-2/3 xl:w-2/5 px-4">
            <Breadcrumb />
          </div>
        </div>
      </div>
    </>
  );
}
