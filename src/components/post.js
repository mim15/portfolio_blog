import Link from 'next/link'

import dayjs from 'dayjs'

import styled from '@/styles/post.module.scss'

export default function Post({ title, slug, createdAt, description }) {
  const day = dayjs(createdAt)

  return (
    <>
    <div className={styled.card}>
      <div className={styled.main}>
        <Link href={`/blog/${encodeURIComponent(slug)}`}>
          <a className={styled.link}>
            <h2 className={styled.heading}>{title}</h2>
            <p className={styled.description}>{description}</p>
            <p className={styled.date}>{day.format("YYYY.MM.DD")}</p>
          </a>
        </Link>
      </div>
    </div>
    </>
  )
}
