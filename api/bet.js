let bet = {}; // in-memory store (resets on redeploy)

export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    return res.status(200).json(bet);
  }

  if (method === "POST") {
    bet = req.body;
    return res.status(200).json({ message: "Bet updated", bet });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
