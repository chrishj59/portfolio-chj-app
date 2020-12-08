import PortfolioApi from "@/lib/api/portfolios";
import auth0 from "@/utils/auth0";

export default async function handlePortfolio(req, res) {
	if (req.method === "GET") {
		const json = await new PortfolioApi().getById(req.query.id);
		return res.json(json.data);
	} else if (req.method === "PATCH") {
		try {
			const { accessToken } = await auth0.getSession(req);
			const json = await new PortfolioApi(accessToken).update(
				req.query.id,
				req.body
			);
			return res.status(204).json(json.data);
		} catch (err) {
			return res.status(err.response.status || 400).json(err.response.data);
		}
	} else if (req.method === "DELETE") {
		const { accessToken } = await auth0.getSession(req);
		const json = await new PortfolioApi(accessToken).delete(req.query.id);
		return res.status(204).json(json.data);
	}
}
