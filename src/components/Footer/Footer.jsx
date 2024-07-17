import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#292929] w-full h-fit">
      <div className="w-2/3 mx-auto flex justify-between font-light text-white text-sm">
        <div className="mt-8">
          <img className="mb-4" src="/logo-footer.svg" />
          <div className="flex my-4">
            <img className="mr-2" src="/icon-1.png" />
            <span>341 Londonderry Road, İstanbul Türkiye</span>
          </div>
          <div className="flex my-4">
            <img className="mr-2" src="/icon-2.png" />
            <span>aciktim@teknolojikyemekler.com</span>
          </div>
          <div className="flex my-4">
            <img className="mr-2" src="/icon-3.png" />
            <span>+90 216 123 45 67</span>
          </div>
        </div>
        <div className="mt-24">
          <div className="mb-4 font-semibold text-xl">Hot Menü</div>
          <div className="mb-3">Terminal Pizza</div>
          <div className="mb-3">5 Kişilik Hackathlon Pizza</div>
          <div className="mb-3">useEffect Tavuklu Pizza</div>
          <div className="mb-3">Beyaz Console Frosty</div>
          <div className="mb-3">Testler Geçti Mutlu Burger</div>
          <div className="mb-3">Position Absolute Acı Burger</div>
        </div>
        <div className="mt-24">
          <div className="mb-4 font-semibold text-xl">Instagram</div>
          <div className="flex flex-col">
            <div className="flex flex-row my-2">
              <img className="mr-2" src="li-0.png" alt="" />
              <img className="mr-2" src="li-1.png" alt="" />
              <img src="li-2.png" alt="" />
            </div>
            <div className="flex flex-row my-2">
              <img className="mr-2" src="li-3.png" alt="" />
              <img className="mr-2" src="li-4.png" alt="" />
              <img src="li-5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full text-white text-sm my-4" />

      <div className="flex w-full">
        <div className="w-2/3 mx-auto flex justify-between">
          <div className="text-white font-light mb-4">
            © 2024 Teknolojik Yemekler, Inc.
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
