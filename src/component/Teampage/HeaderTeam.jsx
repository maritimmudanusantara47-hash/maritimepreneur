import React, { useEffect, useContext } from "react";
import Team from "../../assets/team.png";
import AOS from "aos";
import { LanguageContext } from '../../utils/LanguageContext';

const HeaderTeam = () => {
	const { t } = useContext(LanguageContext);
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 1500,
		});
	}, []);

	return (
		<div className="bg-cover bg-center min-h-screen flex justify-center items-center bg-service">
			<div className="container xl:space-x-28 2xl:px-52 -mt-10 mb-20 mx-auto px-6 sm:px-20 py-8 items-center flex flex-col md:flex-row">
				<div
					className="md:w-1/2 md:pr-8"
					data-aos="fade-right"
					data-aos-duration="1500"
				>
					<p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-team team-mt lg:w-11/12">
						{t("team")}
					</p>
					<p className="text-white text-m sm:text-lg mb-8">
						{t("team2")}
					</p>
				</div>
				<div
					className="md:w-1/3"
					data-aos="fade-left"
					data-aos-duration="1500"
				>
					<img className="rounded-lg lg:max-w-md max-w-xs" src={Team} alt="gambar" />
				</div>
			</div>
		</div>
	);
};

export default HeaderTeam;
