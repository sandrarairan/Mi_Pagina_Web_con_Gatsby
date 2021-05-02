import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {  Acerca }  from "../components"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Acerca>
    <p>Mis Hobbies son la fotografía y el Avistamientos de Aves.</p>
    </Acerca>
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="https://github.com/sandrarairan?tab=repositories">Conoce algunos de mis proyectos!!!</a> <br />

  </Layout>
)

export default IndexPage
