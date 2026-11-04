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
		"Edutrip Pulau Pari — Pelajar SD & SMP (Rp 1.450.000)"
	);
	const [availablePackages, setAvailablePackages] = useState([
		"Edutrip Pulau Pari — Pelajar SD & SMP (Rp 1.450.000)",
	]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleOpenRegisterModal = (pkgOrName, packages) => {
		if (typeof pkgOrName === "object" && pkgOrName !== null) {
			setSelectedPackage(pkgOrName.packageOptionName);
			setAvailablePackages([pkgOrName.packageOptionName]);
		} else if (typeof pkgOrName === "string") {
			setSelectedPackage(pkgOrName);
			setAvailablePackages(packages || [pkgOrName]);
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
				availablePackages={availablePackages}
			/>
			<Footer />
			<BackToTopButton />
		</div>
	);
};

export default EdutripPage;
