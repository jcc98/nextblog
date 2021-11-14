import Link from "next/link";
import {Button} from "./styles/Button.styled"
import { H3Container } from "./styles/Post.styled";
import { motion } from "framer-motion";
import { ReadMoreContainer } from "./styles/Container.styled"
import { IFilteredPosts } from "../pages";

export const Post = ({post} : {post: IFilteredPosts}) => {

    const variants:{} = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
    }

    return (
        <>
            <motion.div initial="hidden" animate="visible" variants={variants} transition={{duration: 0.7}} whileHover={{scale: 1.05}} className="card">
                <img style={{objectFit: "cover"}} height="225" src={post.frontmatter.cover_image} alt=""/>
                <div>投稿日: {post.frontmatter.date}</div>
                <H3Container>{post.frontmatter.title}</H3Container>
                <p>{post.frontmatter.excerpt}</p>
                <ReadMoreContainer>
                <Link href={`/blog/${post.slug}`}>
                    <Button>Read more</Button>
                </Link>
                {(() => {
        if (post.slug.includes("warui")) {
          return (
            <div>😔</div>
          )
        } else if (post.slug.includes("yoi")) {
          return (
            <div>😀</div>
          )
        } else if (post.slug.includes("prog")) {
          return (
            <div>👨‍💻</div>
          )
        } else if (post.slug.includes("nihongo")) {
            return (
                <div>🗻</div>
            )
        }
      })()}
                </ReadMoreContainer>
            </motion.div>
        </>
    )
}