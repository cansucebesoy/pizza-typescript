type NavItem = {
  icon: string;
  text: string;
};

const navItems: NavItem[] = [
  { icon: "/1.svg", text: "Ramen" },
  { icon: "/2.svg", text: "Pizza" },
  { icon: "/3.svg", text: "Burger" },
  { icon: "/4.svg", text: "French Fries" },
  { icon: "/5.svg", text: "Fast Food" },
  { icon: "/6.svg", text: "Soft Drinks" },
];

const NavbarSecondary = () => {
  return (
    <nav className="w-full flex justify-center py-4">
      <div className="w-full md:w-2/3 px-4 md:px-0">
        <div className="flex flex-wrap justify-center md:justify-between gap-1 md:gap-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mx-2">
                <img className="w-10 h-10 mr-2" src={item.icon} alt="" />
                <span className="text-[#292929] font-semibold text-md md:text-lg">
                  {item.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarSecondary;
