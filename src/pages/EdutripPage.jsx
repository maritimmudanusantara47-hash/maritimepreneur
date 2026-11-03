import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
import HeaderEdutrip from "../component/Edutrippage/HeaderEdutrip";
import ShowcaseEdutrip from "../component/Edutrippage/ShowcaseEdutrip";
import FormEdutrip from "../component/Edutrippage/FormEdutrip";
import BackToTopButton from "../component/BackToTop";

const EdutripPage = () => {
	const [isFormModalOpen, setIsFormModalOpen] = useState(false);
	const [selectedPackage, setSelectedPackage] = useState(
		"Edutrip Pelajar SD & SMP — 3 Hari 2 Malam (Rp 1.450.000)"
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleOpenRegisterModal = (packageName) => {
		if (packageName) {
			setSelectedPackage(packageName);
		}
		setIsFormModalOpen(true);
	};

	const handleCloseRegisterModal = () => {
		setIsFormModalOpen(false);
	};

	return (
		<div>
			<NavBar />
			<HeaderEdutrip />
			<ShowcaseEdutrip onOpenRegisterModal={handleOpenRegisterModal} />
			<FormEdutrip
				isOpen={isFormModalOpen}
				onClose={handleCloseRegisterModal}
				selectedPackage={selectedPackage}
				setSelectedPackage={setSelectedPackage}
			/>
			<Footer />
			<BackToTopButton />
		</div>
	);
};

export default EdutripPage;
