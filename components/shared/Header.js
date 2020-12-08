import React, { useState } from "react";
import Link from "next/link";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import ReactResizeDetector from "react-resize-detector";
import ActiveLink from "components/shared/ActiveLink";

import { isAuthorised } from "@/utils/auth0";

const BsNavLink = (props) => {
	const { href, title, className = "" } = props;
	return (
		<ActiveLink activeClassName="active" href={href}>
			<a className={`nav-link port-navbar-link ${className}`}>{title}</a>
		</ActiveLink>
	);
};

const BsNavBrand = () => (
	<Link href="/">
		<a className="navbar-brand port-navbar-brand">Filip Jerga</a>
	</Link>
);

const LoginLink = () => (
	<a className="nav-link port-navbar-link" href="/api/v1/login">
		Login
	</a>
);
{
	/* <BsNavLink href="/api/v1/login" title="Login" />; */
}

const LogoutLink = () => (
	<a className="nav-link port-navbar-link" href="/api/v1/logout">
		Logout
	</a>
);

const AdminMenu = () => {
	const [isOpen, setIsopen] = useState(false);
	return (
		<Dropdown
			className="port-navbar-link port-dropdown-menu"
			nav
			isOpen={isOpen}
			toggle={() => setIsopen(!isOpen)}>
			<DropdownToggle className="port-dropdown-toggle" nav caret>
				Admin
			</DropdownToggle>
			<DropdownMenu right>
				<DropdownItem>
					<BsNavLink
						className="port-dropdown-item"
						href="/portfolios/new"
						title="Create Portfolio"
					/>
				</DropdownItem>
				<DropdownItem>
					<BsNavLink
						className="port-dropdown-item"
						href="/blogs/editor"
						title="Blog Editor"
					/>
				</DropdownItem>
				<DropdownItem>
					<BsNavLink
						className="port-dropdown-item"
						href="/dashboard"
						title="Dashboard"
					/>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

const Header = ({ user, loading, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<ReactResizeDetector handleWidth>
			{({ width }) => (
				<Navbar
					className={`port-navbar port-default absolute ${className} ${
						width < 768 && isOpen ? "is-open" : "is-closed"
					}`}
					dark
					expand="md">
					<BsNavBrand />

					<NavbarToggler onClick={toggle} />

					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem className="port-navbar-item">
								<BsNavLink href="/" title="Home" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink href="/about" title="About" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink href="/portfolios" title="Portfolios" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink href="/blogs" title="Blogs" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink href="/cv" title="Cv" />
							</NavItem>
							{/* 
						<NavItem className="port-navbar-item">
							<BsNavLink href="/secret" title="Secret" />
						</NavItem>
						<NavItem className="port-navbar-item">
							<BsNavLink href="/secretssr" title="Secret SSR" />
						</NavItem>
						<NavItem className="port-navbar-item">
							<BsNavLink href="/onlyadmin" title="Admin only" />
						</NavItem>
						<NavItem className="port-navbar-item">
							<BsNavLink href="/onlyadminssr" title="Only Admin SSE" />
						</NavItem>
						*/}
						</Nav>
						<Nav navbar>
							{!loading && (
								<>
									{user && (
										<>
											{isAuthorised(user, "admin") && <AdminMenu />}
											<NavItem className="port-navbar-item">
												<LogoutLink />
											</NavItem>
										</>
									)}
									{!user && (
										<NavItem className="port-navbar-item">
											<LoginLink />
										</NavItem>
									)}
								</>
							)}
						</Nav>
					</Collapse>
				</Navbar>
			)}
		</ReactResizeDetector>
	);
};

export default Header;
