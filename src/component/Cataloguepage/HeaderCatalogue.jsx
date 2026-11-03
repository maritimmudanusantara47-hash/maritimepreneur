import React, { useEffect, useContext } from "react";
import Cat from "../../assets/header-cat.png";
import AOS from "aos";
import { LanguageContext } from '../../utils/LanguageContext';

const HeaderCatalogue = () => {
	const { t } = useContext(LanguageContext);
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 1500,
		});
	}, []);

	return (
		<div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
			<div className="container xl:space-x-28 2xl:px-52 -mt-10 mb-20 mx-auto px-6 sm:px-20 py-8 items-center flex flex-col md:flex-row">
				<div className="md:w-1/2 md:pr-8" data-aos="fade-right">
					<p className="text-white text-3xl font-bold sm:text-5xl mb-4 support-mt max-w-lg">
						{t("catalogueheader1")}
					</p>
					<p className="text-white text-m sm:text-lg mb-8">
						{t("catalogueheader2")}
					</p>
					<a
						href="https://becdex.com/home/catalog"
						target="_blank"
						rel="noreferrer"
						className="px-6 py-3 text-sm font-semibold text-primary-color bg-white rounded-md hover:bg-primary-color hover:text-white transform hover:scale-105 transition-all duration-300 hover:border hover:border-white"
						>
						{t("visitcatalogue")}
					</a>
				</div>
				<div className="md:w-1/3" data-aos="fade-left">
					<img
						className="rounded-lg lg:max-w-md max-w-xs"
						src={Cat}
						alt="gambar"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeaderCatalogue;
