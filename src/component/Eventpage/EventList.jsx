import Aos from "aos";
import { useEffect, useState } from "react";
import getEventInitialData from "../../utils/EventData";
import EventCard from "./EventCard";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const EventList = () => {
	const events = getEventInitialData();
	const [isSearching, setIsSearching] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedLocation, setSelectedLocation] = useState("");
	const [sortBy, setSortBy] = useState("newest");

	const locations = [...new Set(events.map((event) => event.location))];

	const filteredEvents = events
		.filter((event) => {
			const matchesSearch = event.title
				.toLowerCase()
				.includes(searchTerm.toLowerCase());
			const matchesLocation =
				selectedLocation === "" || event.location === selectedLocation;
			return matchesSearch && matchesLocation;
		})
		.sort((a, b) => {
			switch (sortBy) {
				case "newest":
					return new Date(b.date) - new Date(a.date);
				case "oldest":
					return new Date(a.date) - new Date(b.date);
				case "name-asc":
					return a.title.localeCompare(b.title);
				case "name-desc":
					return b.title.localeCompare(a.title);
				default:
					return 0;
			}
		});

	useEffect(() => {
		Aos.init({
			once: true,
			duration: 2000,
		});
	}, []);

	return (
		<div className="container mx-auto px-4 py-8 lg:px-8">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="w-full lg:w-80 space-y-8" data-aos="fade-right">
					<h1 className="text-2xl font-bold text-primary-color">
						Filters
					</h1>

					<div className="relative">
						<input
							type="text"
							placeholder="Search events..."
							className="w-full pl-12 pr-8 py-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								setIsSearching(true);
							}}
						/>
						<IoIosSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
						{isSearching && searchTerm !== "" && (
							<button
								onClick={() => {
									setIsSearching(false);
									setSearchTerm("");
								}}
								className="absolute right-4 top-1/2 -translate-y-1/2"
							>
								<IoMdClose className="scale-125 fill-black/60" />
							</button>
						)}
					</div>

					<div className="space-y-4">
						<label className="block text-sm font-medium text-gray-700">
							Location
						</label>
						<select
							className="w-full px-4 py-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
							value={selectedLocation}
							onChange={(e) =>
								setSelectedLocation(e.target.value)
							}
						>
							<option value="">All Locations</option>
							{locations.map((location, index) => (
								<option key={index} value={location}>
									{location}
								</option>
							))}
						</select>
					</div>

					<div className="space-y-4">
						<label className="block text-sm font-medium text-gray-700">
							Sort By
						</label>
						<select
							className="w-full px-4 py-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
						>
							<option value="newest">Newest first</option>
							<option value="oldest">Oldest first</option>
							<option value="name-asc">Name A to Z</option>
							<option value="name-desc">Name Z to A</option>
						</select>
					</div>
				</div>

				<div className="flex-1" data-aos="fade-left">
					{filteredEvents.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
							{filteredEvents.map((event) => (
								<EventCard key={event.id} {...event} />
							))}
						</div>
					) : (
						<div className="h-96 flex flex-col items-center justify-center text-center">
							<div className="text-gray-400 text-5xl mb-4">
								<AiOutlineExclamationCircle />
							</div>
							<h3 className="text-xl font-semibold text-gray-800">
								No events found
							</h3>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default EventList;
