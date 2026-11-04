import React, { useState, useContext, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { LanguageContext } from "../../utils/LanguageContext";

import ImgSdSmp from "../../assets/edutrip/edutrip-sd-smp.jpg";
import ImgSmaMhs from "../../assets/edutrip/edutrip-sma-mahasiswa.jpg";
import ImgUmum from "../../assets/edutrip/edutrip-umum.jpg";
import ImgBelitung from "../../assets/edutrip/edutrip-pulau-belitung-sma-mahasiswa-umum.png";
import ImgLembata from "../../assets/edutrip/edutrip-pulau-lembata-sma-mahasiswa-umum.png";
import ImgMaratua from "../../assets/edutrip/edutrip-pulau-maratua-sma-mahasiswa-umum.png";
import ImgBandaNeira from "../../assets/edutrip/edutrip-banda-neira-sma-mahasiswa-umum.png";

const destinations = [
	{
		id: "pulau-pari",
		name: "Pulau Pari",
		nameEn: "Pari Island",
		province: "Kepulauan Seribu, DKI Jakarta",
		provinceEn: "Thousand Islands, Jakarta",
		description:
			"Eksplorasi ekosistem pesisir, penelitian oseanografi, pelestarian mangrove, serta snorkeling di perairan jernih Pulau Pari.",
		descriptionEn:
			"Explore coastal ecosystems, oceanography research, mangrove conservation, and snorkeling in Pari Island's pristine waters.",
		packages: [
			{
				id: "pari-sd-smp",
				title: "Maritime Edutrip 2026",
				destination: "Pulau Pari, Kepulauan Seribu",
				target: "Untuk Pelajar SD & SMP",
				targetEn: "For Elementary & Junior High Students",
				packageOptionName: "Edutrip Pulau Pari — Pelajar SD & SMP (Rp 1.450.000)",
				price: "Rp1.450.000",
				unit: "/pax",
				minPax: "Minimal pax 30 Orang",
				minPaxEn: "Min. 30 pax",
				duration: "3 Hari 2 Malam",
				durationEn: "3 Days 2 Nights",
				image: ImgSdSmp,
				highlights: [
					"Edukasi Maritim & Blue Economy",
					"Monitoring & Penanaman Mangrove",
					"Aksi Bersih Pantai",
					"Snorkeling & Eksplorasi Pulau dengan Sepeda",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Malam Api Unggun di Pantai",
				],
				highlightsEn: [
					"Maritime & Blue Economy Education",
					"Mangrove Monitoring & Planting",
					"Beach Clean-Up Activity",
					"Snorkeling & Island Exploration by Bicycle",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Beach Bonfire Night",
				],
				benefits: [
					"Sertifikat Kegiatan",
					"Homestay Nyaman selama Kegiatan",
					"Transportasi PP (Sunda Kelapa - Pulau Pari)",
					"Konsumsi dan Kaos",
					"Dokumentasi Kegiatan & Relasi",
				],
				benefitsEn: [
					"Activity Certificate",
					"Comfortable Homestay throughout Trip",
					"Round-trip Transportation (Sunda Kelapa - Pulau Pari)",
					"Meals & Exclusive T-Shirt",
					"Event Documentation & Networking",
				],
			},
			{
				id: "pari-sma-mhs",
				title: "Maritime Edutrip 2026",
				destination: "Pulau Pari, Kepulauan Seribu",
				target: "Untuk Pelajar SMA & Mahasiswa",
				targetEn: "For High School & University Students",
				packageOptionName: "Edutrip Pulau Pari — Pelajar SMA & Mahasiswa (Rp 1.500.000)",
				price: "Rp1.500.000",
				unit: "/pax",
				minPax: "Minimal pax 30 Orang",
				minPaxEn: "Min. 30 pax",
				duration: "3 Hari 2 Malam",
				durationEn: "3 Days 2 Nights",
				image: ImgSmaMhs,
				highlights: [
					"Edukasi Maritim & Blue Economy",
					"Monitoring & Penanaman Mangrove",
					"Aksi Bersih Pantai",
					"Snorkeling & Eksplorasi Pulau dengan Sepeda",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Malam Api Unggun di Pantai",
				],
				highlightsEn: [
					"Maritime & Blue Economy Education",
					"Mangrove Monitoring & Planting",
					"Beach Clean-Up Activity",
					"Snorkeling & Island Exploration by Bicycle",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Beach Bonfire Night",
				],
				benefits: [
					"Sertifikat Kegiatan",
					"Homestay Nyaman selama Kegiatan",
					"Transportasi PP (Sunda Kelapa - Pulau Pari)",
					"Konsumsi dan Kaos",
					"Dokumentasi Kegiatan & Relasi",
				],
				benefitsEn: [
					"Activity Certificate",
					"Comfortable Homestay throughout Trip",
					"Round-trip Transportation (Sunda Kelapa - Pulau Pari)",
					"Meals & Exclusive T-Shirt",
					"Event Documentation & Networking",
				],
			},
			{
				id: "pari-umum",
				title: "Maritime Edutrip 2026",
				destination: "Pulau Pari, Kepulauan Seribu",
				target: "Untuk Masyarakat Umum",
				targetEn: "For General Public",
				packageOptionName: "Edutrip Pulau Pari — Masyarakat Umum (Rp 1.600.000)",
				price: "Rp1.600.000",
				unit: "/pax",
				minPax: "Terbuka untuk Umum",
				minPaxEn: "Open for Everyone",
				duration: "3 Hari 2 Malam",
				durationEn: "3 Days 2 Nights",
				image: ImgUmum,
				highlights: [
					"Edukasi Maritim & Blue Economy",
					"Monitoring & Penanaman Mangrove",
					"Aksi Bersih Pantai",
					"Snorkeling & Eksplorasi Pulau dengan Sepeda",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Malam Api Unggun di Pantai",
				],
				highlightsEn: [
					"Maritime & Blue Economy Education",
					"Mangrove Monitoring & Planting",
					"Beach Clean-Up Activity",
					"Snorkeling & Island Exploration by Bicycle",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Beach Bonfire Night",
				],
				benefits: [
					"Sertifikat Kegiatan",
					"Homestay Nyaman selama Kegiatan",
					"Transportasi PP (Sunda Kelapa - Pulau Pari)",
					"Konsumsi dan Kaos",
					"Dokumentasi Kegiatan & Relasi",
				],
				benefitsEn: [
					"Activity Certificate",
					"Comfortable Homestay throughout Trip",
					"Round-trip Transportation (Sunda Kelapa - Pulau Pari)",
					"Meals & Exclusive T-Shirt",
					"Event Documentation & Networking",
				],
			},
		],
	},
	{
		id: "pulau-belitung",
		name: "Pulau Belitung",
		nameEn: "Belitung Island",
		province: "Bangka Belitung",
		provinceEn: "Bangka Belitung",
		description:
			"Saksikan keunikan geologi formasi batu granit raksasa, literasi budaya maritim, ekosistem pesisir, dan konservasi mangrove Belitung.",
		descriptionEn:
			"Witness unique giant granite rock formations, maritime culture literacy, coastal ecosystems, and mangrove conservation in Belitung.",
		packages: [
			{
				id: "belitung-sma-mhs-umum",
				title: "Maritime Edutrip 2026",
				destination: "Pulau Belitung, Bangka Belitung",
				target: "Untuk SMA, Mahasiswa & Umum",
				targetEn: "For High School, University Students & Public",
				packageOptionName:
					"Edutrip Pulau Belitung — SMA, Mahasiswa & Umum (Rp 4.000.000 - Rp 5.000.000)",
				price: "Rp4.000.000 - Rp5.000.000",
				unit: "/orang",
				minPax: "Terbuka untuk Umum",
				minPaxEn: "Open for Everyone",
				duration: "3 Hari 2 Malam",
				durationEn: "3 Days 2 Nights",
				image: ImgBelitung,
				highlights: [
					"Edukasi Maritim & Blue Economy",
					"Monitoring & Penanaman Mangrove",
					"Aksi Bersih Pantai",
					"Snorkeling & Eksplorasi Pulau dengan Sepeda",
					"Focus Group Discussion (FGD) & Fun Games",
					"Edukasi geologi batu granit",
					"Literasi budaya dan ekosistem pesisir",
				],
				highlightsEn: [
					"Maritime & Blue Economy Education",
					"Mangrove Monitoring & Planting",
					"Beach Clean-Up Activity",
					"Snorkeling & Island Exploration by Bicycle",
					"Focus Group Discussion (FGD) & Fun Games",
					"Granite Rock Geological Education",
					"Cultural Literacy & Coastal Ecosystem",
				],
				benefits: [
					"Sertifikat Kegiatan",
					"Homestay Nyaman selama Kegiatan",
					"Transportasi",
					"Konsumsi dan Kaos",
					"Dokumentasi Kegiatan & Relasi",
				],
				benefitsEn: [
					"Activity Certificate",
					"Comfortable Homestay throughout Trip",
					"Transportation",
					"Meals & Exclusive T-Shirt",
					"Event Documentation & Networking",
				],
			},
		],
	},
	{
		id: "pulau-lembata",
		name: "Pulau Lembata",
		nameEn: "Lembata Island",
		province: "Nusa Tenggara Timur",
		provinceEn: "East Nusa Tenggara",
		description:
			"Pelajari kearifan lokal budaya Lamaholot, kehidupan masyarakat pesisir tenun ikat, konservasi bahari, dan bentang alam memukau NTT.",
		descriptionEn:
			"Discover indigenous Lamaholot culture, traditional coastal ikat weaving communities, marine conservation, and breathtaking landscapes of East Nusa Tenggara.",
		packages: [
			{
				id: "lembata-sma-mhs-umum",
				title: "Maritime Edutrip 2026",
				destination: "Pulau Lembata, Nusa Tenggara Timur",
				target: "Untuk SMA, Mahasiswa & Umum",
				targetEn: "For High School, University Students & Public",
				packageOptionName:
					"Edutrip Pulau Lembata — SMA, Mahasiswa & Umum (Rp 4.000.000 - Rp 6.000.000)",
				price: "Rp4.000.000 - Rp6.000.000",
				unit: "/orang",
				minPax: "Terbuka untuk Umum",
				minPaxEn: "Open for Everyone",
				duration: "3 Hari 2 Malam",
				durationEn: "3 Days 2 Nights",
				image: ImgLembata,
				highlights: [
					"Edukasi Maritim & Blue Economy",
					"Monitoring & Penanaman Mangrove",
					"Aksi Bersih Pantai",
					"Snorkeling & Eksplorasi Pulau dengan Sepeda",
					"Focus Group Discussion (FGD) & Fun Games",
					"Edukasi budaya Lamaholot",
					"Kehidupan masyarakat pesisir tenun ikat",
				],
				highlightsEn: [
					"Maritime & Blue Economy Education",
					"Mangrove Monitoring & Planting",
					"Beach Clean-Up Activity",
					"Snorkeling & Island Exploration by Bicycle",
					"Focus Group Discussion (FGD) & Fun Games",
					"Lamaholot Cultural Education",
					"Ikat Weaving Coastal Community Life",
				],
				benefits: [
					"Sertifikat Kegiatan",
					"Homestay Nyaman selama Kegiatan",
					"Transportasi",
					"Konsumsi dan Kaos",
					"Dokumentasi Kegiatan & Relasi",
				],
				benefitsEn: [
					"Activity Certificate",
					"Comfortable Homestay throughout Trip",
					"Transportation",
					"Meals & Exclusive T-Shirt",
					"Event Documentation & Networking",
				],
			},
		],
	},
	{
		id: "pulau-maratua",
		name: "Pulau Maratua",
		nameEn: "Maratua Island",
		province: "Kalimantan Timur",
		provinceEn: "East Kalimantan",
		description:
			"Nikmati pesona laguna biru toska Derawan, konservasi terumbu karang dan penyu hijau, biodiversitas laut tropis, serta ekowisata kepulauan.",
		descriptionEn:
			"Experience the stunning turquoise lagoon of Derawan archipelago, sea turtle and coral conservation, tropical marine biodiversity, and island eco-tourism.",
		packages: [
			{
				id: "maratua-sma-mhs-umum",
				title: "Maritime Edutrip 2026",
				destination: "Pulau Maratua, Kalimantan Timur",
				target: "Untuk SMA, Mahasiswa & Umum",
				targetEn: "For High School, University Students & Public",
				packageOptionName:
					"Edutrip Pulau Maratua — SMA, Mahasiswa & Umum (Rp 4.000.000 - Rp 7.000.000)",
				price: "Rp4.000.000 - Rp7.000.000",
				unit: "/orang",
				minPax: "Terbuka untuk Umum",
				minPaxEn: "Open for Everyone",
				duration: "3 Hari 2 Malam",
				durationEn: "3 Days 2 Nights",
				image: ImgMaratua,
				highlights: [
					"Edukasi Maritim & Blue Economy",
					"Monitoring & Penanaman Mangrove",
					"Aksi Bersih Pantai",
					"Snorkeling & Eksplorasi Pulau dengan Sepeda",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Malam Api Unggun di Pantai",
					"Edukasi konservasi terumbu karang dan penyu",
				],
				highlightsEn: [
					"Maritime & Blue Economy Education",
					"Mangrove Monitoring & Planting",
					"Beach Clean-Up Activity",
					"Snorkeling & Island Exploration by Bicycle",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Beach Bonfire Night",
					"Coral Reef & Sea Turtle Conservation Education",
				],
				benefits: [
					"Sertifikat Kegiatan",
					"Homestay Nyaman selama Kegiatan",
					"Transportasi",
					"Konsumsi dan Kaos",
					"Dokumentasi Kegiatan & Relasi",
					"Biodiversitas laut, Ekowisata masyarakat pulau",
				],
				benefitsEn: [
					"Activity Certificate",
					"Comfortable Homestay throughout Trip",
					"Transportation",
					"Meals & Exclusive T-Shirt",
					"Event Documentation & Networking",
					"Marine Biodiversity & Island Eco-tourism",
				],
			},
		],
	},
	{
		id: "banda-neira",
		name: "Banda Neira",
		nameEn: "Banda Neira",
		province: "Maluku",
		provinceEn: "Maluku",
		description:
			"Napak tilas episentrum jalur rempah dunia, benteng peninggalan kolonial, kekayaan budaya lokal, dan kemegahan taman laut Banda Neira.",
		descriptionEn:
			"Trace the historic epicentre of the world spice trail, colonial heritage forts, vibrant local culture, and spectacular marine park of Banda Neira.",
		packages: [
			{
				id: "banda-neira-sma-mhs-umum",
				title: "Maritime Edutrip 2026",
				destination: "Banda Neira, Maluku",
				target: "Untuk SMA, Mahasiswa & Umum",
				targetEn: "For High School, University Students & Public",
				packageOptionName:
					"Edutrip Banda Neira — SMA, Mahasiswa & Umum (Rp 4.000.000 - Rp 7.000.000)",
				price: "Rp4.000.000 - Rp7.000.000",
				unit: "/orang",
				minPax: "Terbuka untuk Umum",
				minPaxEn: "Open for Everyone",
				duration: "3 Hari 2 Malam",
				durationEn: "3 Days 2 Nights",
				image: ImgBandaNeira,
				highlights: [
					"Edukasi Maritim & Blue Economy",
					"Monitoring & Penanaman Mangrove",
					"Aksi Bersih Pantai",
					"Snorkeling & Eksplorasi Pulau dengan Sepeda",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Malam Api Unggun di Pantai",
					"Napak tilas sejarah rempah & kolonialisme",
				],
				highlightsEn: [
					"Maritime & Blue Economy Education",
					"Mangrove Monitoring & Planting",
					"Beach Clean-Up Activity",
					"Snorkeling & Island Exploration by Bicycle",
					"Focus Group Discussion (FGD) & Fun Games",
					"BBQ & Beach Bonfire Night",
					"Spice History & Colonial Heritage Trace",
				],
				benefits: [
					"Sertifikat Kegiatan",
					"Homestay Nyaman selama Kegiatan",
					"Transportasi",
					"Konsumsi dan Kaos",
					"Dokumentasi Kegiatan & Relasi",
					"Biodiversitas laut, budaya lokal & warisan sejarah Indonesia",
				],
				benefitsEn: [
					"Activity Certificate",
					"Comfortable Homestay throughout Trip",
					"Transportation",
					"Meals & Exclusive T-Shirt",
					"Event Documentation & Networking",
					"Marine Biodiversity, Local Culture & History",
				],
			},
		],
	},
];

const allPackages = destinations.flatMap((d) => d.packages);

const ShowcaseEdutrip = ({ onOpenRegisterModal }) => {
	const { language, t } = useContext(LanguageContext);
	const [activeModalImage, setActiveModalImage] = useState(null);

	// Close modal on ESC key
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				setActiveModalImage(null);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	const handleDaftarClick = (pkg) => {
		if (activeModalImage) {
			setActiveModalImage(null);
		}

		if (onOpenRegisterModal) {
			onOpenRegisterModal(pkg.packageOptionName, [pkg.packageOptionName]);
		}
	};

	return (
		<section id="packages" className="py-16 bg-slate-50">
			<div className="container mx-auto px-6 sm:px-12 lg:px-20">
				{/* Section Main Header */}
				<div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
					<h2 className="text-3xl sm:text-4xl font-bold text-primary-color mb-4">
						{t("edutriplist")}
					</h2>
					<p className="text-gray-600 text-base sm:text-lg">
						{t("edutripsubtitle")}
					</p>
				</div>

				{/* Destination Catalog Sections */}
				<div className="space-y-24">
					{destinations.map((dest, destIdx) => (
						<div
							key={dest.id}
							id={dest.id}
							className="scroll-mt-28"
							data-aos="fade-up"
							data-aos-delay={destIdx * 100}
						>
							{/* Destination Header / Judul Katalog - Centered with same styling as main header */}
							<div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
								<h3 className="text-3xl sm:text-4xl font-bold text-primary-color mb-4">
									{language === "en" ? dest.nameEn : dest.name}
								</h3>
								<p className="text-gray-600 text-base sm:text-lg">
									{language === "en" ? dest.descriptionEn : dest.description}
								</p>
							</div>

							{/* Cards Container for this Destination - Centered */}
							<div className="flex flex-wrap justify-center gap-8">
								{dest.packages.map((pkg, idx) => {
									const targetLabel =
										language === "en" ? pkg.targetEn : pkg.target;
									const minPaxLabel =
										language === "en" ? pkg.minPaxEn : pkg.minPax;
									const durationLabel =
										language === "en" ? pkg.durationEn : pkg.duration;
									const highlightList =
										language === "en"
											? pkg.highlightsEn
											: pkg.highlights;

									return (
										<div
											key={pkg.id}
											className="w-full sm:w-[360px] max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-slate-100 group"
											data-aos="fade-up"
											data-aos-delay={idx * 150}
										>
											{/* Poster Image Container - click to view high-res poster */}
											<div
												className="relative overflow-hidden cursor-pointer bg-slate-100"
												onClick={() => setActiveModalImage(pkg.image)}
												title="Klik untuk melihat poster penuh"
											>
												<img
													src={pkg.image}
													alt={targetLabel}
													className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
												/>
												<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
													<span className="bg-white/95 text-primary-color font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth={2}
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
															/>
														</svg>
														<span>{t("viewposter")}</span>
													</span>
												</div>

												{/* Badges */}
												<div className="absolute top-4 left-4 flex flex-col gap-2">
													<span className="bg-sky-700/90 text-white font-semibold text-xs px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
														{durationLabel}
													</span>
												</div>
											</div>

											{/* Card Content */}
											<div className="p-6 flex flex-col flex-1 justify-between">
												<div>
													<div className="mb-2">
														<span className="text-xs uppercase tracking-wider font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded">
															{minPaxLabel}
														</span>
													</div>
													<h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">
														{targetLabel}
													</h3>
													<p className="text-sm text-gray-500 mb-4">
														{pkg.destination}
													</p>

													{/* Price */}
													<div className="py-3 px-4 bg-sky-50/70 rounded-xl mb-5 flex items-baseline justify-between border border-sky-100">
														<span className="text-xs font-semibold text-sky-800">
															{language === "en" ? "Fee" : "Biaya"}
														</span>
														<div>
															<span className="text-2xl font-extrabold text-primary-color">
																{pkg.price}
															</span>
															<span className="text-xs text-gray-500 font-medium">
																{" "}
																{pkg.unit}
															</span>
														</div>
													</div>

													{/* Activity Highlights */}
													<div className="mb-6">
														<h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
															{language === "en"
																? "Activity Highlights:"
																: "Aktivitas Seru & Edukatif:"}
														</h4>
														<ul className="space-y-1.5 text-xs text-gray-600">
															{highlightList.slice(0, 4).map((act, i) => (
																<li key={i} className="flex items-start gap-2">
																	<FaCheck className="text-emerald-500 mt-1 flex-shrink-0 text-[10px]" />
																	<span>{act}</span>
																</li>
															))}
														</ul>
													</div>
												</div>

												{/* Action Button: Daftar Sekarang */}
												<div className="pt-3 border-t border-slate-100">
													<button
														type="button"
														onClick={() => handleDaftarClick(pkg)}
														className="w-full py-3.5 px-4 text-sm font-bold text-white bg-gradient-to-r from-[#00b4d8] to-[#0096c7] hover:from-[#00a2c4] hover:to-[#0083af] rounded-full shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
													>
														<span>
															{language === "en"
																? "Register Now"
																: "Daftar sekarang"}
														</span>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth={2.5}
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M14 5l7 7m0 0l-7 7m7-7H3"
															/>
														</svg>
													</button>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Lightbox Modal */}
			{activeModalImage && (
				<div
					className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
					onClick={() => setActiveModalImage(null)}
				>
					<div
						className="relative max-w-4xl max-h-[92vh] flex flex-col items-center bg-transparent"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setActiveModalImage(null)}
							className="absolute -top-12 right-0 md:-right-12 text-white bg-black/60 hover:bg-black/90 p-2.5 rounded-full transition-colors duration-200 focus:outline-none"
							aria-label="Close"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						<img
							src={activeModalImage}
							alt="Full Edutrip Poster"
							className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain border-2 border-white/20"
						/>
						<div className="mt-4 flex gap-4">
							<button
								type="button"
								onClick={() => {
									const matched =
										allPackages.find((p) => p.image === activeModalImage) ||
										allPackages[0];
									handleDaftarClick(matched);
								}}
								className="px-6 py-2.5 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200"
							>
								{language === "en" ? "Register Now" : "Daftar sekarang"}
							</button>
							<button
								type="button"
								onClick={() => setActiveModalImage(null)}
								className="px-6 py-2.5 bg-white/20 text-white font-semibold text-sm rounded-full hover:bg-white/30 backdrop-blur-sm transition-all duration-200"
							>
								{language === "en" ? "Close" : "Tutup"}
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default ShowcaseEdutrip;
