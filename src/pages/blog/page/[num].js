import { client } from '@/utils/contentful'

import Post from '@/components/post'
import Pagination from '@/components/Pagination'
import styled from '@/styles/[num].module.scss'

const Paged = ({ posts, num, allPosts }) => {
  return (
    <>
          {posts.length > 0
            ? posts.map((p) => (
                <Post
                  key={p.fields.slug}
                  title={p.fields.title}
                  slug={p.fields.slug}
                  description={p.fields.description}
                  createdAt={p.sys.createdAt}
              />
              ))
            : null}
        <Pagination posts={allPosts} currentNum={Number(num)} />
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await client.getEntries({content_type: 'article'})

  const paths = [];

  for (let i = 0; i <= Math.floor(posts.items.length / 10); i++) {
    paths.push({
      params: {
        num: (i + 1).toString()
      }
    });
  }

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const posts = await client.getEntries({content_type: 'article', order: '-sys.createdAt', limit: 10, skip: (params.num - 1) * 10 })
  const allPosts = await client.getEntries({content_type: 'article'})

  return {
    props: {
      posts: posts.items,
      num: params.num,
      allPosts: allPosts.items,
    },
  }
}

export default Paged