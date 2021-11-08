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