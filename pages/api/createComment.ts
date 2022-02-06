import type { NextApiRequest, NextApiResponse } from "next"
import sanityClient from "@sanity/client"

const config = {
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: "2020-03-25",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN
}

const client = sanityClient(config);

const createComment = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { _id, name, email, comment } = JSON.parse(req.body);

  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id
      },
      name,
      email,
      comment
    })
  } catch (err) {
    return res.status(500).json({ message: `Couldn't submit comment with following error: ${err}` })
  }

  return res.status(200).json({ message: "Comment submitted" });
}

export default createComment