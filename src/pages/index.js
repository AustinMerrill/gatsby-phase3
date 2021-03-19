import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const title = data.allSanityHomePage.nodes[0].welcomeMessage
  return (
    <Layout className="h-screen">
      <SEO title="Home" />
      <div className="mt-20 mb-28 h-1/4">
        <h1 className="text-4xl font-bold leading-normal md:text-center">
          {title}
        </h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allSanityHomePage {
      nodes {
        welcomeMessage
      }
    }
  }
`

export default IndexPage
