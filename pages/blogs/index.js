import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import MastHead from "components/shared/Masthead";
import BlogItem from "components/BlogItem";
import { useGetUser } from "@/actions/user";
import BlogApi from "lib/api/blogs";

const Blog = ({ blogs }) => {
	const { data, loading } = useGetUser();

	return (
		<BaseLayout
			navClass="transparent"
			className="blog-listing-page"
			user={data}
			loading={loading}>
			<MastHead imagePath="/images/home-bg.jpg">
				<h1>Fresh Blogs</h1>
				<span className="subheading">Programming, travelling...</span>
			</MastHead>

			<BasePage title="Newest blogs - Chris" className="blog-body">
				<Row>
					{blogs.map((blog) => (
						<Col key={blog._id} md="10" lg="8" className="mx-auto">
							<BlogItem blog={blog} />
							<hr></hr>
						</Col>
					))}
				</Row>
			</BasePage>
		</BaseLayout>
	);
};

export async function getStaticProps() {
	const { data } = await new BlogApi().getAll();
	const blogs = data.map((item) => ({ ...item.blog, authour: item.authour }));
	return { props: { blogs }, revalidate: 60 }; // reftesh after 1 monute 60 secs
}

export default Blog;
