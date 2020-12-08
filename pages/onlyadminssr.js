import React, { Component, Fragment } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { authoriseUser, withAuth } from "@/utils/auth0";
//import { withAuth } from "../utils/auth0";

const OnlyAdminSSR = ({ user, title }) => {
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
})("admin");
export default OnlyAdminSSR;
