import React, { useContext } from 'react'
import LogoBecdex from '../../assets/becdex.png'
import { LanguageContext } from '../../utils/LanguageContext';

const Becdex = () => {
    const { t } = useContext(LanguageContext);
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mx-20 md:gap-16" data-aos='fade-up'>
            <div className="text-center text-primary-color md:text-left">
                <h1 className="font-bold text-2xl sm:text-4xl mb-4">
                    {t('becdex1')}
                </h1>
                <a
                    href='https://becdex.com'
                    target='_blank'
                    className="bg-primary-color text-white rounded-lg px-8 lg:px-4 py-2 lg:py-1 mb-2 font-bold text-center inline-block hover:bg-secondary-color transition-colors duration-200"
                    rel="noreferrer"
                >
                    {t('clickBecdex')}
                </a>

            </div>
            <div className="flex justify-center">
                <img
                    src={LogoBecdex}
                    alt="Logo Becdex"
                    className="w-64"
                />
            </div>
        </div>
    )
}

export default Becdex