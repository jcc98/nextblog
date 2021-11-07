import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"
import Link from "next/link"
import { PostTitle } from "../../components/styles/Post.styled"
import { PostDate } from "../../components/styles/Post.styled"
import {motion} from "framer-motion"
import { Center } from "../../components/styles/Container.styled"
import { PostBody } from "../../components/styles/Container.styled"

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
    
    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
    }

    return (
        <>
            <Link href="/">
                <a className="btn btn-back">Go back</a>
            </Link>
            <div className="card card-page">
                <Center>
                    <PostTitle>{title}</PostTitle>
                    <PostDate>Posted on {date}</PostDate>
                </Center>
                <motion.div initial="hidden" animate="visible" variants={variants} transition={{duration: 0.5}}>
                    <img className="cover_img" src={cover_image} alt=""/>
                    <PostBody>
                        <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                    </PostBody>
                </motion.div>
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