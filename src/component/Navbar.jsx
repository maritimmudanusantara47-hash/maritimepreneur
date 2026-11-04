import React, { useState, useContext, useEffect, useRef } from "react";
import Brand from "../assets/brand.png";
import Brand2 from "../assets/brand2.png";
import Translate from "../assets/ts.png";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext, languages } from "../utils/LanguageContext";
import { coursesData } from "../utils/coursesData";
import { IoLanguage } from "react-icons/io5";
import { FaChevronDown, FaGraduationCap, FaShip, FaBookOpen, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function NavBar() {
	const { t, language, setLanguage } = useContext(LanguageContext);
	const location = useLocation();

	const isHome = location.pathname === "/";
	const isBusinessAcademy = location.pathname.startsWith("/business-academy");
	const isEvent = location.pathname.startsWith("/event") || location.pathname.startsWith("/edutrip");
	const isVentureBuilder = location.pathname.startsWith("/venture-builder");
	const isTechDev = location.pathname.startsWith("/tech");
	const isCatalogue = location.pathname.startsWith("/catalogue");

	const [navbar, setNavbar] = useState(false);
	const [changeBg, setChangeBg] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);

	// Desktop Dropdowns
	const [isAcademyDropdownOpen, setIsAcademyDropdownOpen] = useState(false);
	const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
	const academyTimeoutRef = useRef(null);
	const eventTimeoutRef = useRef(null);

	// Mobile Accordions
	const [mobileAcademyOpen, setMobileAcademyOpen] = useState(false);
	const [mobileEventOpen, setMobileEventOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 15) {
				setChangeBg(true);
				setIsScrolled(true);
			} else {
				setChangeBg(false);
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		setNavbar(false);
		setIsAcademyDropdownOpen(false);
		setIsEventDropdownOpen(false);
		setIsLangOpen(false);
	}, [location.pathname]);

	const Logo = changeBg ? (
		<img className="w-14" src={Brand} alt="Maritime Color" />
	) : (
		<img className="w-14" src={Brand2} alt="Maritime White" />
	);

	const underlineNavLink = isScrolled ? "nav-link" : "nav-link-white";

	const handleLanguageChange = (code) => {
		setLanguage(code);
		setIsLangOpen(false);
	};

	// Dropdown delay handlers for desktop
	const handleAcademyEnter = () => {
		if (academyTimeoutRef.current) clearTimeout(academyTimeoutRef.current);
		setIsAcademyDropdownOpen(true);
	};
	const handleAcademyLeave = () => {
		academyTimeoutRef.current = setTimeout(() => {
			setIsAcademyDropdownOpen(false);
		}, 180);
	};

	const handleEventEnter = () => {
		if (eventTimeoutRef.current) clearTimeout(eventTimeoutRef.current);
		setIsEventDropdownOpen(true);
	};
	const handleEventLeave = () => {
		eventTimeoutRef.current = setTimeout(() => {
			setIsEventDropdownOpen(false);
		}, 180);
	};

	const currentLangObj = languages.find((l) => l.code === language) || languages[0];

	return (
		<nav className={changeBg ? "navbar actived shadow-lg" : "navbar"}>
			<div className="w-full">
				<div className="justify-between px-6 mx-auto lg:max-w-7xl md:items-center md:flex md:px-12 lg:px-16">
					<div className="flex cursor-pointer items-center justify-between py-3 md:py-5 md:block">
						<Link
							to="/"
							onClick={() => {
								if (!isHome) {
									window.scrollTo(0, 0);
								}
							}}
						>
							{Logo}
						</Link>

						{/* Mobile Hamburger Button */}
						<div className="md:hidden flex items-center gap-2">
							<button
								className={`p-2 ${changeBg ? "text-primary-color" : "text-white"} btn-actived rounded-md outline-none`}
								onClick={() => setNavbar(!navbar)}
								aria-label="Toggle Navigation"
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>

					{/* Navigation Links */}
					<div
						className={`flex-1 justify-self-center pb-4 mt-4 md:block md:pb-0 md:mt-0 ${
							navbar ? "block bg-white text-gray-800 p-6 rounded-2xl shadow-xl md:bg-transparent md:p-0 md:shadow-none" : "hidden"
						}`}
					>
						<ul className="items-center justify-center space-y-4 md:flex md:space-x-5 lg:space-x-7 md:space-y-0 text-[15px] lg:text-[16px] font-medium">
							{/* 1. Home */}
							<li
								className={`${changeBg ? "text-primary-color" : "text-white"} hover:opacity-80 cursor-pointer ${
									isHome ? "active" : ""
								} ${underlineNavLink}`}
							>
								<Link
									to="/"
									onClick={() => {
										if (!isHome) window.scrollTo(0, 0);
									}}
								>
									{t("home")}
								</Link>
							</li>

							{/* 2. Startup Maritim (Catalogue) */}
							<li
								className={`${changeBg ? "text-primary-color" : "text-white"} hover:opacity-80 cursor-pointer ${
									isCatalogue ? "active" : ""
								} ${underlineNavLink}`}
							>
								<Link
									to="/catalogue"
									onClick={() => {
										if (!isCatalogue) window.scrollTo(0, 0);
									}}
								>
									{t("catalogue")}
								</Link>
							</li>

							{/* 3. Business Academy (With Dropdown) */}
							<li
								className={`relative ${changeBg ? "text-primary-color" : "text-white"} hover:opacity-95 cursor-pointer ${
									isBusinessAcademy ? "active" : ""
								} ${underlineNavLink}`}
								onMouseEnter={handleAcademyEnter}
								onMouseLeave={handleAcademyLeave}
							>
								{/* Desktop Link + Dropdown trigger */}
								<div className="hidden md:flex items-center gap-1.5 py-2">
									<Link
										to="/business-academy"
										onClick={() => {
											if (!isBusinessAcademy) window.scrollTo(0, 0);
										}}
									>
										{t("businessacademy") || "Business Academy"}
									</Link>
									<FaChevronDown
										size={11}
										className={`transition-transform duration-200 ${
											isAcademyDropdownOpen ? "rotate-180" : ""
										}`}
									/>
								</div>

								{/* Mobile Accordion Toggle */}
								<div className="md:hidden flex items-center justify-between text-gray-900 py-1">
									<Link
										to="/business-academy"
										onClick={() => window.scrollTo(0, 0)}
										className="font-semibold text-primary-color"
									>
										{t("businessacademy") || "Business Academy"}
									</Link>
									<button
										onClick={() => setMobileAcademyOpen(!mobileAcademyOpen)}
										className="p-2 text-primary-color"
									>
										<FaChevronDown
											size={13}
											className={`transition-transform ${
												mobileAcademyOpen ? "rotate-180" : ""
											}`}
										/>
									</button>
								</div>

								{/* Desktop Dropdown Card */}
								{isAcademyDropdownOpen && (
									<div
										className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] lg:w-[520px] bg-white rounded-2xl shadow-2xl border border-blue-50/80 p-4 text-gray-800 animate-fadeIn z-50 ring-1 ring-black/5"
										onMouseEnter={handleAcademyEnter}
										onMouseLeave={handleAcademyLeave}
									>
										<div className="flex items-center justify-between pb-3 mb-2.5 border-b border-gray-100">
											<div className="flex items-center gap-2 text-primary-color font-bold text-sm">
												<FaGraduationCap size={16} />
												<span>{language === "id" ? "Pilihan Kursus Akademi" : "Academy Courses"}</span>
											</div>
											<Link
												to="/business-academy"
												onClick={() => {
													setIsAcademyDropdownOpen(false);
													window.scrollTo(0, 0);
												}}
												className="text-xs font-semibold text-blue-600 hover:text-primary-color hover:underline flex items-center gap-1 transition"
											>
												<FaBookOpen size={11} />
												<span>{t("allcourses") || "Semua Kursus"} &rarr;</span>
											</Link>
										</div>

										<div className="grid grid-cols-2 gap-2 max-h-[340px] overflow-y-auto custom-scrollbar pr-1">
											{coursesData.map((course) => {
												const title = course.title[language] || course.title.id;
												return (
													<Link
														key={course.id}
														to="/business-academy"
														onClick={() => {
															setIsAcademyDropdownOpen(false);
															window.scrollTo(0, 0);
														}}
														className="px-3 py-2.5 rounded-xl hover:bg-blue-50/80 text-gray-700 hover:text-primary-color transition-all duration-200 flex items-center gap-2.5 group"
													>
														<span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 group-hover:bg-primary-color transition-all flex-shrink-0" />
														<span className="text-xs font-medium leading-snug line-clamp-1 group-hover:translate-x-0.5 transition-transform">
															{title}
														</span>
													</Link>
												);
											})}
										</div>
									</div>
								)}

								{/* Mobile Dropdown Accordion List */}
								{mobileAcademyOpen && (
									<div className="md:hidden pl-3 pr-2 py-2 space-y-1 bg-blue-50/60 rounded-xl my-1.5 max-h-56 overflow-y-auto">
										<Link
											to="/business-academy"
											onClick={() => setNavbar(false)}
											className="block text-xs font-bold text-blue-700 py-1.5 px-2 rounded-lg hover:bg-blue-100/60 transition"
										>
											&rarr; {t("allcourses") || "Semua Kursus"}
										</Link>
										{coursesData.map((course) => {
											const title = course.title[language] || course.title.id;
											return (
												<Link
													key={course.id}
													to="/business-academy"
													onClick={() => setNavbar(false)}
													className="block text-xs text-gray-700 py-1.5 px-2 rounded-lg hover:bg-blue-100/60 hover:text-primary-color transition"
												>
													• {title}
												</Link>
											);
										})}
									</div>
								)}
							</li>

							{/* 3. Event (With Edutrip inside) */}
							<li
								className={`relative ${changeBg ? "text-primary-color" : "text-white"} hover:opacity-95 cursor-pointer ${
									isEvent ? "active" : ""
								} ${underlineNavLink}`}
								onMouseEnter={handleEventEnter}
								onMouseLeave={handleEventLeave}
							>
								{/* Desktop Link */}
								<div className="hidden md:flex items-center gap-1.5 py-2">
									<Link
										to="/events"
										onClick={() => {
											if (!isEvent) window.scrollTo(0, 0);
										}}
									>
										{t("events") || "Event"}
									</Link>
									<FaChevronDown
										size={11}
										className={`transition-transform duration-200 ${
											isEventDropdownOpen ? "rotate-180" : ""
										}`}
									/>
								</div>

								{/* Mobile Accordion */}
								<div className="md:hidden flex items-center justify-between text-gray-900 py-1">
									<Link
										to="/events"
										onClick={() => window.scrollTo(0, 0)}
										className="font-semibold text-primary-color"
									>
										{t("events") || "Event"}
									</Link>
									<button
										onClick={() => setMobileEventOpen(!mobileEventOpen)}
										className="p-2 text-primary-color"
									>
										<FaChevronDown
											size={13}
											className={`transition-transform ${
												mobileEventOpen ? "rotate-180" : ""
											}`}
										/>
									</button>
								</div>

								{/* Desktop Dropdown Card */}
								{isEventDropdownOpen && (
									<div
										className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-blue-50/80 p-2.5 space-y-1.5 text-gray-800 animate-fadeIn z-50 ring-1 ring-black/5"
										onMouseEnter={handleEventEnter}
										onMouseLeave={handleEventLeave}
									>
										<Link
											to="/events"
											onClick={() => {
												setIsEventDropdownOpen(false);
												window.scrollTo(0, 0);
											}}
											className="p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/90 hover:to-indigo-50/50 text-gray-800 hover:text-primary-color transition-all duration-200 flex items-center justify-between group"
										>
											<div className="flex items-center gap-3">
												<div className="w-9 h-9 rounded-xl bg-blue-100/70 text-primary-color flex items-center justify-center text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
													<FaCalendarAlt />
												</div>
												<div>
													<p className="text-xs font-bold leading-tight">
														{language === "id" ? "Layanan Acara Maritim" : "Maritime Events"}
													</p>
													<span className="text-[11px] text-gray-500 block mt-0.5">
														{language === "id" ? "MICE, Expo & Festival" : "MICE, Expos & Festivals"}
													</span>
												</div>
											</div>
											<FaArrowRight size={10} className="text-blue-400/80 group-hover:text-primary-color group-hover:translate-x-1 transition-all" />
										</Link>

										<Link
											to="/edutrip"
											onClick={() => {
												setIsEventDropdownOpen(false);
												window.scrollTo(0, 0);
											}}
											className="p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50/90 hover:to-teal-50/50 text-gray-800 hover:text-emerald-800 transition-all duration-200 flex items-center justify-between group"
										>
											<div className="flex items-center gap-3">
												<div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
													<FaShip />
												</div>
												<div>
													<p className="text-xs font-bold leading-tight flex items-center gap-1.5">
														<span>Maritime Edutrip</span>
														<span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
															Pulau Pari
														</span>
													</p>
													<span className="text-[11px] text-gray-500 block mt-0.5">
														{language === "id" ? "Paket Edukasi & Bahari" : "Field Marine Education"}
													</span>
												</div>
											</div>
											<FaArrowRight size={10} className="text-emerald-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
										</Link>
									</div>
								)}

								{/* Mobile Event Dropdown List */}
								{mobileEventOpen && (
									<div className="md:hidden pl-4 pr-1 py-2 space-y-1 bg-blue-50/60 rounded-xl my-1">
										<Link
											to="/events"
											onClick={() => setNavbar(false)}
											className="block text-xs font-semibold text-gray-800 py-1 hover:text-primary-color"
										>
											&rarr; {language === "id" ? "Semua Acara & Agenda" : "All Events & Agenda"}
										</Link>
										<Link
											to="/edutrip"
											onClick={() => setNavbar(false)}
											className="block text-xs font-semibold text-emerald-700 py-1 hover:underline"
										>
											<span className="inline-flex items-center gap-1.5"><FaShip className="text-emerald-600" /> Maritime Edutrip 2026</span>
										</Link>
									</div>
								)}
							</li>

							{/* 4. Venture Builder */}
							<li
								className={`${changeBg ? "text-primary-color" : "text-white"} hover:opacity-80 cursor-pointer ${
									isVentureBuilder ? "active" : ""
								} ${underlineNavLink}`}
							>
								<Link
									to="/venture-builder"
									onClick={() => {
										if (!isVentureBuilder) window.scrollTo(0, 0);
									}}
								>
									{t("venturebuilder") || "Venture Builder"}
								</Link>
							</li>

							{/* 5. Tech Development */}
							<li
								className={`${changeBg ? "text-primary-color" : "text-white"} hover:opacity-80 cursor-pointer ${
									isTechDev ? "active" : ""
								} ${underlineNavLink}`}
							>
								<Link
									to="/tech-development"
									onClick={() => {
										if (!isTechDev) window.scrollTo(0, 0);
									}}
								>
									{t("techdev") || "Tech Development"}
								</Link>
							</li>



							{/* Mobile Language Switcher */}
							<div className="pt-2 border-t border-gray-200 md:hidden">
								<div
									className="font-bold language-button cursor-pointer flex items-center justify-between text-gray-800"
									onClick={() => setIsLangOpen(!isLangOpen)}
								>
									<div className="flex items-center">
										<IoLanguage className="text-xl inline-block mr-1.5" />
										<span className="text-sm font-semibold">{currentLangObj.desk}</span>
									</div>
									<FaChevronDown size={12} />
								</div>
								{isLangOpen && (
									<div className="mt-2 space-y-1 bg-gray-50 rounded-xl p-2">
										{languages.map((l) => (
											<div
												key={l.code}
												className="py-1.5 px-3 text-xs cursor-pointer hover:bg-gray-200 rounded-lg flex items-center"
												onClick={() => handleLanguageChange(l.code)}
											>
												{l.FlagIcon && <l.FlagIcon />}
												<span className="font-medium text-gray-800">{l.label}</span>
											</div>
										))}
									</div>
								)}
							</div>
						</ul>
					</div>

					{/* Desktop Language Switcher */}
					<div className="relative text-left hidden md:inline-block">
						<div
							className="font-bold language-button cursor-pointer flex items-center text-sm"
							onClick={() => setIsLangOpen(!isLangOpen)}
						>
							<IoLanguage className="text-xl inline-block mr-1.5" />
							<span className={changeBg ? "text-primary-color" : "text-white"}>
								{currentLangObj.desk}
							</span>
							<FaChevronDown
								size={10}
								className={`ml-1.5 transition-transform ${
									isLangOpen ? "rotate-180" : ""
								} ${changeBg ? "text-primary-color" : "text-white"}`}
							/>
						</div>
						{isLangOpen && (
							<div className="absolute right-0 mt-2 w-36 rounded-2xl shadow-xl text-black bg-white ring-1 ring-black ring-opacity-5 p-1 z-50">
								{languages.map((l) => (
									<div
										key={l.code}
										className="py-2 px-3 text-xs cursor-pointer hover:bg-blue-50 rounded-xl flex items-center transition"
										onClick={() => handleLanguageChange(l.code)}
									>
										{l.FlagIcon && <l.FlagIcon />}
										<span className="font-semibold text-gray-800">{l.label}</span>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
