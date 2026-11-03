import React, { useEffect, useContext } from "react";
import BgHome from "../../assets/bg-perahu.png";
import { LanguageContext } from '../../utils/LanguageContext';
import AOS from "aos";

const HeaderService = () => {
	const { t } = useContext(LanguageContext);
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 1500,
		});
	}, []);

	return (
		<div className="bg-cover bg-center flex justify-center items-center min-h-screen bg-service">
			<div className="container xl:space-x-28 2xl:px-52 -mt-10 mb-20 mx-auto px-6 sm:px-20 py-8 items-center flex flex-col space-y-10 md:space-y-0 lg:space-x-20 md:flex-row">
				<div className="md:w-1/2 md:pr-8" data-aos="fade-right">
					<p className="text-white font-bold text-3xl md:text-3xl lg:text-5xl mb-8 tracking-wider text-center lg:text-left home-mt">
						MARITIMEPRENEUR
					</p>
					<p className="text-white text-center text-xl sm:text-left md:text-2xl lg:text-3xl lg:w-96">
						{t("headersub")}
					</p>
				</div>
				<div className="md:w-1/2" data-aos="fade-left">
					<img
						className="bg-header max-w-2xl scale-110 xl:scale-125"
						src={BgHome}
						alt="gambar perahu"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeaderService;
