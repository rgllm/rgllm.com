import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";
import { getDescription, getFavicon, getTitle } from "lib/crawler";
import toJson from "lib/to-json";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		try {
			const allBookmarks = await prisma.bookmark.findMany();

			return res.status(200).json(toJson(allBookmarks));
		} catch (e) {
			return res.status(500).json({ message: e.message });
		}
	}

	if (req.method === "POST") {
		try {
			const websiteUrl = req?.body?.link;

			if (!websiteUrl) {
				throw Error("No link provided");
			}

			const title = await getTitle(websiteUrl);
			const description = await getDescription(websiteUrl);
			const favicon = getFavicon(websiteUrl);

			const newEntry = await prisma.bookmark.upsert({
				where: {
					link: websiteUrl,
				},
				update: {
					title: title,
					description: description,
					favicon: favicon,
					link: websiteUrl,
				},
				create: {
					title: title,
					description: description,
					favicon: favicon,
					link: websiteUrl,
				},
			});

			return res.status(200).json({
				id: newEntry.id.toString(),
				created_at: newEntry.created_at.toString(),
				title: newEntry.title,
				description: newEntry.description,
				favicon: newEntry.favicon,
				link: newEntry.link,
			});
		} catch (e) {
			return res.status(500).json({ message: e.message });
		}
	}

	return res.send("Method not allowed.");
}
