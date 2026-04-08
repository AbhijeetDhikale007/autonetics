import fs from 'fs';
import path from 'path';

export const load = () => {
	const result = {
		college: [] as string[],
		inhouse: [] as string[]
	};

	try {
        // Resolve the static directory relative to the process cwd.
		const staticDir = path.resolve('static', 'Gallery');

		const collegePath = path.join(staticDir, 'College');
		if (fs.existsSync(collegePath)) {
			result.college = fs.readdirSync(collegePath)
				.filter((f: string) => /\.(png|jpe?g|gif|webp)$/i.test(f))
				.map((f: string) => `/Gallery/College/${f}`);
		}

		const inhousePath = path.join(staticDir, 'Inhouse');
		if (fs.existsSync(inhousePath)) {
			result.inhouse = fs.readdirSync(inhousePath)
				.filter((f: string) => /\.(png|jpe?g|gif|webp)$/i.test(f))
				.map((f: string) => `/Gallery/Inhouse/${f}`);
		}
	} catch (e) {
		console.error("Error reading gallery directories:", e);
	}

	return { gallery: result };
};
