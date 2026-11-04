import React from "react";
import translations from "./translations.json";

const LanguageContext = React.createContext();

// Clean inline SVG flags so they never fail to load from external URLs or break with broken image icons
const FlagUS = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 640 480"
		className="w-4 h-3 inline-block mr-2 rounded-[2px] shadow-sm object-cover flex-shrink-0"
	>
		<g fillRule="evenodd" strokeWidth="1pt">
			<path fill="#bd3d44" d="M0 0h640v480H0z" />
			<path
				stroke="#fff"
				strokeWidth="37"
				d="M0 55.4h640M0 129.2h640M0 203.1h640M0 277h640M0 350.8h640M0 424.6h640"
			/>
			<path fill="#192f5d" d="M0 0h256v258.5H0z" />
			<g fill="#fff">
				<g id="s18">
					<g id="s9">
						<g id="s5">
							<g id="s4">
								<path
									id="s"
									d="m24.7 18.5 3.3 10.1h10.7l-8.6 6.3 3.3 10.1-8.7-6.3-8.6 6.3 3.3-10.1-8.6-6.3h10.6z"
									transform="scale(.64)"
								/>
								<use href="#s" x="42.7" />
								<use href="#s" x="85.3" />
								<use href="#s" x="128" />
							</g>
							<use href="#s" x="170.7" />
						</g>
						<use href="#s4" x="21.3" y="18.5" />
					</g>
					<use href="#s9" y="37" />
				</g>
				<use href="#s18" y="74" />
				<use href="#s18" y="148" />
			</g>
		</g>
	</svg>
);

const FlagID = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 640 480"
		className="w-4 h-3 inline-block mr-2 rounded-[2px] shadow-sm border border-gray-200 flex-shrink-0"
	>
		<g fillRule="evenodd">
			<path fill="#e70011" d="M0 0h640v240H0z" />
			<path fill="#fff" d="M0 240h640v240H0z" />
		</g>
	</svg>
);

const languages = [
	{
		code: "en",
		desk: "EN",
		label: "English",
		FlagIcon: FlagUS,
	},
	{
		code: "id",
		desk: "ID",
		label: "Indonesia",
		FlagIcon: FlagID,
	},
];

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = React.useState("en");

	const t = (text) => {
		return translations[language][text];
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export { LanguageContext, LanguageProvider, languages, FlagUS, FlagID };
