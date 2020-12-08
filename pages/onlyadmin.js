import React, { Component, Fragment } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";

const OnlyAdmin = ({ user, loading }) => {
	if (loading) {
		return <p> Loading...</p>;
	}

	return (
		<BaseLayout user={user} loading={loading}>
			<BasePage>
				<div>I am admin page - User logged in : {user.name}</div>
			</BasePage>
		</BaseLayout>
	);
};

export default withAuth(OnlyAdmin)("admin");
