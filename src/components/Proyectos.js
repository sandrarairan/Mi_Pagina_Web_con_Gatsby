import React from "react"
import { StyledSecundario, StylefadeInUp } from "../styles/components"
import proyecto1 from "../images/proyecto1.jpeg"
import code from "../images/proyecto2.jpeg"

export default function Proyectos() {
  return (
    <StylefadeInUp>
      <StyledSecundario>
        <h1>Proyectos</h1>
        <section>
          <article>
            <div>
              <img src={code} alt="proyecto2" />
              <h3>Applicación realizada con STREAMLIT para predecir el salario</h3>
              <p> El objectivo es practicar con STREAMLIT</p>
            </div>
            <div>
              <img src={proyecto1} alt="proyecto1" />
              <h3>Applicación realizada con STREAMLIT para predecir la clasificación de pinguinos</h3>
              <p> Las imagenes son creadas con Keynote</p>
            </div>
          </article>
        </section>
      </StyledSecundario>
    </StylefadeInUp>
  )
}