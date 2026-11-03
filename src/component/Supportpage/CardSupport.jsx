import React, { useState, useEffect } from "react";

const PdfIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-16 w-16 text-gray-400"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={1}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
		/>
	</svg>
);

const DownloadIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5 mr-2"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
		/>
	</svg>
);

const CardSupport = ({
	title,
	description,
	pdfLink,
	fileInfo,
	downloadText,
	previewImage,
	index,
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// FIX: added cleanup for timer on unmount
		const timer = setTimeout(() => setIsMounted(true), 10);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-gray-200 transition-all duration-500 ease-out ${
				isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
			}`}
			style={{ transitionDelay: `${index * 75}ms` }}
		>
			<div className="bg-slate-100 h-48 flex items-center justify-center">
				{previewImage ? (
					<img
						src={previewImage}
						alt={title}
						className="w-full h-full object-cover"
					/>
				) : (
					<PdfIcon />
				)}
			</div>

			<div className="p-5 flex flex-col flex-grow">
				<h3 className="text-lg font-bold text-gray-900">{title}</h3>
				{description && (
					<p className="text-gray-600 mt-2 text-sm flex-grow">
						{description}
					</p>
				)}

				<div className="text-center text-xs text-gray-500 mt-4 py-2 border-t border-gray-100">
					{fileInfo}
				</div>

				<div className="mt-5">
					<a
						href={pdfLink}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center w-full text-center bg-primary-color text-white rounded-md px-6 py-3 font-bold hover:bg-secondary-color transition-all duration-300 transform hover:scale-105"
					>
						<DownloadIcon />
						{downloadText}
					</a>
				</div>
			</div>
		</div>
	);
};

export default CardSupport;
