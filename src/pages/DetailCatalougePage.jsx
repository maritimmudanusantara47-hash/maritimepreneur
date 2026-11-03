import React from "react";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import DetailCatalouge from "../component/Cataloguepage/DetailCatalouge";
import BackToTopButton from "../component/BackToTop";

const DetailCatalougePage = () => {
	return (
		<div>
			<NavBar />
			<DetailCatalouge />
			<Footer />
			<BackToTopButton />
		</div>
	);
};

export default DetailCatalougePage;
