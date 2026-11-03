import React, { useContext } from 'react'
// import CR from '../../assets/icon-cr.png'
import DT from '../../assets/icon-dt.png'
import CS from '../../assets/icon-cs.png'
import EO from '../../assets/icon-eo.png'
import ET from '../../assets/icon-et.png'
import { LanguageContext } from '../../utils/LanguageContext';


const Service = () => {

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
        });
    };

    const { t } = useContext(LanguageContext);
    return (
        <div className='container mx-auto flex flex-col justify-between mb-16 pb-10' data-aos='fade-up' data-aos-duration='1500'>
            <h1 className='text-primary-color text-center font-bold text-2xl sm:text-4xl my-11'>{t('services')}</h1>

            <div className='mx-auto grid gap-7 justify-center sm:grid-cols-2 lg:grid-cols-4'> {/* Reduced to 4 columns */}
                {[
                    { id: 'edutrain', image: ET, title: 'edutrain', bgColor: 'bg-white', textColor: 'text-primary-color' },
                    { id: 'consul', image: CS, title: 'consulting', bgColor: 'bg-primary-color', textColor: 'text-white' },
                    { id: 'event', image: EO, title: 'eventorg', bgColor: 'bg-white', textColor: 'text-primary-color' },
                    { id: 'digitek', image: DT, title: 'digitaltek', bgColor: 'bg-primary-color', textColor: 'text-white' },
                ].map(service => (
                    <div
                        key={service.id}
                        onClick={() => handleScrollTo(service.id)}
                        className={`group cursor-pointer ${service.bgColor} w-full md:w-60 h-56 p-6 text-center rounded-2xl border border-gray-200 shadow-md transform transition-transform duration-300 hover:-translate-y-2`}
                    >
                        <img className='mx-auto w-20 h-20 lg:w-auto lg:h-auto' src={service.image} alt={service.title} />
                        <h1 className={`text-xl font-semibold mt-5 ${service.textColor}`}>{t(service.title)}</h1>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Service
