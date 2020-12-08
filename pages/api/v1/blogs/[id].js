import BlogApi from "@/lib/api/blogs";
import auth0 from "@/utils/auth0";

export default async function handleBlog(req, res) {
	if (req.method === "GET") {
		const json = await new BlogApi().getById(req.query.id);
		return res.json(json.data);
	} else if (req.method === "PATCH") {
		try {
			const { accessToken } = await auth0.getSession(req);
			const json = await new BlogApi(accessToken).update(
				req.query.id,
				req.body
			);
			return res.status(204).json(json.data);
		} catch (err) {
			return res.status(err.response.status || 400).json(err.response.data);
		}
	}
}
