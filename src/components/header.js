import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const colors = {
  green: "#019CAD",
  orange: "#A0522D",
  gray: "#969696",
  darkBlack: "#313337",
  Blue: "#4880EC",
  softGray: "#f6f8f9",
}

const Header = ({ siteTitle }) => (
  <header
    style={{
     
      marginBottom: `1.45rem`,
      backgroundImage: "linear-gradient(to right, green, #019CAD)",
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1900,
        padding: `0.45rem 0.0875rem 0.1rem 0.1rem`,
        
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `2rem 1rem`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
    <ul style={{ margin: 0,
     
     display: `flex`,
     position: `relative`,
     
     
     }}>
    
    <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `1rem 1rem`
          }}
        >Home
        </Link>
        <Link
          to="/experiencia"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `1rem 0.1rem 0.1rem 0.1rem`
          }}
        >Experiencia
        </Link>
        <Link
          to="/portafolio/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `1rem 0.1rem 0.1rem 0.5rem`
          }}
        >Portafolio
        </Link>
        <Link
          to="/hobbies"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `1rem 0.1rem 0.1rem 0.5rem`
          }}
        >Hobbies
        </Link>
        <Link
          to="/homepage"
          style={{
            color: `white`,
            
            padding: `1rem 0.1rem 0.1rem 0.5rem`
          }}
        >Acerca de mí
        </Link>
        <a
        style={{
            color: `white`,
            padding: `1rem 0.5rem`
          }}
        href="https://sandrarairan.github.io/covid19-Colombia/">Dashboard Covid-19</a>
        <a
        style={{
            color: `white`,
            padding: `1rem 0.5rem`
          }}
        href="https://sandrarairan.github.io/Dashboard_bird_Colombia/">Dashboard_bird_Colombia</a>
    </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
