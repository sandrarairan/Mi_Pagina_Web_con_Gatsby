import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { Portafolio } from "../components"

  export default function SecondPage() {
    return (
      <>
        <Layout>
        <SEO title="SecondPage" />
        <Portafolio />
        </Layout>
      </>
    )
  }
