import * as React from 'react'



import {
    container,
    heading, main,

    heroSection
} from "../styles/layout.module.css"



import Hero from './hero';
import Menu from "./menu";
import Bio from "./bio";
import Projects from "./projects";
import Contact from "./contact";
import Scroll from "./scroll";






const Layout = () => {
    return (
        <div className={main}>
            <Hero>
                <Menu />
            </Hero>
            <Bio idProp="bio" />
            <Projects idProp="projects" />
            <Contact idProp="contact" />
            <Scroll />
        </div>




    )
}

export default Layout;