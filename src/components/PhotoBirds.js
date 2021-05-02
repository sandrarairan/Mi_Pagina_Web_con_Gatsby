import React from "react"
import {  StyledDetail } from "../styles/components"

import ave2 from "../images/ave2.jpg"
import ave3 from "../images/ave3.jpg"
import ave4 from "../images/ave4.jpg"

export default function photoBirds() {
  return (
    <StyledDetail>
      <div>
      <h3>Momotus Aequatorialis</h3>
        <h4>Ave Residente</h4>
        <img src={ave2} alt="Fotografía ave" />
      </div>
      <div>
        <h3>Catharus Ustulatus</h3>
        <h4>Ave Migratoria</h4>
        <img src={ave3} alt="Fotografía ave" />
      </div>
      <div>
        <h3>Leptosittaca Branickii</h3>
        <h4>Ave Residente</h4>
        <img src={ave4} alt="lFotografía ave" />
      </div>
    </StyledDetail>
  )
}