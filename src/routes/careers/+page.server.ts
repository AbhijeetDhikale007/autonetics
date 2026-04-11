import fs from 'fs';
import path from 'path';
import { resolve } from "$app/paths";

export const load = () => {
	let students = [] as Array<{ src: string, name: string }>;

	try {
		const staticDir = path.resolve('static', 'Careers', 'Students');
		if (fs.existsSync(staticDir)) {
			students = fs.readdirSync(staticDir)
				.filter((f: string) => /\.(png|jpe?g|gif|webp)$/i.test(f))
				.map((f: string) => {
					let rawName = f.split('.')[0];
					let displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
					return {
						src: resolve(`/Careers/Students/${f}`),
						name: displayName
					};
				});
		}
	} catch (e) {
		console.error("Error reading students directory:", e);
	}

	return { students };
};
