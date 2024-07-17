import Link from "next/link"


export default function Post({ post }) {
  return (
    <div className='card'>
        <img src={post.frontmatter.cover_image} alt="" />
        <div className="post-date">
            Made in {post.frontmatter.date}
        </div>
        <h3>
            {post.frontmatter.title}
        </h3>
        <p>
            {post.frontmatter.excerpt}
        </p>
        <Link className="btn" href={`/blog/${post.slug}`}>
            See more pictures
        </Link>
    </div>
  )
}
