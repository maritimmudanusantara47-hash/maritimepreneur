import React, { useState, useContext, useEffect } from "react";
import Brand from "../assets/brand.png";
import Brand2 from "../assets/brand2.png";
import Translate from "../assets/ts.png";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext, languages } from '../utils/LanguageContext';

export default function NavBar() {
	const { t } = useContext(LanguageContext);
	const location = useLocation();
	const isHome = location.pathname === "/";
	const isService = location.pathname === "/services";
	const isCatalogue = location.pathname === "/catalogue";
	const isSupport = location.pathname === "/support";
	const [navbar, setNavbar] = useState(false);
	const [changeBg, setChangeBg] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { language, setLanguage } = useContext(LanguageContext);

	// FIX: scroll listener inside useEffect with cleanup to prevent memory leak
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

	const Logo = changeBg ? (
		<img className="w-14" src={Brand} alt="Maritime Color" />
	) : (
		<img className="w-14" src={Brand2} alt="Maritime White" />
	);

	const underlineNavLink = isScrolled ? "nav-link" : "nav-link-white";

	const handleLanguageChange = (code) => {
		setLanguage(code);
		setIsOpen(false);
	};

	return (
		<nav className={changeBg ? "navbar actived shadow-lg" : "navbar"}>
			<div className="w-full">
				<div className="justify-between px-6 mx-auto lg:max-w-7xl md:items-center md:flex md:px-20">
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
						<div className="md:hidden">
							<button
								className={`p-2 ${changeBg ? "text-black" : "text-white"} btn-actived rounded-md outline-none focus:border-gray-400 focus:border`}
								onClick={() => setNavbar(!navbar)}
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
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? "block" : "hidden"
						}`}
					>
						<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-xl font-medium gap-10">
							<li
								className={`text-secondary-color hover:opacity-80 cursor-pointer ${
									isHome ? "active" : ""
								} ${underlineNavLink}`}
							>
								<Link
									to="/"
									onClick={() => {
										if (!isHome) {
											window.scrollTo(0, 0);
										}
									}}
								>
									{t("home")}
								</Link>
							</li>
							<li
								className={`text-secondary-color hover:opacity-80 cursor-pointer ${
									isCatalogue ? "active" : ""
								} ${underlineNavLink}`}
							>
								<Link
									to="/catalogue"
									onClick={() => {
										if (!isCatalogue) {
											window.scrollTo(0, 0);
										}
									}}
								>
									{t("catalogue")}
								</Link>
							</li>
							<li
								className={`text-secondary-color hover:opacity-80 cursor-pointer ${
									isService ? "active" : ""
								} ${underlineNavLink}`}
							>
								<Link
									to="/services"
									onClick={() => {
										if (!isService) {
											window.scrollTo(0, 0);
										}
									}}
								>
									{t("services")}
								</Link>
							</li>
							<li
								className={`text-secondary-color hover:opacity-80 cursor-pointer ${
									isSupport ? "active" : ""
								} ${underlineNavLink}`}
							>
								<Link
									to="/support"
									onClick={() => {
										if (!isSupport) {
											window.scrollTo(0, 0);
										}
									}}
								>
									{t("support")}
								</Link>
							</li>

							<div className="relative inline-block text-left md:hidden">
								<div
									className="font-bold language-button cursor-pointer"
									onClick={() => setIsOpen(!isOpen)}
								>
									<img
										src={Translate}
										alt="Translate"
										className="h-6 w-6 rounded-md inline-block mr-2"
									/>
									<span>
										{
											languages.find(
												(l) => l.code === language
											).desk
										}
									</span>
								</div>
								{isOpen && (
									<div className="lg:absolute right-0 mt-2 w-36 rounded-md shadow-lg text-black bg-white ring-1 ring-black ring-opacity-5">
										{languages.map((l) => (
											<div
												key={l.code}
												className="py-1 px-3 cursor-pointer hover:bg-gray-100"
												onClick={() =>
													handleLanguageChange(l.code)
												}
											>
												<img
													src={l.icon}
													alt={l.label}
													className="h-5 w-5 inline-block mr-2"
												/>
												<span>{l.label}</span>
											</div>
										))}
									</div>
								)}
							</div>
						</ul>
					</div>

					<div className="relative text-left hidden md:inline-block">
						<div
							className="font-bold language-button cursor-pointer"
							onClick={() => setIsOpen(!isOpen)}
						>
							<img
								src={Translate}
								alt="Translate"
								className="h-6 w-6 rounded-md inline-block mr-2"
							/>
							<span>
								{
									languages.find((l) => l.code === language)
										.desk
								}
							</span>
						</div>
						{isOpen && (
							<div className="lg:absolute right-0 mt-2 w-36 rounded-md shadow-lg text-black bg-white ring-1 ring-black ring-opacity-5">
								{languages.map((l) => (
									<div
										key={l.code}
										className="py-1 px-3 cursor-pointer hover:bg-gray-100"
										onClick={() =>
											handleLanguageChange(l.code)
										}
									>
										<img
											src={l.icon}
											alt={l.label}
											className="h-5 w-5 inline-block mr-2"
										/>
										<span>{l.label}</span>
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
