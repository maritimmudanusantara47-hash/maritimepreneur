import React, { useContext } from 'react'
import DetailService from '../DetailService'
// import CR from '../../assets/CR detail.png'
import DT from '../../assets/DT detail.png'
import ET from '../../assets/EO detail.png'
import CS from '../../assets/CS detail.png'
import EAT from '../../assets/EAT detail.png'
import { LanguageContext } from '../../utils/LanguageContext';
import { Link, useLocation } from "react-router-dom";


const ServiceDetail = () => {
    const location = useLocation();
    const isService = location.pathname === "/services";
    const { t } = useContext(LanguageContext);
    return (
        <div >
            
            {/* <div id='certification' className="flex flex-col md:flex-row items-center my-16 p-3 sm:gap-7 lg:p-32 ">
                <div className="md:w-1/2 md:pl-8 item" data-aos='fade-right' data-aos-duration='1500'>
                    <Link to="/services"
                        onClick={() => {
                            if (!isService) {
                                window.scrollTo(0, 0);
                            }
                        }}>
                        <h1 className="text-xl text-primary-color  text-center font-bold mb-6 sm:text-left sm:text-3xl lg:text-4xl">{t('certificationtitle')}</h1></Link>
                    <p className="text-l text-justify text-gray-900 mb-4 lg:text-xl">
                        {t('certificationdetail')}
                    </p>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0" data-aos='fade-left' data-aos-duration='1500'>
                    <img src={CR} alt="Certification" className="w-full" />
                </div>
            </div> */}

            <DetailService
                id="edutrain"
                img={EAT}
                title={t('edutrain')}
                capt={t('edutraindetail')} />
            <div id='consul' className="flex flex-col md:flex-row items-center my-16 p-3 sm:gap-7 lg:p-32 ">
                <div className="md:w-1/2 md:pl-8 item" data-aos='fade-right' data-aos-duration='1500'>
                    <Link to="/services"
                        onClick={() => {
                            if (!isService) {
                                window.scrollTo(0, 0);
                            }
                        }}>
                        <h1 className="text-xl text-primary-color  text-center font-bold mb-6 sm:text-left sm:text-3xl lg:text-4xl">{t('consulting')}</h1></Link>
                    <p className="text-l text-justify text-gray-900 mb-4 lg:text-xl">
                        {t('consultingdetail')}
                    </p>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0" data-aos='fade-left' data-aos-duration='1500'>
                    <img src={CS} alt="Event Organizer" className="w-full" />
                </div>
            </div>
            <DetailService
                id="event"
                img={ET}
                title={t('eventorg')}
                capt={t('eventdetail')} />
            <div id='digitek' className="flex flex-col md:flex-row items-center my-16 p-3 sm:gap-7 lg:p-32">
                <div className="md:w-1/2 md:pl-8" data-aos='fade-right' data-aos-duration='1500'>
                    <Link to="/services"
                        onClick={() => {
                            if (!isService) {
                                window.scrollTo(0, 0);
                            }
                        }}>
                        <h1 className="text-xl text-primary-color  text-center font-bold mb-6 sm:text-left sm:text-3xl lg:text-4xl">{t('digitaltek')}</h1></Link>
                    <p className="text-l text-justify text-gray-900 mb-4 lg:text-xl">
                        {t('digitekdetail')}
                    </p>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0" data-aos='fade-left' data-aos-duration='1500'>
                    <img src={DT} alt="Gambar" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail
