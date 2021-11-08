import Link from "next/link";
import {Button} from "./styles/Button.styled"
import { H3Container } from "./styles/Post.styled";
import { motion } from "framer-motion";
import { ReadMoreContainer } from "./styles/Container.styled"

// export default function Post({post}) {

export const Post = ({post} : {post: any}) => {

    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
    }
    return (
        <>
            <motion.div initial="hidden" animate="visible" variants={variants} transition={{duration: 0.7}} whileHover={{scale: 1.05}} className="card">
                <img src={post.frontmatter.cover_image} alt=""/>
                <div>投稿日: {post.frontmatter.date}</div>
                <H3Container>{post.frontmatter.title}</H3Container>
                <p>{post.frontmatter.excerpt}</p>
                <ReadMoreContainer>
                <Link href={`/blog/${post.slug}`}>
                    <Button>Read more</Button>
                </Link>
                <p>{post.slug.includes("warui") ? "😔" : "😀"}</p>
                </ReadMoreContainer>
            </motion.div>
        </>
    )
}
