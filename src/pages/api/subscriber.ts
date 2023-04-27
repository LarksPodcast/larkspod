// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch("https://api.getresponse.com/v3/contacts", {
    method: req.method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "X-Auth-Token": `api-key ${process.env.NEXT_PUBLIC_LARKS_NEWSLETTER_API_KEY}`,
    },
    body: JSON.stringify(req.body),
  });

  if (response.status === 202) {
    res.status(response.status).json({
      status: response.status,
      statusText: "Accepted",
      message: "Data has been validated and added to queue",
    });

    return;
  }

  if (response.status === 409) {
    res.status(response.status).json({
      status: response.status,
      statusText: "Conflict",
      message: "There seem to be a conflict with an existing data",
    });

    return;
  }

  res.status(response.status).json({
    status: 500,
    statusText: "Internal server error",
    message: "There seem to be a server problem",
  });
}
