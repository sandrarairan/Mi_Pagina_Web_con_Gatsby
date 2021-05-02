import React from "react"
import { StyledSecundario, StylefadeInUp } from "../styles/components"
import experiencia from "../images/habilidades2.jpeg"
import code from "../images/habilidades.jpeg"

export default function Habilidades() {
  return (
    <StylefadeInUp>
      <StyledSecundario>
        <h1>Habilidades</h1>
        <section>
          <article>
            <div>
              <img src={code} alt="habilidades" />
              <h3>Lenguajes de Programación y Software R y Python</h3>
              <p> Construcción de Dashboard en flexdashboardy Dash</p>
            </div>
            <div>
              <img src={experiencia} alt="experiencia" />
              <h3>Experiencia</h3>
              <p> </p>
            </div>
          </article>
        </section>
      </StyledSecundario>
    </StylefadeInUp>
  )
}