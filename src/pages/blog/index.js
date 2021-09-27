import { client } from '@/utils/contentful'

import Post from '@/components/post'
import Pagination from '@/components/pagination'

export const getStaticProps = async ({  params }) => {
  const entries = await client.getEntries({ content_type: 'article', order: '-sys.createdAt'})
  
  return {
    props: {
      posts: entries.items
    },
    revalidate: 1
  }
}

export default function Article({ posts }) {
  return (
    <>
      {posts.length > 0
      ? posts.map((p, index) => (
        index < 10 &&<Post
          key={p.fields.slug}
          photo={p.fields.heroImage.fields.file.url}
          title={p.fields.title}
          createdAt={p.sys.createdat}
          description={p.fields.description}
          slug={p.fields.slug}
        />
      ))
      : null}
      <Pagination posts={posts} currentNum={1} />
    </>
  )
}
