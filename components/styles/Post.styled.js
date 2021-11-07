import styled from "styled-components"

export const H3Container = styled.h3`
        background: -webkit-linear-gradient(#a18cd1, #fbc2eb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
`

export const Posts = styled.div`
    width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 30px;
`

export const PostTitle = styled.h1`
    margin: 10px 0;
    position: relative;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 900;
    font-family: "Catamaran", sans-serif;

`

export const PostDate = styled.div`
    background: #f4f4f4;
    margin-bottom: 20px;
    padding: 3px 10px;
    font-size: 20px;
`
  