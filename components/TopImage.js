import React from 'react'
import Image from "next/image"
import { ImgContainer } from './styles/Container.styled'
import { ImgText} from "./styles/Container.styled"

export const TopImage = () => {
  return (
    <ImgContainer>
      <Image src="/images/topimg.jpg" width="100%" height="40vh" layout="responsive" objectFit="cover"></Image>
      <ImgText>
        <p>Jcc98's Blog</p>
        <p>Jcc98のブログ。</p>
        <hr></hr>
        <p>Thoughts, stories and ideas.</p>        
      </ImgText>
      
    </ImgContainer>
  )

}
