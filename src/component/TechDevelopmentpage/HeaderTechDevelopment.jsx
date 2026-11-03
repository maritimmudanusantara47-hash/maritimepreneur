import React, { useEffect, useContext } from "react";
import DT from "../../assets/DT detail.png";
import { LanguageContext } from "../../utils/LanguageContext";
import AOS from "aos";
import { FaLaptopCode, FaServer, FaCode, FaMicrochip } from "react-icons/fa";

const HeaderTechDevelopment = ({ onExploreClick }) => {
	const { t, language } = useContext(LanguageContext);

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 1200,
		});
	}, []);

	return (
		<div className="bg-cover bg-center min-h-[85vh] flex justify-center items-center team-hero bg-service pt-24 pb-16">
			<div className="container mx-auto px-6 sm:px-12 lg:px-20 py-8">
				<div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
					<div className="w-full lg:w-3/5 text-left" data-aos="fade-right">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-sm font-semibold mb-6">
							<FaLaptopCode className="text-lg text-yellow-400" />
							<span>{language === "id" ? "Solusi Rekayasa Perangkat Lunak & Teknologi Kelautan" : "Software Engineering & Marine Technology Solutions"}</span>
						</div>

						<h1 className="text-white font-extrabold text-3xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
							{t("digitaltek")}
						</h1>

						<p className="text-blue-100 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl">
							{t("digitekdetail")}
						</p>

						<div className="flex flex-wrap gap-4 items-center">
							<button
								onClick={onExploreClick}
								className="px-7 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-primary-color font-bold rounded-xl shadow-lg hover:shadow-yellow-400/30 transition-all transform hover:-translate-y-0.5"
							>
								{language === "id" ? "Jelajahi Layanan Teknologi" : "Explore Tech Services"}
							</button>
							<a
								href="#subsea-rov"
								className="px-7 py-3.5 border-2 border-white/80 hover:border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
							>
								{language === "id" ? "Teknologi Bawah Laut & ROV" : "Subsea & ROV Tech"}
							</a>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/20">
							<div className="text-white">
								<div className="flex items-center gap-2 text-yellow-400 font-bold text-2xl">
									<FaCode />
									<span>Custom</span>
								</div>
								<p className="text-xs sm:text-sm text-blue-200 mt-1">
									{language === "id" ? "Software & Web Apps" : "Software & Web Apps"}
								</p>
							</div>
							<div className="text-white">
								<div className="flex items-center gap-2 text-yellow-400 font-bold text-2xl">
									<FaServer />
									<span>Big Data</span>
								</div>
								<p className="text-xs sm:text-sm text-blue-200 mt-1">
									{language === "id" ? "Sistem Analitik Kelautan" : "Marine Data Analytics"}
								</p>
							</div>
							<div className="text-white">
								<div className="flex items-center gap-2 text-yellow-400 font-bold text-2xl">
									<FaMicrochip />
									<span>IoT Laut</span>
								</div>
								<p className="text-xs sm:text-sm text-blue-200 mt-1">
									{language === "id" ? "Sensor & Telemetri" : "Sensors & Telemetry"}
								</p>
							</div>
							<div className="text-white">
								<div className="flex items-center gap-2 text-yellow-400 font-bold text-2xl">
									<FaLaptopCode />
									<span>Subsea</span>
								</div>
								<p className="text-xs sm:text-sm text-blue-200 mt-1">
									{language === "id" ? "Operasi ROV & Trenching" : "ROV & Trenching Operations"}
								</p>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-2/5 flex justify-center" data-aos="fade-left">
						<div className="relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
							<img
								className="relative rounded-2xl shadow-2xl max-w-xs sm:max-w-md w-full border border-white/20 object-contain bg-white/5 backdrop-blur-sm p-4"
								src={DT}
								alt="Maritimepreneur Tech"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTechDevelopment;
