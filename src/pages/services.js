import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import { graphql } from "gatsby"

const ServicesPage = ({ data }) => {
  
  return (
    <Layout>
      <SEO title="services" />
      <PageHeader title="Services" />
      <div className="p-5">
        <div>
          <p className="leading-loose">
            I have a passion for creating beautifully designed software
            experiences that connect businesses and their customers. I have over
            10 years of experience designing, developing, and scaling
            applications that have been used by millions of people around the
            world. User experience is at the core of everything I do.
          </p>
          <br />
          <p className="leading-loose">
            From the design research, to the user interface, to the technical
            implementation— it needs to be simple, clear, and easy to use. In a
            world saturated with competing software products that are similar,
            you win by creating something that is simple to understand,
            reliable, and delightful to use.
          </p>
        </div>
        <div className="md:flex md:justify-between">
          {/* map */}
          {data.allSanityServices.nodes.map(service => {
            return (
              <div key={service.id} className="mt-10 md:w-1/3">
                <div className="font-bold text-lg">{service.header}</div>
                <ul className="p-5">
                  <li className="pt-4">{service.bullet1}</li>
                  <li className="pt-4">{service.bullet2}</li>
                  <li className="pt-4">{service.bullet3}</li>
                  <li className="pt-4">{service.bullet4}</li>
                  <li className="pt-4">{service.bullet5}</li>
                  <li className="pt-4">{service.bullet6}</li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ServiceQuery {
    allSanityServices {
      nodes {
        header
        bullet1
        bullet2
        bullet3
        bullet4
        bullet5
        bullet6
        id
      }
    }
  }
`

export default ServicesPage
