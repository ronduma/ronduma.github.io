// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const ResumePage = () => {
  return (
    <Layout pageTitle="Resume">
        <div className="container text-center mt-4">
            yo
        </div>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>Resume</title>
    </>
)

// Step 3: Export your component
export default ResumePage