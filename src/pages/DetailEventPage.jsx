import React from "react";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import BackToTopButton from "../component/BackToTop";
import EventDetail from "../component/Eventpage/EventDetail";

const DetailEventPage = () => {
	return (
		<div>
			<NavBar />
			<EventDetail />
			<Footer />
			<BackToTopButton />
		</div>
	);
};

export default DetailEventPage;
