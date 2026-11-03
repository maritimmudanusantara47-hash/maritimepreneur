import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import getEventInitialData from "../../utils/EventData";

import {
	FiCalendar,
	FiMapPin,
	FiAlertCircle,
	FiArrowRight,
} from "react-icons/fi";
import { LanguageContext } from '../../utils/LanguageContext';

const EventDetail = () => {
	const { id } = useParams();
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);
	const { t } = useContext(LanguageContext);

	useEffect(() => {
		setLoading(true);

		const timer = setTimeout(() => {
			const allEvents = getEventInitialData();
			const foundEvent = allEvents.find((e) => e.id === Number(id));
			setEvent(foundEvent);
			setLoading(false);
		}, 500);

		return () => clearTimeout(timer);
	}, [id]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen text-lg text-gray-500">
				Loading Event...
			</div>
		);
	}

	if (!event) {
		return (
			<div className="flex flex-col justify-center items-center h-screen text-gray-500">
				<FiAlertCircle className="text-6xl text-red-400 mb-4" />
				<h2 className="text-2xl font-bold text-red-500">
					Event Not Found
				</h2>
				<p className="mt-2">
					Sorry, we couldn't find an event with this ID.
				</p>
			</div>
		);
	}

	return (
		<div className="bg-slate-50 font-sans">
			<div className="container mx-auto max-w-6xl py-12 px-4">
				<div
					className="w-full h-72 lg:h-96 bg-cover bg-center rounded-2xl shadow-2xl"
					style={{ backgroundImage: `url(${event.image})` }}
				/>
				<div className="relative -mt-32">
					<div className="bg-white/90 backdrop-blur-sm p-8 mx-auto max-w-4xl rounded-2xl shadow-xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12">
							<div className="lg:col-span-2 space-y-6">
								<h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight">
									{event.title}
								</h1>
								<hr className="border-slate-200" />
								<p className="text-slate-600 text-lg leading-relaxed">
									{event.description}
								</p>
							</div>
							<div className="mt-8 lg:mt-0">
								<div className="bg-slate-100 p-6 rounded-xl border border-slate-200 space-y-6">
									<div className="flex items-start space-x-4">
										<FiCalendar className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
										<div>
											<h4 className="font-semibold text-slate-700">
												Date
											</h4>
											<p className="text-slate-500">
												{new Date(
													event.date
												).toLocaleDateString("en-US", {
													weekday: "long",
													year: "numeric",
													month: "long",
													day: "numeric",
												})}
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<FiMapPin className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
										<div>
											<h4 className="font-semibold text-slate-700">
												Location
											</h4>
											<p className="text-slate-500">
												{event.location}
											</p>
										</div>
									</div>
									<a
										href="#"
										className="group w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:-translate-y-1"
									>
										Register for Event
										<FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventDetail;
