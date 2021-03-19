import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import { graphql, Link } from "gatsby"

const WorkPage = ({ props, data }) => {
  return (
    <Layout>
      <SEO title="work" />
      <PageHeader title={"Work"} />
      {/* work samples */}
      <div className="space-y-6 md:space-y-0 px-5 md:grid grid-cols-2 gap-5">
        {/* map over data.allSanityWorkPage... */}
        {data.allSanityWorkPage.nodes.map(work => {
          return (
            <Link key={work.id} to={`/work/${work.slug.current}`}>
              <div className="relative col-span-4 ">
                <img
                  className="rounded shadow-lg w-full h-96  object-cover"
                  src={work.image.asset.fluid.src}
                  alt="something"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 opacity-0  hover:opacity-60 bg-black hover:text-white">
                  <div className="p-5">
                    <div className="text-3xl font-bold">{work.title}</div>
                    <div className="text-xl font-bold">{work.description}</div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query WorkQuery {
    allSanityWorkPage {
      nodes {
        description
        github
        title
        image {
          asset {
            fluid {
              src
            }
          }
        }
        slug {
          current
        }
        id
      }
    }
  }
`

export default WorkPage
