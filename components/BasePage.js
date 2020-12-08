import { Fragment } from "react";
import { Container } from "reactstrap";
import Head from "next/head";
import { useRouter } from "next/router";

const PageHeader = ({ header }) => (
	<div className="page-header">
		<h1 className="page-header-title">{header}</h1>
	</div>
);

const BasePage = (props) => {
	const {
		className = "no-wrapper",
		indexPage,
		noWrapper,
		header,
		title = "Chris's Next jS portfolio",
		metaDescription = "My name is Chris and I am an experiened ERP functional consultant branching into freelance development using modern tools such as React and Node",
		canonocalPath,
		children,
	} = props;
	const router = useRouter();
	const pageType = indexPage ? "index-page" : "base-page";
	const Wrapper = noWrapper ? Fragment : Container;
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device=width" />
				<meta name="description" key="description" content={metaDescription} />
				<meta name="title" key="title" content={title} />
				<meta property="og:title" key="og:title" content={title} />
				<meta property="og:locale" key="og:locale" content="en_GB" />
				<meta
					property="og:url"
					key="og:url"
					content={`${process.env.BASE_URL}${router.asPath}`}
				/>
				<meta property="og:type" key="og:type" content="website" />
				<meta
					property="og:description"
					key="og:description"
					content={metaDescription}
				/>
				<meta
					property="og:image"
					key="og:image"
					content={`${process.env.BASE_URL}/images/section-1.png`}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;1,400&display=swap"
					rel="stylesheet"
				/>

				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<link
					rel="canoncial"
					href={`${process.env.BASE_URL}${
						canonocalPath ? canonocalPath : router.asPath
					}`}
				/>
			</Head>
			<div className={`${pageType} ${className}`}>
				{
					<Wrapper>
						{header && <PageHeader header={header} />}
						{children}
					</Wrapper>
				}
			</div>
		</>
	);
};

export default BasePage;
