import React from "react"
import { StyledPrincipal } from "../styles/components"
import { ImagePortafolio } from "./"

export default function Portafolio({ description }) {
  return (
    <StyledPrincipal>
      <div>
        <h2>SANDRA RAIRAN</h2>
        <small>{description}</small>
      </div>
      <ImagePortafolio name="icon" />
    </StyledPrincipal>
  )
}


