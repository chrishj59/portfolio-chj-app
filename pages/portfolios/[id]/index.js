import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { formatDate } from "helpers/functions";

import { useGetUser } from "@/actions/user";
import { useRouter } from "next/router";

import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
	const router = useRouter();
	const { data: dataU, loading: loadingU } = useGetUser();

	if (router.isFallback) {
		return <h1>Loading portfolio....</h1>;
	}
	return (
		<BaseLayout navclassName="transparent" user={dataU} loading={loadingU}>
			<BasePage
				noWrapper
				indexPage
				title={`${portfolio.title} - Chris`}
				metaDescription={`${portfolio.description}`}>
				<div className="portfolio-detail">
					<div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
						<main role="main" className="inner page-cover">
							{router.isFallback && (
								<h1 className="cover-heading">'Loading portfolio ....'</h1>
							)}
							{!router.isFallback && (
								<>
									<h1 className="cover-heading">{portfolio.title}</h1>
									<p className="lead dates">
										{formatDate(portfolio.startDate)} -{" "}
										{formatDate(portfolio.endDate) || "Current"}
									</p>
									<p className="lead info mb-0">
										{portfolio.jobTitle} | {portfolio.company} |{" "}
										{portfolio.location}
									</p>
									<p className="lead">{portfolio.description}</p>
									<p className="lead">
										<a
											href={portfolio.companyWebsite}
											target="_"
											className="btn btn-lg btn-secondary">
											Visit Company
										</a>
									</p>
								</>
							)}
						</main>
					</div>
				</div>
			</BasePage>
		</BaseLayout>
	);
};

// export async function getServerSideProps({ query }) {
// 	const json = await new PortfolioApi().getById(query.id);
// 	const portfolio = json.data;
// 	return {
// 		props: { portfolio },
// 	};
//}

// Function executed at build time
export async function getStaticPaths() {
	const json = await new PortfolioApi().getAll();
	const portfolios = json.data;

	//get paths want to pre-render based on portfolio id
	const paths = portfolios.map((portfolio) => {
		return {
			params: { id: portfolio._id },
		};
	});

	// fallback:false  = not found pages will be resolved into 404 page
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const json = await new PortfolioApi().getById(params.id);
	const portfolio = json.data;
	return { props: { portfolio }, revalidate: 1 };
}
export default Portfolio;
