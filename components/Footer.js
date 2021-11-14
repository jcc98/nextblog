import React from 'react'
import { FooterStyle } from "../components/styles/Footer.styled"

export const Footer = () => {
  return (
    <div style={{textAlign: "center"}}>
  <FooterStyle>
    <small>&copy; jcc98 static blog created with NextJS, Typescript and styled components.</small>
  </FooterStyle>  
  </div>
  )
}