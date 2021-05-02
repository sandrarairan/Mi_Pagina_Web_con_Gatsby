import styled, { keyframes } from "styled-components"
import { above } from "./index"


export const colors = {
  green: "#2B8D4C",
  orange: "#ff847c",
  gray: "#969696",
  darkBlack: "#848ccf",
  lightBlue: "#3282b8",
  rosado: "#be6283",
  yellow: "#e79c2a",
  morado: "#6a2c70",
  blanco: "#FFFFFF",
  lila: "#848ccf",
  verde:"#7fdbda",
  azul: "#4682B4",
  violeta: "#9400D3",
}

export const StyledPrincipal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1rem;
  color: Black;
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
  div{
    padding: 1rem;
    width: 55vw;
  };
  & h2 strong{
    margin: 0;
    font-weight: 500;
    font-size: 0.9rem;
  };
  & small strong{
    font-weight: 100;
    font-size: 0.6rem;
  };
  & img{
    width: 20vw;
  };
  ${above.medium`
    padding: 1rem 1rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.6rem;
    };
  `}
  ${above.mediumL`
    padding: 1rem 2rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.large`
    padding: 1rem 3rem;
    flex-direction: row;
    & h2 {
      
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}

  &:before{
    content: " ";
    background-color: green;
    background-color: ${colors.azul};
    z-index: -1;
    position: absolute;
    transform: rotate(-55deg);
    border-radius: 15%;
    width: 120%;
    height: 25rem;
    ${above.medium`
      height: 20rem;
      top: -30%;
    `}
    ${above.mediumL`
      height: 30rem;
      top: -60%;
    `}
    ${above.large`
      
      height: 40vw;
      top: -70%;
    `}
  };

`

/*Segundo componente de la pagina */
export const StyledSecundario = styled.div`
  background-image: linear-gradient(
    100deg,
    ${colors.blanco},
    ${colors.lightBlue}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -80px;
  padding: 1rem 5rem 1rem 5rem;
  h2 {
    color: ${colors.darkBlack};
    font-size: 7rem;
  }
  & img {
    width: 95vw;
    object-fit: cover;
    object-position: center;
    align-items: center;
    margin: 0;
    padding: 1rem 3rem 1rem 3rem;
  }
  article {
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    padding-bottom: 11rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.9);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    p {
      margin: 0;
      color: ${colors.black};
      font-weight: 500;
      font-size: 1.2rem;
      text-align: center;
    }
    small strong {
      color: ${colors.darkBlack};
      font-weight: 500;
      font-size: 1.2rem;
      text-align: center;
    }
    a {
      text-decoration: none;
      color: ${colors.darkBlue};
      font-size: 0.8rem;
      text-align: center;
      border-bottom: 3px solid ${colors.green};
      span {
        color: ${colors.yellow};
      }
    }
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  section {
    display: grid;
    grid-gap: 2rem;
    width: 200%;
    grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
    padding: 0;

    text-align: center;
    ${above.large`
      padding: 0 1rem;
      grid-gap: 3rem;
      padding: 0 10rem;
    `};
  }
`
//stylies hobbies
export const StyledHobbies = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 0rem 0rem;
  color: darkBlack;
  margin-bottom: 2rem;
  overflow: hidden;
  div{
    padding: 1rem;
    width: 55vw;
  };
  & h2 {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
  };
  & small strong{
    font-weight: 100;
    font-size: 0.9rem;
  };
  & img{
    width: 15vw;
  };
  ${above.small`
    padding: 1rem 1rem;
    flex-direction: row;
    & h2 {
      font-size: 0.1rem;
    };
    & small{
      font-size: 0.6rem;
    };
  `}
  ${above.medium`
    padding: 1rem 1rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.6rem;
    };
  `}
  ${above.small`
    padding: 1rem 2rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.mediumL`
    padding: 1rem 2rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.large`
    padding: 1rem 3rem;
    flex-direction: row;
    & h2 {
      
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}

  &:before{
    content: " ";
    background-color: green;
    background-color: ${colors.yellow};
    z-index: -1;
    position: absolute;
    transform: rotate(-69deg);
    padding: 1rem 2rem;
    border-radius: 35%;
    width: 200%;
    ${above.small`
    height: 20rem;
    top: -20%;
    & h2 {
      font-size: 0.1rem;
    };
    & small {
      font-size: 0.5rem;
    };
  `}
    ${above.medium`
      height: 20rem;
      top: -30%;
      & h2 {
      
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
    `}
    ${above.mediumL`
      height: 30rem;
      top: -60%;
      & h2 {
      
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
    `}
    ${above.large`
      
      height: 40vw;
      top: -70%;
      
    `}
  };

`

export const StyledDetail = styled.div`
  
  display: flex;
  flex-direction: column;
  text-align: justify;

  img {
    width: 50vw;
    object-fit: cover;
    object-position: center;
    padding: 0.1rem 0.1rem;
  }
  
  h2,
  h3,h4 {
    
    margin: 0;
    color: black;
    padding: 0.1rem 0.9rem 0.1rem 5rem;
  }
  small strong{
    margin: 0;
    color: red;
    object-fit: cover;
    object-position: center;
    margin: 1rem 3rem;
    padding: 1rem 2rem;
  }
  
  ${above.medium`
    padding: 1rem 3rem;
    flex-direction: column;
    img{
      margin-right: 5rem;
    }
    `}
  ${above.large`
  display: flex;
  flex-direction: column;
  img {
    width: 30vw;
    object-fit: cover;
    object-position: center;
    padding: 0.1rem 0.1rem;
  }
  `}
`
//stylies acerca
export const StyledAcerca = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 0rem 0rem;
  color: darkBlack;
  margin-bottom: 2rem;
  overflow: hidden;
  div{
    padding: 1rem;
    width: 55vw;
  };
  & h2 {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
  };
  & h1 strong{
    font-weight: 100;
    font-size: 1rem;
  };
  & small strong{
    font-weight: 100;
    font-size: 1rem;
  };
  & img{
    width: 55vw;
  };
  ${above.small`
    padding: 1rem 2rem;
    flex-direction: row;
    & h2 {
      font-size: 0.6rem;
    };
    & small{
      font-size: 0.6rem;
    };
  `}
  ${above.medium`
    padding: 1rem 1rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.6rem;
    };
  `}
  ${above.mediumL`
    padding: 1rem 2rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.large`
    padding: 1rem 3rem;
    flex-direction: row;
    & h2 {
      
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}

  &:before{
    content: " ";
    background-color: green;
    background-color: ${colors.lila};
    z-index: -1;
    position: absolute;
    transform: rotate(-69deg);
    padding: 1rem 2rem;
    border-radius: 35%;
    width: 150%;
    ${above.small`
    height: 10rem;
      top: -20%;
      & h2 {
      
      font-size: 0.9rem;
    };
    & small{
      font-size: 0.6rem;
    };
  `}
    ${above.medium`
      height: 20rem;
      top: -30%;
      & h2 {
      
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
    `}
    ${above.mediumL`
      height: 30rem;
      top: -60%;
      & h2 {
      
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
    `}
    ${above.large`
      
      height: 40vw;
      top: -70%;
      
    `}
  };

`
// Create the keyframes

const fadeInUp = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 20%, 0);
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`

// Here we create a component that will rotate everything we pass in over two seconds
export const StylefadeInUp = styled.div`
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  display: inline-block;

  animation: ${fadeInUp} 2s linear;
  padding: 1rem 1rem;
`
