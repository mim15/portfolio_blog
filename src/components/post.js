import Link from 'next/link'

import dayjs from 'dayjs'

import styled from '@/styles/post.module.scss'

export default function Post({ photo, title, createdAt, description, slug }) {
  const day = dayjs(createdAt)
  return (
    <>
    <div className={styled.bl_card}>
      <figure className={styled.bl_card_imgWrapper}>
        <img className={styled.bl_card_photo} src={photo} />
      </figure>
      <div className={styled.bl_card_body}>
        <h2 className={styled.bl_card_ttl}>{title}</h2>
        <p className={styled.bl_card_txtLine}>{day.format("YYYY.MM.DD")}</p>
        <p className={styled.bl_card_txt}>{description}</p>
        <Link href={`/blog/${encodeURIComponent(slug)}`}>
          <a className={styled.bl_card_link}>Read&nbsp;More</a>
        </Link>
      </div>
    </div>
    </>
  )
}
