import React, { Component, Fragment } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import BlogApi from "lib/api/blogs";
import { Row, Col } from "reactstrap";
import { SlateView } from "slate-simple-editor";
import Avatar from "components/shared/Avatar";
import { useRouter } from "next/router";

const BlogDetail = ({ blog, authour }) => {
	const { data, loading } = useGetUser();
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading blog</div>;
	}

	return (
		<BaseLayout user={data} loading={loading}>
			<BasePage
				title={`${blog.title} - Chris `}
				metaDescription={`${blog.subTitle}`}
				className="slate-container">
				<Row>
					<Col md={{ size: 8, offset: 2 }}>
						{router.isFallback && <h1>Loading blog.....</h1>}
						{!router.isFallback && (
							<>
								<Avatar
									image={authour.picture}
									title={authour.name}
									date={blog.createdAt}
								/>
								<hr />
								<SlateView initialContent={blog.content} />
							</>
						)}
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
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const {
		data: { blog, authour },
	} = await new BlogApi().getBySlug(params.slug);
	return { props: { blog, authour }, revalidate: 1 };
}

export default BlogDetail;
