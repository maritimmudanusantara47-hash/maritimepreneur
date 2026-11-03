import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
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

const ServiceSection = ({ id, image, title, subtitle, services, pageLink, imagePosition = 'left' }) => {
    const { language } = useContext(LanguageContext);
    const imageOrder = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';

    return (
        <section id={id} className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`w-full ${imageOrder}`} data-aos="fade-up">
                    <Link to={pageLink} onClick={() => window.scrollTo(0, 0)}>
                        <img
                            src={image}
                            alt={title}
                            className="w-full max-w-md mx-auto h-auto transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                    <Link to={pageLink} onClick={() => window.scrollTo(0, 0)}>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-primary-color hover:text-blue-700 transition">
                            {title}
                        </h2>
                    </Link>
                    <p className="mt-3 text-base lg:text-lg text-gray-600">{subtitle}</p>
                    <hr className="my-5" />

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                        {services.map((service, index) => {
                            const label = typeof service === 'object' ? service.name : service;
                            const link = typeof service === 'object' ? service.link : null;

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
            pageLink: '/business-academy',
            services: [
                { name: t('youth'), link: '/business-academy?course=maritime-entrepreneurship' },
                { name: t('incubation'), link: '/business-academy?course=maritime-business-leadership' },
                { name: t('profcertif'), link: '/business-academy?course=digital-marketing' },
                { name: t('career'), link: '/business-academy?course=digital-finance' },
                { name: t('crew'), link: '/business-academy?course=blue-finance' },
                { name: t('busmin'), link: '/business-academy?course=maritime-business-mindset' },
                { name: t('higher'), link: '/business-academy?course=maritime-resources-commercialization' },
                { name: t('oceansus'), link: '/business-academy?course=ocean-sustainability-management' },
                { name: t('ecobus'), link: '/business-academy?course=blue-economy-business-model' },
                { name: t('ecotech'), link: '/business-academy?course=blue-economy-technology-management' }
            ],
        },
        {
            id: 'consul',
            title: t('consulting'),
            subtitle: t('consultingsub'),
            image: Service3,
            pageLink: '/venture-builder',
            services: [
                { name: t('industrial'), link: '/venture-builder' },
                { name: t('business'), link: '/venture-builder' },
                { name: t('tourism'), link: '/venture-builder' }
            ],
        },
        {
            id: 'event',
            title: t('eventorg'),
            subtitle: t('eventorgsub'),
            image: Service2,
            pageLink: '/events',
            services: [
                { name: t('meeting'), link: '/events' },
                { name: t('incentives'), link: '/events' },
                { name: 'Travel', link: '/events' },
                { name: t('conference'), link: '/events' },
                { name: t('exhibition'), link: '/events' },
                { name: 'Edutrip', link: '/events#edutrip-section' },
                { name: 'Festival', link: '/events' },
                { name: t('competition'), link: '/events' },
                { name: t('creative'), link: '/events' },
                { name: t('virtual'), link: '/events' }
            ],
        },
        {
            id: 'digitek',
            title: t('digitaltek'),
            subtitle: t('digiteksub'),
            image: Service1,
            pageLink: '/tech-development',
            services: [
                { name: t('mobileapp'), link: '/tech-development' },
                { name: t('website'), link: '/tech-development' },
                { name: t('bigdata'), link: '/tech-development' },
                { name: t('multimedia'), link: '/tech-development' },
                { name: t('sosmed'), link: '/tech-development' },
                { name: t('digitalmark'), link: '/tech-development' },
                { name: t('ecomm'), link: '/tech-development' }
            ],
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
                        pageLink={service.pageLink}
                        imagePosition={index % 2 === 0 ? 'left' : 'right'}
                    />
                    {index < servicesData.length - 1 && <div className="w-full bg-slate-200 h-px"></div>}
                </div>
            ))}
        </div>
    );
};

export default Service;
