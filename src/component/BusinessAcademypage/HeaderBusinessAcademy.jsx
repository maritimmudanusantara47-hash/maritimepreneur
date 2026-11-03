import React, { useEffect, useContext } from "react";
import EAT from "../../assets/EAT detail.png";
import { LanguageContext } from "../../utils/LanguageContext";
import AOS from "aos";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const HeaderBusinessAcademy = ({ onExploreClick }) => {
	const { t, language } = useContext(LanguageContext);

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
					<p className="text-white font-bold text-3xl lg:text-5xl mb-6 text-team event-mt">
						{t("edutrain")}
					</p>
					<p className="text-white text-l sm:text-lg mb-8">
						{t("edutraindetail")}
					</p>
					<div className="flex flex-wrap gap-4 items-center">
						<button
							onClick={onExploreClick}
							className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-primary-color font-bold rounded-xl shadow-lg transition-all"
						>
							{language === "id" ? "Lihat 10 Kursus" : "Explore 10 Courses"}
						</button>
						<a
							href="#methodology"
							className="px-6 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
						>
							{language === "id" ? "Keunggulan" : "Benefits"}
						</a>
					</div>
				</div>
				<div className="md:w-1/3 flex justify-center" data-aos="fade-left">
					<img
						className="rounded-lg lg:max-w-md max-w-xs"
						src={EAT}
						alt="Maritimepreneur Business Academy"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeaderBusinessAcademy;
