import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { 
  Portafolio,
  Proyectos,
 } from "../components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

  export default function PagePortafolio({ data }) {
    return (
      <>
        <Layout>
        <SEO title="Portafolio" />
        <Portafolio description={data.allSite.edges[0].node.siteMetadata.description} />
        <Proyectos />
        </Layout>
      </>
    )
  }