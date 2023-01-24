// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Me">
        <div className="container text-center mt-4">
            yo
        </div>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>Contact Me</title>
    </>
)

// Step 3: Export your component
export default ContactPage