import { useState } from "react";
import useSWR from "swr";
import { Row, Col, Button } from "reactstrap";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
//import { useGetPosts } from "@/actions";
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";
import { useDeletePortfolio } from "@/actions/portfolios";
import PortfolioApi from "@/lib/api/portfolios";
import PortfolioCard from "@/components/PortfolioCard";
import { isAuthorised } from "@/utils/auth0";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Portfolios = ({ portfolios: initialPortfolios }) => {
	//const { data, error, loading } = useGetPosts();
	const router = useRouter();
	const [portfolios, setPortfolios] = useState(initialPortfolios);
	const [deletePortfolio, { data, error }] = useDeletePortfolio();
	const { data: dataU, loadingU } = useGetUser();

	const _deletePortfolio = async (e, portFolioId) => {
		e.stopPropagation();
		const isConfirm = confirm(
			"Are you sure you want to delete this portfolio?"
		);
		if (isConfirm) {
			await deletePortfolio(portFolioId);
			setPortfolios(portfolios.filter((p) => p._id !== portFolioId));
		}
	};

	return (
		<BaseLayout navbarClass="transparent" user={dataU} loading={loadingU}>
			<BasePage
				title="Newest Portfolios"
				metaDescription="Summary of my main jobs"
				header="Portfolios"
				className={"portfolio-page"}>
				<Row>
					{portfolios.map((portfolio) => (
						<Col
							md="4"
							key={portfolio._id}
							onClick={() => {
								router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
							}}>
							<PortfolioCard portfolio={portfolio}>
								{dataU && isAuthorised(dataU, "admin") && (
									<>
										<Button
											onClick={(e) => {
												e.stopPropagation();
												router.push(
													"/portfolios/[id]/edit",
													`/portfolios/${portfolio._id}/edit`
												);
											}}
											className="mr-2"
											color="warning">
											Edit
										</Button>
										<Button
											onClick={(e) => _deletePortfolio(e, portfolio._id)}
											color="danger">
											Delete
										</Button>
									</>
								)}
							</PortfolioCard>
						</Col>
					))}
				</Row>
				;
			</BasePage>
		</BaseLayout>
	);
};

// called during build time
// Improve performance of the page.
// Static page with dynamic data

export async function getStaticProps() {
	const json = await new PortfolioApi().getAll();
	const portfolios = json.data;
	return {
		props: { portfolios },
		revalidate: 1,
	};
}
export default Portfolios;
