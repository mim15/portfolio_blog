import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import styled from '@/styles/navlinks.module.scss'

export default function NavLinks(props) {
  const [isModal, setIsModal] = useState(false)
  const Toggle = isModal ? `${styled["active"]} ${styled.ly_menuToggle_btn}` : styled.ly_menuToggle_btn
  const Togglemenu = isModal ? `${styled["active"]} ${styled.sm_headerNav}` : styled.sm_headerNav
  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      <button onClick={() => setIsModal(!isModal)} className={Toggle}>
        <span className={styled.bl_menuToggle_btn} />
      </button>
      <ul className={Togglemenu} >
        <li className={styled.sm_headerNav_item}>
          <Link title="about" href="/about">
            <a className={styled.sm_headerNav_txt}>About</a>
          </Link>
        </li>
        <li className={styled.sm_headerNav_item}>
          <Link title="portfolio" href="/portfolio">
            <a className={styled.sm_headerNav_txt}>Portfolio</a>
          </Link>
        </li>
        <li className={styled.sm_headerNav_item}>
          <Link title="blog" href="/blog">
            <a className={styled.sm_headerNav_txt}>Blog</a>
          </Link>
        </li>
        <li className={styled.sm_headerNav_inst}>
          <FontAwesomeIcon className={styled.sm_headerNav_icon} icon={faInstagram} />
          <a className={styled.sm_headerNav_snsTxt} href="https://www.instagram.com/mim01_ins/">mim01_ins</a>
        </li>
        <li className={styled.sm_headerNav_twit}>
          <FontAwesomeIcon className={styled.sm_headerNav_icon} icon={faTwitter} />
          <a className={styled.sm_headerNav_snsTxt} href="https://twitter.com/mim01_tweet/">mim01_tweet</a>
        </li>
      </ul>
      <ul className={styled.lg_headerNav} >
        <li className={styled.lg_headerNav_item}>
          <Link title="about" href="/about">
            <a className={router.pathname == "/about" ? `${styled["active"]} ${styled.lg_headerNav_txt}`  : styled.lg_headerNav_txt}>About</a>
          </Link>
        </li>
        <li className={styled.lg_headerNav_item}>
          <Link title="portfolio" href="/portfolio">
            <a className={router.pathname == "/portfolio" ? `${styled["active"]} ${styled.lg_headerNav_txt}`  : styled.lg_headerNav_txt}>Portfolio</a>
          </Link>
        </li>
        <li className={styled.lg_headerNav_item}>
          <Link title="blog" href="/blog">
            <a className={router.pathname == "/blog" ? `${styled["active"]} ${styled.lg_headerNav_txt}`  : styled.lg_headerNav_txt}>Blog</a>
          </Link>
        </li>
      </ul>
    </>
  )
}