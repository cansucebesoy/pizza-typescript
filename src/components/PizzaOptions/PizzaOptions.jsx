export default function PizzaOptions() {
  return (
    <div className="w-full flex justify-center mb-16">
      <div className="w-2/3 flex justify-between">
        <div className="bg-[#ffffff] rounded-2xl p-8 mx-4">
          <img className="my-2" src="/food-1.png" alt="" />
          <div className="">
            <span className="font-semibold text-xl">Terminal Pizza</span>
            <div className="flex justify-between py-2">
              <span className="font-medium">4.9</span>
              <div className="">
                <span className="mr-16 font-medium">200</span>
                <span className="font-semibold">60₺</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-2xl p-8 mx-4">
          <img className="my-2" src="/food-2.png" alt="" />
          <div className="">
            <span className="font-semibold text-xl">
              Position Absolute Acı Pizza
            </span>
            <div className="flex justify-between py-2">
              <span className="font-medium">4.9</span>
              <div>
                <span className="mr-16 font-medium">200</span>
                <span className="font-semibold">60₺</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-2xl p-8 mx-4">
          <img className="my-2" src="/food-3.png" alt="" />
          <div className="">
            <span className="font-semibold text-xl">
              useEffect Tavuklu Burger
            </span>
            <div className="flex justify-between py-2">
              <span className="font-medium">4.9</span>
              <div>
                <span className="mr-16 font-medium">200</span>
                <span className="font-semibold">60₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
