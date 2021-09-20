import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

let client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
})


export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'article'
  })

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "article",
    'fields.slug': params.slug
  })

  return {
    props: {
      article: data.items[0]
    },
    revalidate: 1
  }
}


export default function Article({ article }) {
  return (
    <div>
      <h1>{article.fields.title}</h1>
      <div>{documentToReactComponents(article.fields.content, {
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