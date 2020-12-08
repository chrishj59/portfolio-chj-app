import React, { Component, Fragment } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import BlogApi from "lib/api/blogs";
import { Row, Col } from "reactstrap";
import { SlateView } from "slate-simple-editor";
import Avatar from "components/shared/Avatar";

const BlogDetail = ({ blog, authour }) => {
	const { data, loading } = useGetUser();

	return (
		<BaseLayout user={data} loading={loading}>
			<BasePage
				title={`${blog.title} - Chris `}
				metaDescription={`${blog.subTitle}`}
				className="slate-container">
				<Row>
					<Col md={{ size: 8, offset: 2 }}>
						<Avatar
							image={authour.picture}
							title={authour.name}
							date={blog.createdAt}
						/>
						<hr />
						<SlateView initialContent={blog.content} />
					</Col>
				</Row>
			</BasePage>
		</BaseLayout>
	);
};

export async function getStaticPaths() {
	const { data } = await new BlogApi().getAll();
	// const blogs = json.data;
	const paths = data.map(({ blog }) => ({ params: { slug: blog.slug } }));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const {
		data: { blog, authour },
	} = await new BlogApi().getBySlug(params.slug);
	return { props: { blog, authour } };
}

export default BlogDetail;
