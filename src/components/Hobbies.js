import React from "react"
import { StyledHobbies } from "../styles/components"
import { ImageHobbies } from "./"

export default function Hobbies() {
  return (
    <StyledHobbies>
      <div>
        <h2>MIS HOBBIES!!</h2>
        <small>SON LA FOTOGRAFÍA DEPORTIVA, AVES Y EL AVISTAMIENTO DE AVES!!!
        </small>
      </div>
      <ImageHobbies name="icon" />
      <ImageHobbies name="icon" />
    </StyledHobbies>
  )
}