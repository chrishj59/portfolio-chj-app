import React, { Component, Fragment } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";

const Secret = ({ user, loading }) => {
	if (loading) {
		return <p> Loading...</p>;
	}

	return (
		<BaseLayout user={user} loading={loading}>
			<BasePage>
				<div>This is the secret page - need to be logged in : {user.name}</div>
			</BasePage>
		</BaseLayout>
	);
};

/* High order component HOC
1. Simple function that takes and component and returns a new component 
   with extended functionality
2. Prefix key word  with

*/
//export default Secret;

// function withAuth(Component) {
// 	return function (props) {
// 		return <Component title="hello world" {...props} />;
// 	};
// }

// const withAuth = (Component) => {
// 	return (props) => {
// 		return <Component title="hello world" {...props} />;
// 	};
// };

// //const withAuth = (Component) => (props) => (
// 	<Component title="hello world" {...props} />
// );

export default withAuth(Secret)();
