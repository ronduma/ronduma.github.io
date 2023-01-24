// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="container text-center"> 
        <div className="row mt-5">
          <ul className="no-bullets display-6 mt-5">
            <li>💻 Software Developer</li>
            <li>🗽 From New York City</li>
            <li>🦆 <Link to="https://www.stevens.edu/school-engineering-science/departments/computer-science" target="blank" >CS @ Stevens Institute of Technology</Link></li>
          </ul>
        </div>
        <div className="row h1 mt-5">
          <div className="col">
            <Link to="mailto:rpdumalagan@gmail.com" className="px-3"><FaEnvelope/></Link>
            <Link to="https://www.linkedin.com/in/rondumalagan/" target="blank" className="px-3"><FaLinkedin/></Link>
            <Link to="https://www.github.com/ronduma" target="blank" className="px-3"><FaGithub/></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Ron Dumalagan</title>
    <link href="ronduma\static\favicon.ico" rel="shortcut icon" type="image/x-icon" />
  </>
)

// Step 3: Export your component
export default IndexPage