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
import { PostContainer } from "../components/styles/Container.styled"
//Styled component
import { Posts } from "../components/styles/Post.styled"

interface IRecipeProps {
  slug: "string";
  frontmatter: {
    title: "string";
    date: "string";
    excerpt: "string";
    cover_image: "string"
  }

}

const Home = ({posts}: {posts:any}) => {

  interface IFilteredPosts {
    slug: "string";
    frontmatter: {
      title: "string";
      date: "string";
      excerpt: "string";
      cover_image: "string"
    }
  } 

const [navValue, setNavValue] = useState<Number>()

let filteredPosts:IFilteredPosts[] = [...posts]


console.log(filteredPosts)
console.log(typeof filteredPosts)

const changeSlugArray = (value:string):void => {
  filteredPosts = filteredPosts.filter(item => item.slug.includes(value))

}

switch(navValue) {
  case 0:
    changeSlugArray("seishin")
    break;
  case 1:
    changeSlugArray("nihongo")
    break;
  case 2:
    changeSlugArray("prog")
    break;
  case 3:
    changeSlugArray("")
    break;
  case undefined:
    changeSlugArray
}

  return (
    <>
    <PostContainer>
        <Header setNavValue={setNavValue}/>
        <div>
        <Head>
          <title>ブロッグ</title>
        </Head>
          <Posts>
            {filteredPosts.map((post:any, index:number) => (
              <Post key={index} post={post}/>
          ))}
          </Posts> 
      </div>
      </PostContainer>
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
