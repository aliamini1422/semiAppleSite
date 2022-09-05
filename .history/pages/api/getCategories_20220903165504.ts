// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "category"] {
_id,
  ...
}`;

type Data = {
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanityClient.fetch("https://34pg9l1g.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22category%22%5D%20%7B%0A_id%2C%0A%20%20...%0A%7D");
  console.log(categories);
  res.status(200).json({ categories });
}