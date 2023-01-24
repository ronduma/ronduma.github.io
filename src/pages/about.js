// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import pfp from "../images/ron.png"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="container mt-4">
          <div class="d-flex row justify-content-center">
            <div class="col-lg-4">
              <img className="pfp mb-4 text-center" src={pfp} alt="yo" />
            </div>
            <div class="col-lg-8">
              <div class="card-body">
                <p class="card-text">
                <p>My name is Ron, and I'm a software developer from Queens, NY. </p>
                <p>Currently, I'm a junior at <Link id="stevens-link" target="_blank" to="https://www.stevens.edu">Stevens Institute of Technology</Link></p> 
                <p>studying Computer Science through the <Link id="clark-link" target="_blank" to="https://clarkfoundationdc.org/clark-scholars/">Clark Scholars Program </Link>.</p>
                <p>Feel free to browse this site and take a look at what I've been up to.</p>
                <p class="pt-1 fw-bold mt-4">I'm open to all internship opportunities that can help me expand my skillset and gain more relevant industry experience!</p>
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            
          </div>
        </div>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>About Me</title>
    </>
)

// Step 3: Export your component
export default AboutPage