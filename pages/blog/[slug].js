import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"
import Link from "next/link"
import { PostTitle } from "../../components/styles/Post.styled"
import { PostBack } from "../../components/styles/Post.styled"
import { PostDate } from "../../components/styles/Container.styled"
import {motion} from "framer-motion"
import { Center } from "../../components/styles/Container.styled"
import { PostBody } from "../../components/styles/Container.styled"
import { useEffect, useRef, useState } from "react"
import { ProgressBar } from "../../components/styles/ProgressBar.styled"

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {


    var value;
    const [progressPercentage, setProgressPercentage] = useState(value)
    
    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
    }
    const inputRef = useRef();
    const scrollHandler = () => {
        let scrollDistance = -inputRef.current.getBoundingClientRect().top
        let heightDistance = inputRef.current.getBoundingClientRect().height 
        let totalDistance = (scrollDistance / (heightDistance - document.documentElement.clientHeight) * 100)
        value = Math.floor(totalDistance)
        setProgressPercentage(value)
    
    }
  
    useEffect(() => {
      window.addEventListener("scroll", scrollHandler, true);
      return () => {
        window.removeEventListener("scroll", scrollHandler, true);
      };
    }, []);

    return (
        <>
        <div ref={inputRef}>
            <ProgressBar style={{"width": `${progressPercentage}%`}}/>
            <Link href="/">
                <PostBack>戻る</PostBack>
            </Link>
            <div>
                <Center>
                    <PostTitle>{title}</PostTitle>
                    <PostDate>投稿日: {date}</PostDate>
                    <br></br>
                    <PostDate>文字数: {(content.length)}</PostDate>
                </Center>
                <motion.div initial="hidden" animate="visible" variants={variants} transition={{duration: 0.5}}>
                    <img className="cover_img" src={cover_image} alt=""/>
                    <PostBody>
                        <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                    </PostBody>
                </motion.div>
            </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8")

    const {data:frontmatter, content} = matter(markdownWithMeta)
    
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}