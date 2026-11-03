import React, { useEffect, useContext } from "react";
// import CardProfile from '../../component/Teampage/CardProfile'
import CardProfileAlt from "./CardProfileAlt";
import CardProfileDouble from "./CardProfileDouble";
import AOS from "aos";
import Profile1 from "../../assets/profile1.png";
import Profile2 from "../../assets/profile2.png";
import Profile3 from "../../assets/profile3.png";
import Profile5 from "../../assets/profile5.png";
import Profile11 from "../../assets/profile11.png";
import Profile12 from "../../assets/profile12.png";

import { LanguageContext } from '../../utils/LanguageContext';

const ProfileTeam = () => {
	const { t } = useContext(LanguageContext);
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-primary-color">
			<div>
				<h1
					className="text-center font-semibold text-4xl my-16"
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					{t("commisioners")}
				</h1>
				<div
					className="grid md:grid-cols-2 gap-12 -mx-2  w-auto items-center "
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					<CardProfileAlt
						name="Dr. Ir. I Wayan Nurjaya, M.Sc."
						position={t("commisioners1")}
						image={Profile1}
						description={t("desccommisioners1")}
					/>
					<CardProfileAlt
						name="M. Ronald David, S.E."
						position={t("commisioners2")}
						image={Profile2}
						description={t("desccommisioners2")}
					/>
				</div>
			</div>
			<div>
				<h1
					className="text-center font-semibold text-4xl my-16"
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					{t("directors")}
				</h1>
				<div
					className="grid md:grid-cols-2 gap-12 -mx-2"
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					<CardProfileAlt
						name="Dr. Catur Prasetyo, S.S.T.Par., M.Si."
						position={t("directors1")}
						image={Profile3}
						description={t("descdirectors1")}
					/>
					{/* <CardProfileDouble
            name="Kaisar Akhir, S.I.K., M.Sc., M.B.A, CBEc."
            position={t("directors2")}
            // position2={t("directors22")}
            image={Profile4}
            description={t("descdirectors2")}
          /> */}
					<CardProfileDouble
						name="Muh. Ardhy Dhikahlil G., S.Pi."
						position={t("directors2")}
						image={Profile12}
						description={t("descdirectors2")}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileTeam;
