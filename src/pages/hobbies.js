import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hobbies, PhotoBirds }  from "../components"
  export default function PageHobbies() {
    return (
      <>
        <Layout>
        <SEO title="Hobbies" />
        <Hobbies  />
        <PhotoBirds  />
        </Layout>
      </>
    )
  }