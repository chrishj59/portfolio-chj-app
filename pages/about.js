import React, { Component, Fragment, useEffect } from "react";
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Row, Col } from "reactstrap";
import { useGetUser } from "@/actions/user";

const About = (props) => {
	const { data, loading } = useGetUser();

	useEffect(() => {
		return () => {
			window.__isAboutLoaded = true;
		};
	});

	const createFadeInClass = () => {
		if (typeof window !== "undefined") {
			// in browser
			return window.__isAboutLoaded ? "" : "fadein";
		}
		return "fadein";
	};

	return (
		<BaseLayout user={data} loading={loading}>
			<BasePage title="About me - Chris " className="about-page">
				<Row className="mt-5">
					<Col md="6">
						<div className="left-side">
							<h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
							<h4 className={`subtitle ${createFadeInClass()}`}>About Page</h4>
							<p className={`subsubTitle ${createFadeInClass()}`}>
								Feel free to the read short description about me.
							</p>
						</div>
					</Col>
					<Col md="6">
						<div className={`${createFadeInClass()}`}>
							<p>
								My name is Chris and I am an experiened ERP functional
								consultant branching into freelance development using modern
								tools such as React and Node.{" "}
							</p>
							<p>
								I am a qualified accountant who has moved into SAP configuration
								and development within the Finance and Asset management modules.
								With the advent of S/4HANA I have extended my skillset to
								include modern web technologies including React, Next (server
								side rendering), NodeJs, Postgresql and MongoDB databases
							</p>

							<p>
								Throughout my career, I have acquired advanced technical
								knowledge and the ability to explain their use and benefits in
								an understandable way.
							</p>
						</div>
					</Col>
				</Row>
			</BasePage>
		</BaseLayout>
	);
};

export default About;
