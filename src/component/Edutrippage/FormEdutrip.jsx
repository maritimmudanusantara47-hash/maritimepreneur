import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { BsWhatsapp } from "react-icons/bs";

export const packageOptions = [
	"Edutrip Pulau Pari — Pelajar SD & SMP (Rp 1.450.000)",
	"Edutrip Pulau Pari — Pelajar SMA & Mahasiswa (Rp 1.500.000)",
	"Edutrip Pulau Pari — Masyarakat Umum (Rp 1.600.000)",
	"Edutrip Pulau Belitung — SMA, Mahasiswa & Umum (Rp 4.000.000 - Rp 5.000.000)",
	"Edutrip Pulau Lembata — SMA, Mahasiswa & Umum (Rp 4.000.000 - Rp 6.000.000)",
	"Edutrip Pulau Maratua — SMA, Mahasiswa & Umum (Rp 4.000.000 - Rp 7.000.000)",
	"Edutrip Banda Neira — SMA, Mahasiswa & Umum (Rp 4.000.000 - Rp 7.000.000)",
];

const statusOptions = [
	"SD/SMP",
	"SMA/MAHASISWA",
	"MASYARAKAT UMUM",
];

const FormEdutrip = ({
	isOpen,
	onClose,
	selectedPackage,
	setSelectedPackage,
	availablePackages,
}) => {
	const packagesToDisplay =
		availablePackages && availablePackages.length > 0
			? availablePackages
			: selectedPackage
			? [selectedPackage]
			: packageOptions;

	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		whatsapp: "",
		status: "SD/SMP",
		packageOption: selectedPackage || (packagesToDisplay.length > 0 ? packagesToDisplay[0] : ""),
		notes: "",
	});

	// Sync when selectedPackage or availablePackages changes
	useEffect(() => {
		let correspondingStatus = "SD/SMP";
		if (
			selectedPackage &&
			(selectedPackage.includes("SMA & Mahasiswa") ||
				selectedPackage.includes("SMA, Mahasiswa"))
		) {
			correspondingStatus = "SMA/MAHASISWA";
		} else if (
			selectedPackage &&
			selectedPackage.includes("Masyarakat Umum")
		) {
			correspondingStatus = "MASYARAKAT UMUM";
		}

		const currentPkg =
			selectedPackage ||
			(packagesToDisplay.length > 0 ? packagesToDisplay[0] : "");

		setFormData((prev) => ({
			...prev,
			packageOption: currentPkg,
			status: correspondingStatus,
		}));
	}, [selectedPackage, availablePackages]);

	// Close on Escape key
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	// Prevent scrolling when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		if (name === "packageOption" && setSelectedPackage) {
			setSelectedPackage(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.fullName.trim()) {
			Swal.fire({
				title: "Nama Lengkap Diperlukan",
				text: "Silakan masukkan nama lengkap kamu.",
				icon: "warning",
				confirmButtonColor: "#25D366",
			});
			return;
		}

		if (!formData.email.trim()) {
			Swal.fire({
				title: "Email Diperlukan",
				text: "Silakan masukkan alamat email yang valid.",
				icon: "warning",
				confirmButtonColor: "#25D366",
			});
			return;
		}

		if (!formData.whatsapp.trim()) {
			Swal.fire({
				title: "Nomor WhatsApp Diperlukan",
				text: "Silakan masukkan nomor WhatsApp kamu agar tim kami dapat menghubungi.",
				icon: "warning",
				confirmButtonColor: "#25D366",
			});
			return;
		}

		const template = 
