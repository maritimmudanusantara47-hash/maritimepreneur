import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../utils/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Service1 from '../../assets/service1.png';
import Service2 from '../../assets/service2.png';
import Service3 from '../../assets/service3.png';
import Service4 from '../../assets/service4.png';

const ServiceSection = ({ image, title, subtitle, services, imagePosition = 'left' }) => {
    const imageOrder = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20">
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
                        {services.map((service, index) => {
                            const isEdutrip = service === 'Edutrip' || (typeof service === 'object' && service.name === 'Edutrip');
                            const label = typeof service === 'object' ? service.name : service;
                            const link = typeof service === 'object' ? service.link : (isEdutrip ? '/edutrip' : null);

                            return (
                                <li key={index} className="flex items-start text-gray-700 text-sm lg:text-base">
                                    <svg
                                        className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {link ? (
                                        <Link
                                            to={link}
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="text-primary-color font-semibold hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                                        >
                                            {label}
                                        </Link>
                                    ) : (
                                        <span>{label}</span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};


const OurService = () => {
    const { t } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            offset: 100,
        });
    }, []);

    const servicesData = [
        {
            title: t('edutrain'),
            subtitle: t('edutrainsub'),
            image: Service4,
            services: [t('youth'), t('incubation'), t('profcertif'), t('career'), t('crew'), t('busmin'), t('higher'), t('oceansus'), t('ecobus'), t('ecotech')],
        },
        {
            title: t('consulting'),
            subtitle: t('consultingsub'),
            image: Service3,
            services: [t('industrial'), t('business'), t('tourism')],
        },
        {
            title: t('eventorg'),
            subtitle: t('eventorgsub'),
            image: Service2,
            services: [t('meeting'), t('incentives'), 'Travel', t('conference'), t('exhibition'), 'Edutrip', 'Festival', t('competition'), t('creative'), t('virtual')],
        },
        {
            title: t('digitaltek'),
            subtitle: t('digiteksub'),
            image: Service1,
            services: [t('mobileapp'), t('website'), t('bigdata'), t('multimedia'), t('sosmed'), t('digitalmark'), t('ecomm')],
        }
    ];

    return (
        <div className="">
            <div className="text-center pt-20 pb-12 lg:pt-28 lg:pb-20">
                <h1 className="text-4xl lg:text-5xl font-semibold text-primary-color">Our Services</h1>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto px-6">
                    We offer a comprehensive suite of services to drive growth and innovation.
                </p>
            </div>
            
            <div className="w-full bg-slate-200 h-px"></div>

            {servicesData.map((service, index) => (
                <div key={index}>
                    <ServiceSection
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

export default OurService;
