import axios from "axios";
import BaseApi from "./BaseApi";

class PortfolioApi extends BaseApi {
	constructor(accessToken = null) {
		super(accessToken, "/portfolios");
	}

	async delete(id) {
		return await axios.delete(`${this.apiUrl}/${id}`, this.config);
	}
}

export default PortfolioApi;
