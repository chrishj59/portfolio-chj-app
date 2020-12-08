import axios from "axios";
import BaseApi from "./BaseApi";

class BlogApi extends BaseApi {
	constructor(accessToken = null) {
		super(accessToken, "/blogs");
	}
}

export default BlogApi;
