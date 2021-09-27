import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { client } from '@/utils/contentful'

import styled from '@/styles/[slug].module.scss'

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
    <>
      <div className={styled.ly_blog}>
        <div className={styled.bl_blog_wrapper}>
          <div className={styled.bl_blog_MV} style={{ backgroundImage: `url(${posts.fields.heroImage.fields.file.url})` }}></div>
          <div className={styled.bl_blog_info}>
            <h1 className={styled.bl_blog_ttl}>{posts.fields.title}</h1>
            <p className={styled.bl_blog_subttl}>{posts.fields.subTitle}</p>
            <div className={styled.bl_author}>
              <div className={styled.bl_author_icon} style={{ backgroundImage: `url(${posts.fields.snsIcon.fields.file.url})` }} />
              <div className={styled.bl_author_info}>
                <div className={styled.bl_blog_authorName}>
                  <a className={styled.bl_blog_authorLink} href="https://twitter.com/mim01_tweet/">{posts.fields.author}</a>
                </div>
                <div className={styled.bl_blog_date}>
                  <div className={styled.bl_blog_day}>{posts.fields.createat}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className={styled.ly_article}>
          <section className={styled.bl_article}>
            {documentToReactComponents(posts.fields.content, {
            // renderNode: {
            //   [BLOCKS.EMBEDDED_ASSET]: (node) => (
            //     <Image
            //       src={"https:" + node.data.target.fields.file.url}
            //       width={node.data.target.fields.file.detail.image.width}
            //       height={node.data.target.fields.file.detail.image.height}
            //     />
            //   )}
            })}
          </section>
        </article>
      </div>  
    </>
  )
}