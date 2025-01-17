import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import Head from "next/head";
import Post from '@/components/Post';
import {sortByDate} from "@/utils"

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>
          Radio Catalogue
        </title>
      </Head>
      <div className='posts'>
        {posts.map((post, index) => (
        <Post key={index} post={post}/>
        ))}
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
    const markdowWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data: frontmatter} = matter(markdowWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  return{
    props: {
      posts : posts.sort(sortByDate),
    }
  }
}