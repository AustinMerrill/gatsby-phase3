import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const WorkTemplate = ({ data }) => {
  console.log("this is for the tempalte", data)
  return (
    <Layout>
      <h1 className="text-6xl font-semibold text-gray-800">
        {data.sanityWorkPage.title}
      </h1>
      <h2 className="text-3xl font-semibold text-gray-600">
        {data.sanityWorkPage.description}
      </h2>
      <p>
        <a href={data.sanityWorkPage.github} className="text-blue-400">
          Github Repo
        </a>
      </p>
      <p>
        {" "}
        <a href={data.sanityWorkPage.liveSite} className="text-blue-400">
          Live Site
        </a>
      </p>
      <img
        src={data.sanityWorkPage.image.asset.fluid.src}
        alt="something"
      ></img>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String!) {
    sanityWorkPage(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      description
      liveSite
      github
      image {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default WorkTemplate
