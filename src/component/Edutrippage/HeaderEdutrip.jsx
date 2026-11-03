import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import IslandIllustration from "../../assets/edutrip/island-illustration.jpg";
import AOS from "aos";

const HeaderEdutrip = () => {
	const { t } = useContext(LanguageContext);
	const [processedImage, setProcessedImage] = useState(null);

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 1500,
		});

		// Process image to remove outer dark blue background so it blends seamlessly
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.src = IslandIllustration;
		img.onload = () => {
			try {
				const canvas = document.createElement("canvas");
				const w = img.naturalWidth || img.width;
				const h = img.naturalHeight || img.height;
				canvas.width = w;
				canvas.height = h;
				const ctx = canvas.getContext("2d");
				ctx.drawImage(img, 0, 0, w, h);

				const imgData = ctx.getImageData(0, 0, w, h);
				const data = imgData.data;

				// Sample 4 corners to detect outer background color
				const c1 = 0;
				const c2 = (w - 1) * 4;
				const c3 = (h - 1) * w * 4;
				const c4 = ((h - 1) * w + (w - 1)) * 4;

				const targetR = (data[c1] + data[c2] + data[c3] + data[c4]) / 4;
				const targetG = (data[c1 + 1] + data[c2 + 1] + data[c3 + 1] + data[c4 + 1]) / 4;
				const targetB = (data[c1 + 2] + data[c2 + 2] + data[c3 + 2] + data[c4 + 2]) / 4;

				// BFS Flood Fill from edges to remove only outer background
				const visited = new Uint8Array(w * h);
				const queue = new Int32Array(w * h);
				let head = 0;
				let tail = 0;

				const push = (x, y) => {
					const idx = y * w + x;
					if (!visited[idx]) {
						visited[idx] = 1;
						queue[tail++] = idx;
					}
				};

				for (let x = 0; x < w; x++) {
					push(x, 0);
					push(x, h - 1);
				}
				for (let y = 0; y < h; y++) {
					push(0, y);
					push(w - 1, y);
				}

				const threshold = 55;

				while (head < tail) {
					const curr = queue[head++];
					const px = curr % w;
					const py = Math.floor(curr / w);
					const dataIdx = curr * 4;

					const r = data[dataIdx];
					const g = data[dataIdx + 1];
					const b = data[dataIdx + 2];

					const dist = Math.sqrt(
						(r - targetR) * (r - targetR) +
						(g - targetG) * (g - targetG) +
						(b - targetB) * (b - targetB)
					);

					if (dist < threshold) {
						if (dist > threshold - 12) {
							const alpha = (dist - (threshold - 12)) / 12;
							data[dataIdx + 3] = Math.round(alpha * 255);
						} else {
							data[dataIdx + 3] = 0;
						}

						if (px > 0 && !visited[curr - 1]) {
							visited[curr - 1] = 1;
							queue[tail++] = curr - 1;
						}
						if (px < w - 1 && !visited[curr + 1]) {
							visited[curr + 1] = 1;
							queue[tail++] = curr + 1;
						}
						if (py > 0 && !visited[curr - w]) {
							visited[curr - w] = 1;
							queue[tail++] = curr - w;
						}
						if (py < h - 1 && !visited[curr + w]) {
							visited[curr + w] = 1;
							queue[tail++] = curr + w;
						}
					}
				}

				ctx.putImageData(imgData, 0, 0);
				setProcessedImage(canvas.toDataURL("image/png"));
			} catch (e) {
				console.warn("Could not remove background via canvas:", e);
			}
		};
	}, []);

	const isProcessed = Boolean(processedImage);

	return (
		<div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
			<div className="container xl:space-x-20 2xl:px-44 -mt-10 mb-20 mx-auto px-6 sm:px-16 py-8 items-center flex flex-col md:flex-row">
				<div className="md:w-1/2 md:pr-6" data-aos="fade-right">
					<p className="text-white font-bold text-3xl lg:text-5xl mb-6 text-team event-mt">
						{t("edutripheader1")}
					</p>
					<p className="text-white text-l sm:text-lg mb-8">
						{t("edutripheader2")}
					</p>
					<a
						href="#packages"
						className="inline-block px-6 py-3 text-sm font-semibold text-primary-color bg-white rounded-md hover:bg-primary-color hover:text-white transform hover:scale-105 transition-all duration-300 hover:border hover:border-white shadow-md"
					>
						{t("edutriplist")}
					</a>
				</div>
				<div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center" data-aos="fade-left">
					<img
						className="lg:max-w-lg max-w-sm sm:max-w-md w-full object-contain transform hover:scale-105 transition-all duration-300 pointer-events-none select-none"
						src={processedImage || IslandIllustration}
						alt="Pulau Pari Edutrip"
						style={
							!isProcessed
								? {
										maskImage:
											"radial-gradient(ellipse at center, rgba(0,0,0,1) 58%, rgba(0,0,0,0.8) 72%, rgba(0,0,0,0) 96%)",
										WebkitMaskImage:
											"radial-gradient(ellipse at center, rgba(0,0,0,1) 58%, rgba(0,0,0,0.8) 72%, rgba(0,0,0,0) 96%)",
								  }
								: {}
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default HeaderEdutrip;
