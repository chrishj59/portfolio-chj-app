import { useGetUser } from "@/actions/user";
import Redirect from "@/components/shared/Redirect";
import { isAuthorised } from "@/utils/auth0";

// add funtion to the chain of functions called
const withAuth = (Component) => (role) => {
	return (props) => {
		const { data, loading } = useGetUser();

		if (loading) {
			return <p> Loading...</p>;
		}
		// window object not available on server only browser
		if (!data && typeof window !== "undefined") {
			return <Redirect ssr to="/api/v1/login" />;
		} else {
			if (role && !isAuthorised(data, role)) {
				return <Redirect ssr to="/api/v1/login" />;
			}
			return <Component user={data} loading={loading} {...props} />;
		}
	};
};

export default withAuth;
