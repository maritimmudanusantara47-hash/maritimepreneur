import React, { useEffect, useContext } from 'react'
import Sup from '../../assets/header-sup.png'
import AOS from 'aos'
import { LanguageContext } from '../../utils/LanguageContext';
import { Link, useLocation } from "react-router-dom";


const HeaderSupport = () => {
    const location = useLocation();
    // const isHome = location.pathname === "/";
    const isSupport = location.pathname === "/support";
    const { t } = useContext(LanguageContext);
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500
        })
    }, [])

    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
            <div className="container xl:space-x-28 2xl:px-52 -mt-10 mb-20 mx-auto px-6 sm:px-20 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8" data-aos="fade-right">
                    <p className="text-white text-3xl font-bold sm:text-5xl mb-4 support-mt">{t('moreinfo')}</p>
                    <p className="text-white text-m sm:text-lg mb-8">
                        {t('moreinfo2')}
                    </p>
                    <Link
                        to="/contact"
                        onClick={() => {
                            if (!isSupport) {
                            window.scrollTo(10, 0);
                            }
                        }}
                        className="px-6 py-3 text-sm font-semibold text-primary-color bg-white rounded-md hover:bg-primary-color hover:text-white transform hover:scale-105 transition-all duration-300 hover:border hover:border-white"
                        >
                        Contact Us!
                    </Link>
                </div>
                <div className="md:w-1/3" data-aos="fade-left">
                    <img className="rounded-lg lg:max-w-md max-w-xs" src={Sup} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderSupport
