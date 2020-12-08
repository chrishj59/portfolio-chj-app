import React, { Component, Fragment } from "react";
import { useRouter } from "next/router";
import BaseLayout from "@/components/layouts/BaseLayout";

import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { Editor } from "slate-simple-editor";
import { useUpdateBlog, useGetBlog } from "actions/blogs";
import { toast } from "react-toastify";

import "slate-simple-editor/dist/index.css";

const BlogUpdateEditor = ({ user, loading }) => {
	const router = useRouter();
	const { data } = useGetBlog(router.query.id);
	const [
		updateBlog,
		{ data: updatedBlog, error, loading: isBlogSaving },
	] = useUpdateBlog();

	const _updateBlog = async (data) => {
		await updateBlog(router.query.id, data);
		toast.success("Blog updated");
	};
	if (error) {
		toast.error(error);
	}
	return (
		<BaseLayout user={user} loading={loading}>
			<BasePage>
				{data && data.content && (
					<Editor
						header="Update your blog...."
						onSave={_updateBlog}
						initialContent={data.content}
						loading={isBlogSaving}
					/>
				)}
			</BasePage>
		</BaseLayout>
	);
};

export default withAuth(BlogUpdateEditor)("admin");
