import styled from "styled-components"

export const Button = styled.a`
display: flex;
align-self: center;
background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
color: #fffff4;
border: none;
padding: 8px 16px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 15px;
font-family: inherit;

&:focus {
    outline: none;
  }
  
&:hover {
    transform: scale(0.98);
  }
  
`

export const themeButton = styled.button`
  outline: none;
  color: red;
`

export const buttonStyle = {
  cursor: "pointer",
  borderRadius: "15px",
  margin: "0 auto",
  display: "block",
  padding: "7px 5px",
  backgroundColor: "white",
  border: "1px solid #000",
}