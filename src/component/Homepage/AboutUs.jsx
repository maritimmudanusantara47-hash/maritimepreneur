import React from 'react';
import { LanguageContext } from '../../utils/LanguageContext';
import { useContext } from 'react';

const AboutUs = () => {
    const { t } = useContext(LanguageContext);
    return (
        <div className='text-center text-primary-color p-4 mx-auto my-14' data-aos='fade-up'>
            <h1 className='font-bold text-2xl  sm:text-4xl my-11'>{t('aboutus')}</h1>
            <p className='font-normal sm:px-12 2xl:px-52 text-xl sm:text-2xl text-center'>{t('abouttitle')} </p>
        </div>
    )
}

export default AboutUs
