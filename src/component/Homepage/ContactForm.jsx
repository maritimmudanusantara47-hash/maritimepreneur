import React, { useEffect, useContext, useRef } from 'react';
import Footer from '../../component/Footer'
import NavBar from '../../component/Navbar'
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';
import { LanguageContext } from '../../utils/LanguageContext';

const ContactForm = () => {
    const { t } = useContext(LanguageContext);
    const [state, handleSubmit] = useForm('mrgvldog');
    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                formRef.current.reset();
            });
        }
    }, [state.succeeded]);

    return (
        <div id="contact" data-aos='fade-up' data-aos-duration='1500'>
            <NavBar />
            <h1 className='text-center font-bold text-2xl mb-8 mt-20 text-primary-color '>{t('contacttitle')}</h1>
            <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mb-36 mx-5 sm:mx-auto border p-6 rounded-md" >
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        {t('email')}
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                        {t('message')}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-48 bg-secondary-color hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
                    >
                        {t('submit')}
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default ContactForm;
