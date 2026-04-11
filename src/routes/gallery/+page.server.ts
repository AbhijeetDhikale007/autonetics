import fs from 'fs';
import path from 'path';
import { resolve } from "$app/paths";

export const load = async ({ fetch }) => {
	const result = {
		college: [] as string[],
		inhouse: [] as string[],
		industrialVideos: [] as string[]
	};

	try {
		// Resolve the static directory relative to the process cwd.
		const staticDir = path.resolve('static', 'Gallery');

		const collegePath = path.join(staticDir, 'College');
		if (fs.existsSync(collegePath)) {
			result.college = fs.readdirSync(collegePath)
				.filter((f: string) => /\.(png|jpe?g|gif|webp)$/i.test(f))
				.map((f: string) => resolve(`/Gallery/College/${f}`));
		}

		const inhousePath = path.join(staticDir, 'Inhouse');
		if (fs.existsSync(inhousePath)) {
			result.inhouse = fs.readdirSync(inhousePath)
				.filter((f: string) => /\.(png|jpe?g|gif|webp)$/i.test(f))
				.map((f: string) => resolve(`/Gallery/Inhouse/${f}`));
		}
	} catch (e) {
		console.error("Error reading gallery directories:", e);
	}

	try {
		// Fetch latest videos from YouTube RSS
		const feedRes = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCOfwRpXaZ1-o6E3qVZjQqLA');
		if (feedRes.ok) {
			const text = await feedRes.text();
			const regex = /<yt:videoId>(.*?)<\/yt:videoId>/g;
			let match;
			while ((match = regex.exec(text)) !== null) {
				result.industrialVideos.push(match[1]);
			}
		}
	} catch (e) {
		console.error("Error fetching YouTube feed:", e);
	}

	return { gallery: result };
};
