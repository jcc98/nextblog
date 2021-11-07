import styled from "styled-components"

export const Container = styled.div`
    max-width: 100%;
    margin: auto;
    overflow: auto;
    padding: 0 10px;  
`

export const PostContainer = styled.div`
`

export const HeaderContainer = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    animation: 0.5s all;    
      
    ul {
        display: flex;

        li {
            font-size: 1.2rem;
        }
    }

    li, h2 {
        list-style-type: none;
        margin: .85rem;
        transition:  all ease-in .2s;

    }

    li:hover, h2:hover {
        cursor: pointer;
        transform: scale(1.2);
        border-style: none;
        background: -webkit-linear-gradient(#a18cd1, #fbc2eb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const Center = styled.div`
    text-align: center;
`

export const PostBody = styled.div`
    margin-top: 2rem;
    padding: 0 10rem;
    line-height: 2rem;
`