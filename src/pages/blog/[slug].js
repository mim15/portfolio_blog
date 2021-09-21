import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { client } from '@/utils/contentful'


export const getStaticPaths = async ({ params }) => {
  const entries = await client.getEntries({
    content_type: 'article'
  })

  return {
    paths: entries.items.map((item) => ({
      params: { slug: item.fields.slug }
    })),
    fallback: true
  }
}


export const getStaticProps = async ({  params }) => {
  const entries = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug
  })
  
  return {
    props: {
      posts: entries.items[0]
    },
    revalidate: 1
  }
}

export default function Article({ posts }) {
  return (
    <div>
      <h1>{posts.fields.title}</h1>
      <div>{documentToReactComponents(posts.fields.content, {
        // renderNode: {
        //   [BLOCKS.EMBEDDED_ASSET]: (node) => (
        //     <Image
        //       src={"https:" + node.data.target.fields.file.url}
        //       width={node.data.target.fields.file.detail.image.width}
        //       height={node.data.target.fields.file.detail.image.height}
        //     />
        //   )}
      })}</div>
    </div>
  )
}