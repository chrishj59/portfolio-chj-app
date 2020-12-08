import React, { Component, Fragment } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { authoriseUser, withAuth } from "@/utils/auth0";
//import { withAuth } from "../utils/auth0";

const SecretSSR = ({ user, title }) => {
	return (
		<BaseLayout user={user} loading={false}>
			<BasePage>
				<div>
					<h1>
						This is the secret page - SSR need to be logged in :{" "}
						{user && user.name}
					</h1>
					<h2>{title}</h2>
				</div>
			</BasePage>
		</BaseLayout>
	);
};

// This is executed on server side not sent to browser
// export const getServerSideProps = async ({ req, res }) => {
// 	const user = await authoriseUser(req, res);

// 	return {
// 		props: { user },
// 	};
//const session = await auth0.getSession(req);

// if (!session || !session.user) {                       refactor out
// 	res.writeHead(302, {
// 		Location: "./api/v1/login", // redirect taget
// 	});
// 	res.end();
// 	return { props: {} };
// } else {
// 	return {
// 		props: { user: session.user },
// 	};
// }
// };

const getTitle = () => {
	return new Promise((res) => {
		setTimeout(() => {
			res({ title: "My new Title!!" });
		}, 500);
	});
};
export const getServerSideProps = withAuth(async ({ req, res }, user) => {
	// to also provide data in addition to user auth
	const title = await getTitle();
	return title;
})();
export default SecretSSR;
