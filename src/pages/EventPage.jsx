import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import BackToTopButton from "../component/BackToTop";
import HeaderEvent from "../component/Eventpage/HeaderEvent";
import { LanguageContext } from "../utils/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";
import {
	FaCompass,
	FaUsers,
	FaBriefcase,
	FaPlaneDeparture,
	FaChalkboardTeacher,
	FaStore,
	FaAward,
	FaLaptop,
	FaCalendarCheck,
	FaArrowRight,
	FaShip,
} from "react-icons/fa";

const EventPage = () => {
	const { t, language } = useContext(LanguageContext);

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
			offset: 100,
		});
		window.scrollTo(0, 0);
	}, []);

	const eventTypes = [
		{
			id: "meeting",
			name: t("meeting"),
			desc:
				language === "id"
					? "Fasilitasi pertemuan bisnis & stakeholder maritim."
					: "Facilitating business and maritime stakeholder meetings.",
			icon: FaUsers,
			color: "from-blue-600 to-indigo-600",
		},
		{
			id: "incentives",
			name: t("incentives"),
			desc:
				language === "id"
					? "Program perjalanan insentif untuk tim & mitra korporasi."
					: "Incentive travel programs for teams and corporate partners.",
			icon: FaBriefcase,
			color: "from-indigo-600 to-purple-600",
		},
		{
			id: "travel",
			name: "Travel",
			desc:
				language === "id"
					? "Wisata bahari & eksplorasi kepulauan Indonesia."
					: "Marine tourism & Indonesian island exploration.",
			icon: FaPlaneDeparture,
			color: "from-cyan-600 to-blue-600",
		},
		{
			id: "conference",
			name: t("conference"),
			desc:
				language === "id"
					? "Konferensi nasional & internasional industri kelautan."
					: "National and international ocean industry conferences.",
			icon: FaChalkboardTeacher,
			color: "from-blue-700 to-blue-900",
		},
		{
			id: "exhibition",
			name: t("exhibition"),
			desc:
				language === "id"
					? "Expo produk, teknologi, dan komoditas perikanan."
					: "Expo for marine products, technology, and fisheries commodities.",
			icon: FaStore,
			color: "from-sky-600 to-blue-700",
		},
		{
			id: "edutrip",
			name: "Maritime Edutrip",
			desc:
				language === "id"
					? "Program edukasi bahari lapangan di Kepulauan Seribu."
					: "Field marine educational program in Kepulauan Seribu.",
			icon: FaShip,
			color: "from-emerald-600 to-teal-700",
			featured: true,
		},
		{
			id: "festival",
			name: "Festival",
			desc:
				language === "id"
					? "Perayaan budaya pesisir, kuliner, dan festival bahari."
					: "Celebration of coastal culture, cuisine, and ocean festivals.",
			icon: FaCompass,
			color: "from-amber-600 to-orange-600",
		},
		{
			id: "competition",
			name: t("competition"),
			desc:
				language === "id"
					? "Kompetisi inovasi, ide bisnis, dan hackathon maritim."
					: "Innovation competitions, business pitches, and maritime hackathons.",
			icon: FaAward,
			color: "from-rose-600 to-pink-600",
		},
		{
			id: "creative",
			name: t("creative"),
			desc:
				language === "id"
					? "Aktivasi kreatif, workshop seni, dan kampanye laut."
					: "Creative activation, art workshops, and ocean awareness campaigns.",
			icon: FaCalendarCheck,
			color: "from-violet-600 to-purple-700",
		},
		{
			id: "virtual",
			name: t("virtual"),
			desc:
				language === "id"
					? "Pameran interaktif dan webinar skala global secara daring."
					: "Interactive virtual expos and global scale online webinars.",
			icon: FaLaptop,
			color: "from-blue-800 to-slate-800",
		},
	];

	return (
		<div className="bg-slate-50 min-h-screen flex flex-col justify-between">
			<div>
				<NavBar />
				<HeaderEvent />

				{/* 10 Event Categories Section (as requested) */}
				<section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20">
					<div
						className="text-center max-w-3xl mx-auto mb-14"
						data-aos="fade-up"
					>
						<span className="text-primary-color font-semibold uppercase tracking-wider text-xs sm:text-sm bg-blue-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
							{language === "id"
								? "Pengorganisasian Acara Lengkap"
								: "Comprehensive Event Management"}
						</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
							{t("eventorg")}
						</h2>
						<p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
							{t("eventdetail")}
						</p>
					</div>

					{/* 10 Event Categories Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
						{eventTypes.map((item, idx) => {
							const Icon = item.icon;
							return (
								<div
									key={item.id}
									data-aos="fade-up"
									data-aos-delay={(idx % 5) * 50}
									className={`relative bg-white rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between ${
										item.featured
											? "border-emerald-400 ring-2 ring-emerald-400/20"
											: "border-gray-200"
									}`}
								>
									{item.featured && (
										<span className="absolute -top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
											Featured
										</span>
									)}
									<div>
										<div
											className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center text-xl mb-4 shadow-md`}
										>
											<Icon />
										</div>
										<h3 className="font-bold text-gray-900 text-base mb-1.5">
											{item.name}
										</h3>
										<p className="text-gray-500 text-xs leading-relaxed">
											{item.desc}
										</p>
									</div>
									{item.id === "edutrip" && (
										<Link
											to="/edutrip"
											onClick={() => window.scrollTo(0, 0)}
											className="mt-4 text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
										>
											<span>
												{language === "id"
													? "Lihat Paket"
													: "View Packages"}
											</span>
											<FaArrowRight size={10} />
										</Link>
									)}
								</div>
							);
						})}
					</div>
				</section>
			</div>

			<Footer />
			<BackToTopButton />
		</div>
	);
};

export default EventPage;
