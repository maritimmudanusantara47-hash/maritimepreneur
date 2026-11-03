import React, { useContext } from "react";
import Log1 from "../../assets/log1.png";
import Log2 from "../../assets/log2.png";
import Log3 from "../../assets/log3.png";
import Log4 from "../../assets/log4.png";
import Log5 from "../../assets/log5.png";
import Log6 from "../../assets/log6.png";
import { LanguageContext } from '../../utils/LanguageContext';

const Client = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div
      className="flex flex-col items-center justify-center py-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="text-2xl font-bold text-primary-color mb-8">
        {t("ourclient")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-16 lg:px-24 mb-6 items-center justify-center">
        <img src={Log1} alt="IBEC STEI" className="h-20 lg:h-28 w-auto object-contain mx-auto" />
        <img
          src={Log2}
          alt="Museum Kebaharian Jakarta"
          className="h-32 lg:h-48 w-auto object-contain mx-auto"
        />
        <img
          src={Log4}
          alt="Maritim Muda Nusantara"
          className="h-20 lg:h-28 w-auto object-contain mx-auto"
        />
        <img src={Log3} alt="Bappenas" className="h-20 lg:h-28 w-auto object-contain mx-auto" />
        <img src={Log5} alt="Ikan Segar" className="h-20 lg:h-28 w-auto object-contain mx-auto" />
        <img src={Log6} alt="KKP" className="h-20 lg:h-28 w-auto object-contain mx-auto" />
      </div>
    </div>
  );
};

export default Client;
