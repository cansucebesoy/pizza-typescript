import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#292929] w-full">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between text-white text-sm">
          <div className="mb-8 md:mb-0">
            <img className="mb-4" src="/logo-footer.svg" alt="Logo" />
            <div className="flex items-center my-4">
              <img className="mr-2" src="/icon-1.png" alt="" />
              <span>341 Londonderry Road, İstanbul Türkiye</span>
            </div>
            <div className="flex items-center my-4">
              <img className="mr-2" src="/icon-2.png" alt="" />
              <span>aciktim@teknolojikyemekler.com</span>
            </div>
            <div className="flex items-center my-4">
              <img className="mr-2" src="/icon-3.png" alt="" />
              <span>+90 216 123 45 67</span>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="mb-4 font-semibold text-xl">Hot Menü</h3>
            <ul className="space-y-3">
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-xl">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              <img src="li-0.png" alt="" />
              <img src="li-1.png" alt="" />
              <img src="li-2.png" alt="" />
              <img src="li-3.png" alt="" />
              <img src="li-4.png" alt="" />
              <img src="li-5.png" alt="" />
            </div>
          </div>
        </div>
        <hr className="border-white border-opacity-20 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-white font-light mb-4 sm:mb-0">
            © 2024 Teknolojik Yemekler, Inc.
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
