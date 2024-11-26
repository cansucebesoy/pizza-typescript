type FoodItems = {
  image: string;
  name: string;
  rating: string;
  reviews: string;
  price: string;
};

const PizzaOptions = () => {
  const foodItems: FoodItems[] = [
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
};

export default PizzaOptions;
