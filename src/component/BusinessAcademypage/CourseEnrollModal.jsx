import React, { useState, useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { IoMdClose } from "react-icons/io";
import { FaGraduationCap, FaCheckCircle, FaHourglassHalf, FaBullseye } from "react-icons/fa";
import Swal from "sweetalert2";

const CourseEnrollModal = ({ isOpen, onClose, selectedCourse }) => {
	const { language } = useContext(LanguageContext);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [institution, setInstitution] = useState("");
	const [notes, setNotes] = useState("");

	if (!isOpen || !selectedCourse) return null;

	const courseTitle =
		typeof selectedCourse.title === "object"
			? selectedCourse.title[language] || selectedCourse.title.id
			: selectedCourse.title;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!fullName || !email || !phone) {
			Swal.fire({
				icon: "warning",
				title: language === "id" ? "Mohon Lengkapi Data" : "Please Complete Required Fields",
				text: language === "id" ? "Nama, Email, dan No. WhatsApp wajib diisi." : "Name, Email, and WhatsApp number are required.",
				confirmButtonColor: "#143f83",
			});
			return;
		}

		Swal.fire({
			icon: "success",
			title: language === "id" ? "Pendaftaran Berhasil Terkirim!" : "Enrollment Submitted!",
			text: language === "id" 
				? `Terima kasih ${fullName}, tim Maritimepreneur Business Academy akan segera menghubungi Anda.`
				: `Thank you ${fullName}, our team will contact you shortly.`,
			confirmButtonColor: "#143f83",
		});

		const waMessage = encodeURIComponent(
			`Halo Tim Maritimepreneur Business Academy, saya ${fullName} (${email} / ${phone} / ${institution || "-"}) ingin mendaftar untuk kursus: *${courseTitle}*. Catatan: ${notes || "-"}`
		);
		window.open(`https://wa.me/6282136938990?text=${waMessage}`, "_blank");

		onClose();
	};

	return (
		<div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
			<div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-gray-100 animate-fadeIn">
				<div className="bg-gradient-to-r from-primary-color to-blue-700 text-white p-6 sm:p-8">
					<div className="flex justify-between items-start">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-yellow-400 text-2xl">
								<FaGraduationCap />
							</div>
							<div>
								<span className="text-xs uppercase tracking-wider font-semibold text-blue-200">
									{language === "id" ? "Formulir Pendaftaran Kursus" : "Course Registration Form"}
								</span>
								<h3 className="text-xl sm:text-2xl font-bold mt-1 text-white leading-tight">
									{courseTitle}
								</h3>
							</div>
						</div>
						<button
							onClick={onClose}
							className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
						>
							<IoMdClose size={24} />
						</button>
					</div>
					<div className="mt-4 flex flex-wrap gap-2 text-xs text-blue-100">
						<span className="bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5"><FaHourglassHalf className="text-yellow-300 text-xs" /> {selectedCourse.duration}</span>
						<span className="bg-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5"><FaBullseye className="text-emerald-300 text-xs" /> {selectedCourse.level}</span>
					</div>
				</div>

				<form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
					<div>
						<label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
							{language === "id" ? "Nama Lengkap *" : "Full Name *"}
						</label>
						<input
							type="text"
							required
							placeholder={language === "id" ? "Contoh: Budi Pratama" : "e.g. John Doe"}
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-color focus:ring-2 focus:ring-blue-100 outline-none text-gray-800 transition"
						/>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
								{language === "id" ? "Email *" : "Email Address *"}
							</label>
							<input
								type="email"
								required
								placeholder="budi@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-color focus:ring-2 focus:ring-blue-100 outline-none text-gray-800 transition"
							/>
						</div>
						<div>
							<label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
								{language === "id" ? "No. WhatsApp / HP *" : "WhatsApp Phone Number *"}
							</label>
							<input
								type="tel"
								required
								placeholder="08123456789"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-color focus:ring-2 focus:ring-blue-100 outline-none text-gray-800 transition"
							/>
						</div>
					</div>

					<div>
						<label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
							{language === "id" ? "Instansi / Kampus / Perusahaan" : "Institution / University / Company"}
						</label>
						<input
							type="text"
							placeholder={language === "id" ? "Contoh: Universitas Indonesia / PT Samudera" : "e.g. Maritime Corp"}
							value={institution}
							onChange={(e) => setInstitution(e.target.value)}
							className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-color focus:ring-2 focus:ring-blue-100 outline-none text-gray-800 transition"
						/>
					</div>

					<div>
						<label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
							{language === "id" ? "Pertanyaan atau Catatan Khusus" : "Questions or Special Notes"}
						</label>
						<textarea
							rows={2}
							placeholder={language === "id" ? "Ada pertanyaan terkait jadwal atau skema pembayaran?" : "Any specific inquiry?"}
							value={notes}
							onChange={(e) => setNotes(e.target.value)}
							className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-primary-color focus:ring-2 focus:ring-blue-100 outline-none text-gray-800 transition"
						></textarea>
					</div>

					<div className="pt-2 flex flex-col sm:flex-row gap-3">
						<button
							type="submit"
							className="flex-1 bg-primary-color hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
						>
							<FaCheckCircle />
							<span>{language === "id" ? "Konfirmasi Pendaftaran" : "Submit Registration"}</span>
						</button>
						<button
							type="button"
							onClick={onClose}
							className="sm:w-32 py-3.5 px-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold transition"
						>
							{language === "id" ? "Batal" : "Cancel"}
						</button>
					</div>

					<p className="text-center text-xs text-gray-400 mt-2">
						{language === "id"
							? "Pendaftaran juga terhubung langsung dengan admin kami via WhatsApp."
							: "Registration is also directly synced with our team on WhatsApp."}
					</p>
				</form>
			</div>
		</div>
	);
};

export default CourseEnrollModal;
