import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import PortfolioaApi from "@/lib/api/portfolios";
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";
import withAuth from "@/hoc/withAuth";
import { useGetPortfolio, useUpdatePortfolio } from "@/actions/portfolios";
import PortfolioForm from "@/components/PortfolioForm";
import { Row, Col } from "reactstrap";
import { toast, Toast } from "react-toastify";

const PortfolioEdit = ({ user }) => {
	const router = useRouter();
	const [updatePortfolio, { error }] = useUpdatePortfolio();

	const { data: initialData } = useGetPortfolio(router.query.id);

	const _updatePortfolio = async (data) => {
		await updatePortfolio(router.query.id, data);
		toast.success("Portfolio has been updated successfully!", {
			autoClose: 2000,
		});
	};

	return (
		<BaseLayout user={user} loading={false}>
			<BasePage title="Portfolio Edit">
				<Row>
					<Col md="8">
						{initialData && (
							<PortfolioForm
								onSubmit={_updatePortfolio}
								initialData={initialData}
							/>
						)}
						{error && <div className="alert alert-danger mt-2">{error}</div>}
					</Col>
				</Row>
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

export default withAuth(PortfolioEdit)("admin");
