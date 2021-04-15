import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const WorkTemplate = ({ data }) => {
  console.log("this is for the tempalte", data)
  return (
    <Layout>
      <div className="container mx-auto  flex flex-col justify-center align-center">
        <div className="flex flex-col justify-center align-center text-center mb-4">
          <h1 className="text-6xl font-semibold text-gray-800">
            {data.sanityWorkPage.title}
          </h1>
          <h2 className="text-3xl font-semibold text-gray-600">
            {data.sanityWorkPage.description}
          </h2>
        </div>
        <div className="flex justify-center align-center">
          <img
            className="h-auto md:w-1/2 w-3/4"
            src={data.sanityWorkPage.image.asset.fluid.src}
            alt="something"
          ></img>
        </div>
        <div className="flex align-center justify-center text-center w-full  mt-8">
          <p className="mr-6">
            <a
              href={data.sanityWorkPage.github}
              className="text-gray-200 bg-gray-800 py-2 px-4 rounded"
            >
              Github Repo
            </a>
          </p>
          <p className="">
            {" "}
            <a
              href={data.sanityWorkPage.liveSite}
              className="text-gray-200 bg-gray-800  py-2 px-8 rounded"
            >
              Live Site
            </a>
          </p>
        </div>
      </div>
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
