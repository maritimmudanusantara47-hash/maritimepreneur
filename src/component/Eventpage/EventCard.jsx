import React from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
	const { id, title, description, date, image, location } = props;

	return (
		<div className="group bg-white w-full max-w-[320px] min-w-[240px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 relative aspect-[3/4]">
			<div className="relative w-full h-full">
				<img
					className="w-full h-full object-cover object-center"
					src={image}
					alt={title}
					loading="lazy"
				/>

				<div
					className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity duration-500 opacity-80`}
				/>
			</div>

			<div
				className={`absolute inset-x-0 bottom-8 p-4 transition-all duration-500 ease-in-out`}
			>
				<Link to={`/events/detail/${id}`}>
					<h1
						className={`text-white text-2xl font-bold line-clamp-2 hover:underline cursor-pointer`}
					>
						{title}
					</h1>
				</Link>

				<span className="text-white/75 text-sm font-light">
					{date} | {location}
				</span>
			</div>
		</div>
	);
};

export default EventCard;
