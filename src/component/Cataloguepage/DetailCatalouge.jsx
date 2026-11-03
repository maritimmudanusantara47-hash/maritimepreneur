import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from '../../utils/LanguageContext';
import getInitialData from "../../utils/CatalougeData";
import sector from "../../assets/detail-sector.svg";
import location from "../../assets/detail-location.svg";
import AOS from "aos";

const DetailCatalouge = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  const { id } = useParams();
  const initialData = getInitialData();
  const selectedItem = initialData.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="w-full px-6 mx-auto lg:max-w-7xl md:px-20 py-16 space-y-8" data-aos="fade-up">
      {/* Top Card */}
      <div className="flex flex-col md:flex-row border rounded-lg p-6 gap-6 items-center md:items-start shadow-sm">
        {/* Left: Logo & Info */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 md:border-r border-b md:border-b-0 md:pr-6 pb-6 md:pb-0">
          <img src={selectedItem.logo} alt={selectedItem.name} className="w-24 h-24 object-contain mb-4" />
          <h2 className="text-3xl font-bold text-primary-color text-center md:text-left mb-1">
            {selectedItem.name}
          </h2>
          <p className="text-sm text-gray-500 mb-4 text-center md:text-left">
            {selectedItem.owner}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <img src={sector} alt="sector" className="w-5 h-5" />
            {selectedItem.sector}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <img src={location} alt="location" className="w-5 h-5" />
            {selectedItem.location}
          </div>
          <a
            href={selectedItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 mt-auto w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-primary-color rounded-md hover:bg-secondary-color transform hover:scale-105 transition-all duration-300"
          >
            {t("goto")} {selectedItem.name}
          </a>
        </div>

        {/* Right: Description */}
        <div className="w-full md:w-2/3">
          <h3 className="text-lg font-semibold text-sky-800 mb-4">{t("description")}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{t(selectedItem.description)}</p>
        </div>
      </div>

      {/* Address Section */}
      <div className="border rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-sky-800 mb-4">{t("primaryOffice")}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{selectedItem.address}</p>
      </div>
    </div>
  );
};

export default DetailCatalouge;
