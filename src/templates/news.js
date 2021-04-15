import { graphql } from "gatsby"
import React from "react"
import BlockText from "../components/blockText"
import Layout from "../components/layout"

const NewsTemplate = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2>{data.sanityNews.title}</h2>
      <img src={data.sanityNews.mainImage.asset.fluid.src}></img>
      
    </div>
  )
}

export const query = graphql`
  query MyNewsQuery($id: String!) {
    sanityNews(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      mainImage {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default NewsTemplate
