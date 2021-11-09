import styled from "styled-components"

export const Container = styled.div`
    max-width: 100%;
    margin: auto;
    overflow: none;
    padding: 0 10px;  
`

export const HeaderContainer = styled.div`
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
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media only screen and (max-width: 900px) {

        flex-direction: column;
        align-items: center;
        
        & li, h2 {
            font-size: 1.2rem;
        }
    }
`

export const Center = styled.div`
    text-align: center;
`

export const PostBody = styled.div`
    margin-top: 2rem;
    padding: 0 12rem;
    line-height: 2rem;
    font-size: 1.25rem;

    @media only screen and (max-width: 900px) {
        padding: 0 5rem;
        font-size: 1.05rem;
    }
`

export const PostDate = styled.div`
    font-size: 1.4rem;
    display: inline-block;
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    border-radius: 3px;
    margin: 2rem 0;
    padding: 5px 10px;
    color: #fff;
    box-shadow: 1px 1px 5px 0.3px #fbc2eb;
`

export const ReadMoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 2rem;
`