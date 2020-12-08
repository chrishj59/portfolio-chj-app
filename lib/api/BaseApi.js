import axios from "axios";

class BaseApi {
	constructor(accessToken = null, subPath) {
		this.config = {};
		if (accessToken) {
			this.config.headers = {
				authorization: `Bearer ${accessToken}`,
			};
		}
		this.apiUrl = process.env.PORTFOLIO_API_URL + subPath;
	}

	async create(data) {
		return await axios.post(this.apiUrl, data, this.config);
	}

	getAll() {
		return axios.get(this.apiUrl);
	}

	getById(id) {
		return axios.get(`${this.apiUrl}/${id}`);
	}

	getByUser() {
		return axios.get(`${this.apiUrl}/me`, this.config);
	}

	getBySlug(slug) {
		return axios.get(`${this.apiUrl}/s/${slug}`);
	}

	async update(id, data) {
		return await axios.patch(`${this.apiUrl}/${id}`, data, this.config);
	}
}

export default BaseApi;
