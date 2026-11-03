import React, { useContext, useState, useEffect } from "react";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
import HeaderSupport from "../component/Supportpage/HeaderSupport";
import BackToTopButton from "../component/BackToTop";
import CardSupport from "../component/Supportpage/CardSupport";
import { LanguageContext } from '../utils/LanguageContext';

// In Vite, importing a PDF file gives you the public URL string directly
import Pdf1 from "../assets/pdf/Company Profile.pdf";
import Pdf2 from "../assets/pdf/Indonesia - Law of the Sea.pdf";
import Pdf3 from "../assets/pdf/Indonesian Ocean Policy.pdf";

const SupportPage = () => {
	const { t } = useContext(LanguageContext);

	const downloadsData = [
		{
			title: t("sertifcard1"),
			category: "Company",
			description: "Our complete company profile and services.",
			pdf: Pdf1,
			fileInfo: "PDF - 2.1MB",
		},
		{
			title: t("sertifcard2"),
			category: "Legal",
			description:
				"A comprehensive document on Indonesia's law of the sea.",
			pdf: Pdf2,
			fileInfo: "PDF - 834KB",
		},
		{
			title: t("sertifcard3"),
			category: "Policy",
			description: "The official publication on Indonesian ocean policy.",
			pdf: Pdf3,
			fileInfo: "PDF - 1.5MB",
		},
	];

	const [activeCategory, setActiveCategory] = useState("All");
	const [filteredDownloads, setFilteredDownloads] = useState([]);

	const categories = [
		"All",
		...new Set(downloadsData.map((item) => item.category)),
	];

	useEffect(() => {
		const newFiltered =
			activeCategory === "All"
				? downloadsData
				: downloadsData.filter(
						(item) => item.category === activeCategory
					);

		setFilteredDownloads([]);

		const timer = setTimeout(() => {
			setFilteredDownloads(newFiltered);
		}, 100);

		return () => clearTimeout(timer);
	}, [activeCategory]);

	return (
		<div className="">
			<NavBar />
			<HeaderSupport />

			<div className="container mx-auto px-6 py-16 lg:py-24">
				<div className="text-center mb-12">
					<h1 className="font-bold text-3xl sm:text-4xl text-primary-color">
						{t("essedownload")}
					</h1>
					<p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
						Access key documents, official policies, and company
						resources right here.
					</p>
				</div>

				<div className="flex justify-center flex-wrap gap-4 mb-12">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-6 py-2 rounded-xl font-semibold text-sm transition-colors duration-300 ${
								activeCategory === category
									? "bg-primary-color text-white shadow-md"
									: "bg-white text-gray-700 hover:bg-gray-200"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredDownloads.map((item, index) => (
						<CardSupport
							key={item.title}
							title={item.title}
							description={item.description}
							pdfLink={item.pdf}
							fileInfo={item.fileInfo}
							previewImage={item.previewImage}
							downloadText={t("downloaded")}
							index={index}
						/>
					))}
				</div>
			</div>

			<Footer />
			<BackToTopButton />
		</div>
	);
};

export default SupportPage;
