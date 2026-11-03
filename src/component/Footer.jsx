/* eslint-disable react/jsx-no-undef */
import React from "react";
import Logo from "../assets/Logo.png";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BiPhoneCall } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
	const location = useLocation();
	const isSupport = location.pathname === "/support";
	// const isHome = location.pathname === "/";
	const latitude = -6.1907168;
	const longitude = 106.8804589;

	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

	return (
		<footer className="bg-secondary-color px-8 text-center text-white lg:text-left">
			<div className="mx-6 py-10 text-center md:text-left">
				<div className="grid-1 grid md:grid-cols-2 lg:flex gap-8 lg:justify-between">
					<div className="flex mb-4 md:flex-shrink-0 justify-center md:justify-start">
						<img src={Logo} className="w-32 h-36" alt="" />
					</div>
					<div className="">
						<h6 className="mb-4 flex justify-center font-semibold md:justify-start">
							Operation Office
						</h6>
						<a
							className="mb-4 text-white font-regular leading-8 text-sm "
							href={mapsUrl}
							target="_blank"
							rel="noreferrer"
						>
							Indonesia Blue Economy  (IBEC)
							<br />
							Kampus C STIE Indonesia Jakarta, Jalan Pratekan No.
							9A Rawamangun
							<br />
							Kec. Pulogadung, Kota Jakarta Timur, Daerah Khusus
							Jakarta, 13220.
						</a>
					</div>
					<div className="">
						<h6
							data-testid="content"
							className="mb-4 flex justify-center font-semibold md:justify-start"
						>
							Support
						</h6>
						<p>
							<Link
								className="mb-4 text-sm hover:text-sky-300"
								to="/support"
								onClick={() => {
									if (!isSupport) {
										window.scrollTo(0, 0);
									}
								}}
							>
								Help Center
							</Link>
						</p>
						<Link
							className="mb-4 text-sm hover:text-sky-300"
							to="/contact"
							onClick={() => {
								if (!isSupport) {
									window.scrollTo(0, 0);
								}
							}}
						>
							Contact Us
						</Link>
						{/* <Link
                            className="mb-4  text-sm hover:text-sky-300"
                            to="/download"
                            onClick={() => {
                                if (!isSupport) {
                                    window.scrollTo(0, 550);
                                }
                            }}
                        >
                            Download
                        </Link> */}
					</div>
					<div>
						<h6 className="mb-4 flex justify-center font-semibold md:justify-start">
							Contact Us
						</h6>
						<a
							href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=maritimepreneur@gmail.com"
							target="_blank"
							className="mb-4 gap-4 flex items-center justify-center md:justify-start text-sm"
							rel="noreferrer"
						>
							<TfiEmail className="text-lg " />
							<p className="hover:text-sky-300">
								maritimepreneur@gmail.com
							</p>
						</a>
						<p className="mb-4 gap-3 flex items-center justify-center md:justify-start text-sm">
							<BiPhoneCall className="text-xl" />
							<a
								href="https://wa.me/6282386335323"
								target="_blank"
								className="hover:text-sky-300"
								rel="noreferrer"
							>
								+6282386335323
							</a>
							|{" "}
							<a
								href="https://wa.me/622122671273"
								target="_blank"
								className="hover:text-sky-300 "
								rel="noreferrer"
							>
								+622122671273
							</a>
						</p>

						<div className="mb-4 flex items-center justify-center md:justify-start text-white">
							<a
								href="https://www.instagram.com/maritimepreneur/"
								target="_blank"
								className="mr-4 text-xl mt-2 h-5 w-5 hover:text-sky-300"
								rel="noreferrer"
							>
								<BsInstagram />
							</a>
							<a
								href="https://www.linkedin.com/company/maritimepreneur/"
								target="_blank"
								className="mr-4 text-xl mt-2 h-5 w-5 hover:text-sky-300"
								rel="noreferrer"
							>
								<BsLinkedin />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-secondary-color-color border-t-2 p-6 text-center">
				<span className="font-medium text-sm">
					© 2023 MARITIMEPRENEUR All Rights Reserved.
				</span>{" "}
				<br />
				<span className="font-medium text-xs">
					MARITIMEPRENEUR is a trademark of PT Mahakarya Maritim
					Indonesia. Registered in the Directorate General of
					Intellectual Property of the Republic of Indonesia.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