`Nama : ${formData.fullName.trim()}
Email : ${formData.email.trim()}
Nomor Whatsapp : ${formData.whatsapp.trim()}
Status : ${formData.status}
Pilihan Paket : ${formData.packageOption}
Catatan : ${formData.notes && formData.notes.trim() ? formData.notes.trim() : "-"}`;

		const waUrl = `https://wa.me/6282386335323?text=${encodeURIComponent(template)}`;

		// Open WhatsApp directly with the filled template
		window.open(waUrl, "_blank");

		// Reset form and close modal
		setFormData({
			fullName: "",
			email: "",
			whatsapp: "",
			status: statusOptions[0],
			packageOption: packagesToDisplay.length > 0 ? packagesToDisplay[0] : "",
			notes: "",
		});

		onClose();
	};

	return (
		<div
			className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-2xl bg-white rounded-[32px] p-6 sm:p-10 shadow-2xl my-8 border border-slate-100 max-h-[95vh] overflow-y-auto"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					type="button"
					onClick={onClose}
					className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-200 focus:outline-none"
					aria-label="Tutup formulir"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<form onSubmit={handleSubmit} noValidate className="pt-2">
					{/* Grid for Name and Email */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
						<div>
							<label
								htmlFor="fullName"
								className="block text-gray-800 font-medium text-sm sm:text-base mb-2"
							>
								Nama Lengkap
							</label>
							<input
								id="fullName"
								type="text"
								name="fullName"
								value={formData.fullName}
								onChange={handleChange}
								placeholder="Nama lengkap kamu"
								className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm sm:text-base"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-gray-800 font-medium text-sm sm:text-base mb-2"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="nama@email.com"
								className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm sm:text-base"
							/>
						</div>
					</div>

					{/* Grid for WhatsApp and Status */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
						<div>
							<label
								htmlFor="whatsapp"
								className="block text-gray-800 font-medium text-sm sm:text-base mb-2"
							>
								Nomor WhatsApp
							</label>
							<input
								id="whatsapp"
								type="tel"
								name="whatsapp"
								value={formData.whatsapp}
								onChange={handleChange}
								placeholder="08xxxxxxxxxx"
								className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm sm:text-base"
							/>
						</div>

						<div>
							<label
								htmlFor="status"
								className="block text-gray-800 font-medium text-sm sm:text-base mb-2"
							>
								Status
							</label>
							<div className="relative">
								<select
									id="status"
									name="status"
									value={formData.status}
									onChange={handleChange}
									className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm sm:text-base pr-10 cursor-pointer"
								>
									{statusOptions.map((opt, i) => (
										<option key={i} value={opt}>
											{opt}
										</option>
									))}
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>

					{/* Pilihan Paket */}
					<div className="mb-5">
						<label
							htmlFor="packageOption"
							className="block text-gray-800 font-medium text-sm sm:text-base mb-2"
						>
							Pilihan Paket
						</label>
						{packagesToDisplay.length > 1 ? (
							<div className="relative">
								<select
									id="packageOption"
									name="packageOption"
									value={formData.packageOption}
									onChange={handleChange}
									className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm sm:text-base pr-10 cursor-pointer"
								>
									{packagesToDisplay.map((opt, i) => (
										<option key={i} value={opt}>
											{opt}
										</option>
									))}
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>
						) : (
							<div className="relative">
								<div
									id="packageOption"
									className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50 text-gray-800 font-semibold text-sm sm:text-base leading-relaxed break-words whitespace-normal"
								>
									{formData.packageOption}
								</div>
							</div>
						)}
					</div>

					{/* Catatan (opsional) */}
					<div className="mb-7">
						<label
							htmlFor="notes"
							className="block text-gray-800 font-medium text-sm sm:text-base mb-2"
						>
							Catatan (opsional)
						</label>
						<textarea
							id="notes"
							name="notes"
							rows={3}
							value={formData.notes}
							onChange={handleChange}
							placeholder="Tanggal yang diinginkan, jumlah peserta, pertanyaan, dll."
							className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm sm:text-base resize-y"
						/>
					</div>

					{/* Submit Button with WhatsApp Green & Logo */}
					<button
						type="submit"
						className="w-full py-4 px-6 rounded-full font-bold text-white text-base sm:text-lg bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1caa52] shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
					>
						<BsWhatsapp className="text-xl sm:text-2xl" />
						<span>Kirim Pendaftaran</span>
					</button>

					{/* Disclaimer note */}
					<p className="text-center text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed">
						Dengan mendaftar, kamu menyetujui untuk dihubungi tim MaritimPreneur terkait trip ini.
					</p>
				</form>
			</div>
		</div>
	);
};

export default FormEdutrip;
