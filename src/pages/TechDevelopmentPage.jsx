import React, { useEffect, useContext } from "react";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import BackToTopButton from "../component/BackToTop";
import { LanguageContext } from "../utils/LanguageContext";
import Service1 from "../assets/service1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const TechDevelopmentPage = () => {
	const { t } = useContext(LanguageContext);

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
			offset: 100,
		});
		window.scrollTo(0, 0);
	}, []);

	const services = [
		t("mobileapp"),
		t("website"),
		t("bigdata"),
		t("multimedia"),
		t("sosmed"),
		t("digitalmark"),
		t("ecomm"),
	];

	return (
		<div className="min-h-screen flex flex-col justify-between bg-white">
			<NavBar />

			<main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					<div className="w-full" data-aos="fade-up">
						<img
							src={Service1}
							alt={t("digitaltek")}
							className="w-full max-w-md mx-auto h-auto"
						/>
					</div>

					<div data-aos="fade-up" data-aos-delay="100">
						<h2 className="text-2xl lg:text-3xl font-semibold text-primary-color">
							{t("digitaltek")}
						</h2>
						<p className="mt-3 text-base lg:text-lg text-gray-600">
							{t("digiteksub")}
						</p>
						<hr className="my-5" />

						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
							{services.map((service, index) => (
								<li
									key={index}
									className="flex items-start text-gray-700 text-sm lg:text-base"
								>
									<svg
										className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>{service}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</main>

			<Footer />
			<BackToTopButton />
		</div>
	);
};

export default TechDevelopmentPage;
