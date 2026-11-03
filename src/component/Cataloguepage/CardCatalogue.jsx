import React, { useContext } from 'react';
import { LanguageContext } from '../../utils/LanguageContext';
import sector from '../../assets/detail-sector.svg';
import location from '../../assets/detail-location.svg';
import getInitialData from '../../utils/CatalougeData';
// FIX: Replaced window.location.href (full page reload) with React Router Link
import { Link } from 'react-router-dom';

const MoreIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="3.5"
		stroke="currentColor"
		className="w-4 h-4"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m8.25 4.5 7.5 7.5-7.5 7.5"
		/>
	</svg>
);

const CardCatalogue = () => {
  const { t } = useContext(LanguageContext);
  const initialData = getInitialData();

  return (
    <div
      className="container mx-auto flex flex-col justify-between mb-16 pb-10"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h1 className="text-primary-color text-center font-bold text-2xl sm:text-4xl my-11">
        {t('startuplist')}
      </h1>

      <div className="mx-auto grid gap-7 justify-center sm:grid-cols-2 lg:grid-cols-4">
        {initialData.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded w-full md:w-64 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-16 h-16"
                src={item.logo}
                alt={item.name}
              />
              <div>
                <h2 className="text-xl font-medium mb-3 text-sky-600 line-clamp-1">
                  {item.name}
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <img className="w-5" src={sector} alt="" />
                  <h3 className="text-sm font-light">
                    {item.sector}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <img className="w-5" src={location} alt="" />
                  <h3 className="text-sm font-light line-clamp-2">
                    {item.location}
                  </h3>
                </div>
                {/* FIX: use Link instead of window.location.href for SPA navigation */}
                <Link
                  to={`/catalogue/detail/${item.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button
                    className="h-10 w-full flex items-center justify-end gap-2 pr-9 font-bold text-white bg-primary-color rounded-md text-sm hover:bg-secondary-color transition-all duration-300 transform hover:scale-105"
                  >
                    <span>{t('buttonText')}</span>
                    <MoreIcon />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCatalogue;

