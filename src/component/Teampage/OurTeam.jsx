import React, {useContext} from 'react'
import CardOurTeam from './CardOurTeam'
import { LanguageContext } from '../../utils/LanguageContext';

const OurTeam = () => {

  const { t } = useContext(LanguageContext);

  return (
    <div className='container mx-auto px-8 md:px-20 text-primary-color'>
      <h1 className='text-center mx-auto font-semibold text-4xl my-16' data-aos="fade-up" data-aos-duration='1500' >{t('cardtitle')}</h1>
      <div className="flex flex-wrap justify-center items-center">
        <CardOurTeam
          title={t('cardtitle1')}
          description={t('desccardtitle1')}
        />
        <div className="max-w-sm mx-auto shadow-md my-10 lg:my-0 card-our-teams text-center overflow-hidden md:max-w-2xl" data-aos="fade-up" data-aos-duration='1500'>
          <div className="py-10 md:py-10 md:px-3">
            <div className="leading-8 text-2xl px-12 md:px-7 text-black-color font-bold">
            {t('cardtitle2')}
            </div>
            <p className="mt-5 text-sm leading-7 px-8 md:px-4 text-gray-700">{t('desccardtitle2')}</p>
          </div>
        </div>
        <CardOurTeam
          title={t('cardtitle3')}
          description={t('desccardtitle3')}
        />
      </div>
    </div>
  )
}

export default OurTeam
