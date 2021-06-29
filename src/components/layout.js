import * as React from 'react'


import { Link } from 'gatsby'
import { navBar } from "./layout.module.css";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    heroSection
} from './layout.module.css'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Me from './me';
import Contact from "./contact";
import Hero from './hero';

import { Container, Navbar, Nav } from "react-bootstrap";



const Layout = ({ pageTitle, children }) => {
    return (
        <div>

            <div className={heroSection}>

                <main className={container}>
                    <Hero pageTitle={pageTitle} >
                        <title>{pageTitle}</title>
                        <Navbar collapseOnSelect expand="lg" className={navBar}>
                            <Navbar.Brand></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <ul className={navLinks}>
                                        <li className={navLinkItem}>
                                            <Link to="/" className={navLinkText}>Home</Link>
                                        </li>
                                        <li className={navLinkItem}>
                                            <AnchorLink to="/#me"
                                                className={navLinkText}>About</AnchorLink>
                                        </li>
                                        <li className={navLinkItem}><AnchorLink to="/#contact" className={navLinkText}>Contact</AnchorLink></li>
                                    </ul>
                                </Nav>

                            </Navbar.Collapse>
                        </Navbar>
                        <h1 className={heading}>{pageTitle}</h1>
                    </Hero>


                </main>


            </div>
        </div>

    )
}

export default Layout;