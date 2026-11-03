import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../../utils/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Detail Service Images
import Service1 from '../../assets/service1.png';
import Service2 from '../../assets/service2.png';
import Service3 from '../../assets/service3.png';
import Service4 from '../../assets/service4.png';

// Card Icons
import DT from '../../assets/icon-dt.png';
import CS from '../../assets/icon-cs.png';
import EO from '../../assets/icon-eo.png';
import ET from '../../assets/icon-et.png';

const ServiceSection = ({ id, image, title, subtitle, services, imagePosition = 'left' }) => {
    const imageOrder = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';

    return (
        <section id={id} className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`w-full ${imageOrder}`} data-aos="fade-up">
                    <img
                        src={image}
                        alt={title}
                        className="w-full max-w-md mx-auto h-auto"
                    />
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-primary-color">{title}</h2>
                    <p className="mt-3 text-base lg:text-lg text-gray-600">{subtitle}</p>
                    <hr className="my-5" />

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-start text-gray-700 text-sm lg:text-base">
                                <svg
                                    className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const Service = () => {
    const { t } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            offset: 100,
        });
    }, []);

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const serviceCards = [
        { id: 'edutrain', image: ET, title: 'edutrain', bgColor: 'bg-white', textColor: 'text-primary-color' },
        { id: 'consul', image: CS, title: 'consulting', bgColor: 'bg-primary-color', textColor: 'text-white' },
        { id: 'event', image: EO, title: 'eventorg', bgColor: 'bg-white', textColor: 'text-primary-color' },
        { id: 'digitek', image: DT, title: 'digitaltek', bgColor: 'bg-primary-color', textColor: 'text-white' },
    ];

    const servicesData = [
        {
            id: 'edutrain',
            title: t('edutrain'),
            subtitle: t('edutrainsub'),
            image: Service4,
            services: [t('youth'), t('incubation'), t('profcertif'), t('career'), t('crew'), t('busmin'), t('higher'), t('oceansus'), t('ecobus'), t('ecotech')],
        },
        {
            id: 'consul',
            title: t('consulting'),
            subtitle: t('consultingsub'),
            image: Service3,
            services: [t('industrial'), t('business'), t('tourism')],
        },
        {
            id: 'event',
            title: t('eventorg'),
            subtitle: t('eventorgsub'),
            image: Service2,
            services: [t('meeting'), t('incentives'), 'Travel', t('conference'), t('exhibition'), 'Edutrip', 'Festival', t('competition'), t('creative'), t('virtual')],
        },
        {
            id: 'digitek',
            title: t('digitaltek'),
            subtitle: t('digiteksub'),
            image: Service1,
            services: [t('mobileapp'), t('website'), t('bigdata'), t('multimedia'), t('sosmed'), t('digitalmark'), t('ecomm')],
        }
    ];

    return (
        <div id="services" className="pt-6">
            {/* Header & 4 Cards */}
            <div className="container mx-auto flex flex-col justify-between mb-16 pb-10" data-aos="fade-up" data-aos-duration="1500">
                <h1 className="text-primary-color text-center font-bold text-2xl sm:text-4xl my-11">
                    {t('services')}
                </h1>

                <div className="mx-auto grid gap-7 justify-center sm:grid-cols-2 lg:grid-cols-4 px-4">
                    {serviceCards.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => handleScrollTo(service.id)}
                            className={`group cursor-pointer ${service.bgColor} w-full md:w-60 h-56 p-6 text-center rounded-2xl border border-gray-200 shadow-md transform transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center justify-center`}
                        >
                            <img className="mx-auto w-20 h-20 object-contain" src={service.image} alt={t(service.title)} />
                            <h2 className={`text-xl font-semibold mt-5 ${service.textColor}`}>{t(service.title)}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full bg-slate-200 h-px"></div>

            {/* Service Details */}
            {servicesData.map((service, index) => (
                <div key={service.id}>
                    <ServiceSection
                        id={service.id}
                        title={service.title}
                        subtitle={service.subtitle}
                        image={service.image}
                        services={service.services}
                        imagePosition={index % 2 === 0 ? 'left' : 'right'}
                    />
                    {index < servicesData.length - 1 && <div className="w-full bg-slate-200 h-px"></div>}
                </div>
            ))}
        </div>
    );
};

export default Service;
