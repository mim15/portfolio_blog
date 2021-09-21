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
      <main>
        <div>
          {posts.length > 0
          ? posts.map((p, index) => (
            index < 10 &&<Post
              key={p.fields.slug}
              title={p.fields.title}
              slug={p.fields.slug}
              createdAt={p.sys.createdAt}
            />
          ))
          : null}
        </div>
        <Pagination posts={posts} currentNum={1} />
      </main>
    </>
  )
}
