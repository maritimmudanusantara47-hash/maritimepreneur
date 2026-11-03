import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BusinessAcademyPage from "./pages/BusinessAcademyPage";
import EventPage from "./pages/EventPage";
import EdutripPage from "./pages/EdutripPage";
import VentureBuilderPage from "./pages/VentureBuilderPage";
import TechDevelopmentPage from "./pages/TechDevelopmentPage";
import TeamPage from "./pages/TeamPage";
import CataloguePage from "./pages/CataloguePage";
import SupportPage from "./pages/SupportPage";
import ServicePage from "./pages/ServicePage";
import ContactForm from "./component/Homepage/ContactForm";
import DetailCatalougePage from "./pages/DetailCatalougePage";
import DetailEventPage from "./pages/DetailEventPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				
				{/* 4 Core Pillars requested */}
				<Route path="/business-academy" element={<BusinessAcademyPage />} />
				<Route path="/events" element={<EventPage />} />
				<Route path="/event" element={<EventPage />} />
				<Route path="/edutrip" element={<EdutripPage />} />
				<Route path="/venture-builder" element={<VentureBuilderPage />} />
				<Route path="/tech-development" element={<TechDevelopmentPage />} />
				<Route path="/tech" element={<TechDevelopmentPage />} />

				{/* Other Existing Routes */}
				<Route path="/catalogue" element={<CataloguePage />} />
				<Route path="/catalogue/detail/:id" element={<DetailCatalougePage />} />
				<Route path="/events/detail/:id" element={<DetailEventPage />} />
				<Route path="/team" element={<TeamPage />} />
				<Route path="/support" element={<SupportPage />} />
				<Route path="/services" element={<ServicePage />} />
				<Route path="/contact" element={<ContactForm />} />

				{/* Fallback */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
