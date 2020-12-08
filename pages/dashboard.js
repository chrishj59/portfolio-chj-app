import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "hoc/withAuth";
import MastHead from "Components/shared/Masthead";
import PortDropdown from "components/shared/Dropdown";
import { toast } from "react-toastify";

import { useUpdateBlog, useGetUserBlogs } from "actions/blogs";

const Dashboard = ({ user, loading }) => {
	const [updateBlog] = useUpdateBlog();
	const { data: blogs, error, mutate } = useGetUserBlogs();
	// console.log(data);
	// const blogs = [];

	const changeBlogStatus = async (blogId, status) => {
		updateBlog(blogId, { status })
			.then(() => mutate())
			.catch(() => toast.error("Could not updated blog"));
	};

	const createOption = (blogStatus) => {
		return blogStatus === "draft"
			? { view: "Publish story", value: "published" }
			: { view: "Make a Draft", value: "draft" };
	};

	const createOptions = (blog) => {
		const option = createOption(blog.status);

		return [
			{
				key: `${blog._id}-published`,
				text: option.view,
				handlers: {
					onClick: () => {
						changeBlogStatus(blog._id, option.value);
					},
				},
			},
			{
				key: `${blog._id}-delete`,
				text: "Delete",
				handlers: {
					onClick: () => {
						changeBlogStatus(blog._id, "deleted");
					},
				},
			},
		];
	};
	const renderBlogs = (blogs, status) => {
		return (
			<ul className="user-blogs-list">
				{blogs
					?.filter((blog) => blog.status === status)
					.map((blog) => {
						return (
							<li key={blog._id}>
								<Link
									href="/blogs/editor/[id]"
									as={`/blogs/editor/${blog._id}`}>
									<a>{blog.title}</a>
								</Link>

								<PortDropdown items={createOptions(blog)} />
							</li>
						);
					})}
			</ul>
		);
	};
	return (
		<BaseLayout navClass="transparent" user={user} loading={loading}>
			{/* MASTHEAD */}
			<MastHead imagePath="/images/home-bg.jpg">
				<h1>Blogs Dashboard</h1>
				<span className="subheading">
					Let's write some nice blog today{" "}
					<Link href="/blogs/editor">
						<Button color="primary">Create a new Blog</Button>
					</Link>
				</span>
			</MastHead>
			{/* MASTHEAD */}
			<BasePage className="blog-user-page">
				<Row>
					<Col md="6" className="mx-auto text-center">
						<h2 className="blog-status-title"> Published Blogs </h2>
						{renderBlogs(blogs, "published")}
					</Col>
					<Col md="6" className="mx-auto text-center">
						<h2 className="blog-status-title"> Draft Blogs </h2>
						{renderBlogs(blogs, "draft")}
					</Col>
				</Row>
			</BasePage>
		</BaseLayout>
	);
};

export default withAuth(Dashboard)("admin");
