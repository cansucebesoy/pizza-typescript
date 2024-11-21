export default function PizzaOptions() {
  const foodItems = [
    {
      image: "/food-1.png",
      name: "Terminal Pizza",
      rating: "4.9",
      reviews: "200",
      price: "60₺",
    },
    {
      image: "/food-2.png",
      name: "Position Absolute Acı Pizza",
      rating: "4.9",
      reviews: "928",
      price: "85₺",
    },
    {
      image: "/food-3.png",
      name: "useEffect Tavuklu Burger",
      rating: "4.9",
      reviews: "462",
      price: "75₺",
    },
  ];

  return (
    <div className="w-full flex justify-center mb-16">
      <div className="w-full sm:w-2/3 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 w-full sm:w-[48%] lg:w-[30%] mb-6 sm:mb-0"
            >
              <img className="w-full mb-4" src={item.image} alt={item.name} />
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{item.rating}</span>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">({item.reviews})</span>
                  <span className="font-semibold text-lg">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function PizzaOptions() {
//   return (
//     <div className="w-full flex justify-center mb-16">
//       <div className="w-2/3 flex justify-between">
//         <div className="bg-[#ffffff] rounded-2xl p-8 mx-4">
//           <img className="my-2" src="/food-1.png" alt="" />
//           <div className="">
//             <span className="font-semibold text-xl">Terminal Pizza</span>
//             <div className="flex justify-between py-2">
//               <span className="font-medium">4.9</span>
//               <div className="">
//                 <span className="mr-16 font-medium">200</span>
//                 <span className="font-semibold">60₺</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ffffff] rounded-2xl p-8 mx-4">
//           <img className="my-2" src="/food-2.png" alt="" />
//           <div className="">
//             <span className="font-semibold text-xl">
//               Position Absolute Acı Pizza
//             </span>
//             <div className="flex justify-between py-2">
//               <span className="font-medium">4.9</span>
//               <div>
//                 <span className="mr-16 font-medium">200</span>
//                 <span className="font-semibold">60₺</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ffffff] rounded-2xl p-8 mx-4">
//           <img className="my-2" src="/food-3.png" alt="" />
//           <div className="">
//             <span className="font-semibold text-xl">
//               useEffect Tavuklu Burger
//             </span>
//             <div className="flex justify-between py-2">
//               <span className="font-medium">4.9</span>
//               <div>
//                 <span className="mr-16 font-medium">200</span>
//                 <span className="font-semibold">60₺</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
