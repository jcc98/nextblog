import styled from "styled-components"

export const H3Container = styled.h3`
        background: -webkit-linear-gradient(#a18cd1, #fbc2eb);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

`

export const PostsStyle = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
    margin-top: 30px;
    overflow-y: hidden;
    padding: 1rem 2rem;

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 5rem 5rem;
        width: 650px;
        
  }

  @media (max-width: 650px) {
      padding: 1rem;
      width: 400px;
  }
`

export const PostTitle = styled.h1`
    margin: 10px 0;
    position: relative;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 900;
    font-family: "Catamaran", sans-serif;

    @media only screen and (max-width: 900px) {
        font-size: 1.6rem;
    }
`

export const PostDate = styled.div`
    background: #f4f4f4;
    margin-bottom: 20px;
    padding: 3px 10px;
    font-size: 20px;
`
export const PostBack = styled.div`
    margin-top: 10px;
    font-size: 1.5rem;
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid;
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    transition: 0.3s ease-in-out;

    &:hover {
        color: #fff;
        background-color: #000;
    }

    @media only screen and (max-width: 900px) {
        font-size: 1rem;
        padding: 3px 6px;
    }
`