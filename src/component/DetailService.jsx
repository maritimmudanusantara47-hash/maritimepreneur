import React, { useEffect } from 'react'
import AOS from 'aos'
import { Link, useLocation } from "react-router-dom";

const DetailService = (props) => {
    const location = useLocation();
    const isService = location.pathname === "/services";
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500
        })
    }, [])

    return (
        <div id={props.id} className="flex flex-col md:flex-row items-center bg-linear p-3 lg:p-32">
            <div className="md:w-1/2 mb-4 md:mb-0" data-aos='fade-right' data-aos-duration='1500'>
                <img src={props.img} alt="Gambar" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <div className="md:w-1/2 md:pl-8 item" data-aos='fade-left' data-aos-duration='1500'>
                <Link to="/services"
                    onClick={() => {
                        if (!isService) {
                            window.scrollTo(0, 0);
                        }
                    }}>
                    <h1 className="text-xl text-white text-center font-bold mb-6 sm:text-left sm:text-3xl lg:text-4xl">{props.title}</h1></Link>
                <p className="text-l text-justify text-gray-300 mb-4 lg:text-xl">
                    {props.capt}
                </p>
            </div>
        </div>
    )
}

export default DetailService
