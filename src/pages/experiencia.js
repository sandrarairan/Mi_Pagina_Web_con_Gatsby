import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { 
  Experiencia,
  Habilidades,
 } from "../components"


  export default function PageExperiencia() {
    return (
      <>
        <Layout>
        <SEO title="Experiencia" />
        <Experiencia  />
        <Habilidades />
        </Layout>
      </>
    )
  }