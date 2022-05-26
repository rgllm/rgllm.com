import type { NextApiRequest, NextApiResponse } from "next";

const axios = require("axios");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const result = await axios({
        url: "https://api.github.com/graphql",
        method: "POST",
        headers: {
          Authorization: `bearer ${process.env.GH_TOKEN}`,
        },
        data: {
          query: `
        query {
          repository(owner: "rgllm", name: "rgllm.com") {
            discussions(first:100, categoryId: "DIC_kwDOAtQYB84COZvx") {
              nodes {
                bodyHTML
                url
                updatedAt
                title
                publishedAt
                body
                category {
                  name
                }
            }
          }
        }
        }`,
        },
      });

      return res.status(200).json({ body: result?.data?.data?.repository });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(500).json({ error: "Method not allowed" });
}
