import * as React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <body>
        <header>
            <div className="headerDiv mt-3">
                <h1 className="text-center"><Link to="/" className="homeButton">Ron Dumalagan</Link></h1>
                <nav className="navbar navbar-expand-lg static-top navbar">
                    <div className="container-fluid">
                        <ul className="navbar-nav mx-auto gap-5 h5">
                            <li>
                                <Link to="/about" className="navLink">About</Link>
                            </li>
                            <li>
                                <Link to="/experience" className="navLink">Experience</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="navLink">Contact</Link>
                            </li>
                            <li>
                                <Link to="/resume" className="navLink">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <main>
            <div className="h2 text-center mt-4">{pageTitle}</div>
            {children}
        </main>
    </body>
  )
}

export const Head = () => (
    <>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    </>
)

export default Layout