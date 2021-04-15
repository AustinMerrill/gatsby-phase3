import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import BlockText from "../components/blockText"

const NewsPage = ({ data }) => {
  const news = data.allSanityNews.nodes
  console.log(news)
  return (
    <Layout>
      {/* set to grid */}
      <div className=" space-y-6 md:space-y-0 px-5 md:grid grid-cols-6 gap-5">
        {/* map over news */}
        {news.map(item => {
          return (
            <Link
              className="border-8 col-span-2  "
              key={item.id}
              to={`/news/${item.slug.current}`}
            >
              <div className="flex flex-col justify-between">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                {/* in sanity set 20 character limit */}
                <div className="h-16">
                  <BlockText className="mt-10" blocks={item._rawExcerpt} />
                </div>
                <img
                  className="h-96 w-full object-cover"
                  src={item.mainImage.asset.fluid.src}
                ></img>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query MyNewsPageQuery {
    allSanityNews(limit: 3, sort: { fields: publishedAt, order: DESC }) {
      nodes {
        mainImage {
          asset {
            fluid {
              src
            }
          }
        }
        id
        slug {
          current
        }
        title
        _rawExcerpt
      }
    }
  }
`

export default NewsPage
