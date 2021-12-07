import {useState} from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { GetStaticProps } from "next"
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import {Post} from "../components/Post"
import {sortByDate} from "../utils"
//Styled component
import { PostsStyle } from "../components/styles/Post.styled"
import {Footer} from "../components/Footer"
import {TopImage} from "../components/TopImage"

export interface IFilteredPosts {
  slug: "string";
  frontmatter: {
    title: "string";
    date: "string";
    excerpt: "string";
    cover_image: "string"
  }
} 
const Home = ({posts}: {posts:IFilteredPosts[]}) => {


const [navValue, setNavValue] = useState<Number>()

let filteredPosts:IFilteredPosts[] = [...posts]

const changeSlugArray = (value:string):void => {
  filteredPosts = filteredPosts.filter(item => item.slug.includes(value))

}

switch(navValue) {
  case 0:
    changeSlugArray("seishin")
    break;
  case 1:
    changeSlugArray("nikki")
    break;
  case 2:
    changeSlugArray("nihongo")
    break;
  case 3:
    changeSlugArray("prog")
    break;
  case undefined:
    changeSlugArray
}

  return (
    <>
        <TopImage/>
        <Header setNavValue={setNavValue}/>
        <div>
        <Head>
          <title>ブログ</title>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
        </Head>
          <PostsStyle>
            {filteredPosts.map((post:IFilteredPosts, index:number) => (
              <Post key={index} post={post}/>
          ))}
          </PostsStyle> 
          <Footer/>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  //Get files from the posts dir
  const files:string[] = fs.readdirSync(path.join("posts"))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace(".md", "")

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8")

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })


  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}

export default Home
