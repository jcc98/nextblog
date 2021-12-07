import styled from "styled-components"

export const ProgressBar = styled.div` 
  top: 0;
  position: fixed;
  width: 0%;
  background-image: linear-gradient(to left, #a18cd1 0%, #fbc2eb 100%);
  height: 12px;
  transition: width 0.1s ease-out;
`