import Link from "next/link"

import { client } from "@/utils/contentful"

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'article'
  })
  return {
    props: {
      articles: data.items
    },
    revalidate: 1
  }
}

export default function Article({ articles }) {
  return (
    <div>
      <main>
        <div>
          {articles.length > 0 ? articles.map((article, index) => (
            index < 10 &&
            <li key={article.sys.id}>
              <p>{article.fields.date}</p>
              <Link href={'/blog/' + article.fields.slug}>
                <a>{article.fields.title}</a>
              </Link>
            </li>
          ))
          : null}
        </div>
      </main>
    </div>
  )
}
