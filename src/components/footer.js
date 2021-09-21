import Link from 'next/link'

import Footerimage from '@/public/Logo/logo.svg'
import styled from '@/styles/footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styled.ly_footer}>
        <div className={styled.ly_footer_inner}>
          <div className={styled.ly_footercont_l}>
            <div className={styled.ly_footerConts_logo}>
              <img className={styled.bl_footerConts_logo} src={Footerimage.src} alt=""/>
            </div>
            <div className={styled.bl_copyRight}>
              <p>©&nbsp;Shigezumi&nbsp;Masaaki&nbsp;2021</p>
              <p>All&nbsp;Rights&nbsp;Reserved.</p>
            </div>
          </div>
          <div className={styled.ly_footercont_r}>
            <nav className={styled.bl_footerNav}>
              <p className={styled.bl_footerNav_ttl}>Footer Navigation</p>
              <ul className={styled.bl_footerNav_wrapper}>
                <li className={styled.bl_footerNav_item}>
                  <Link title="about" href="/about">
                    <a className={styled.bl_footerNav_txt}>About</a>
                  </Link>
                </li>
                <li className={styled.bl_footerNav_item}>
                  <Link title="portfolio" href="/portfolio">
                    <a className={styled.bl_footerNav_txt}>Portfolio</a>
                  </Link>
                </li>
                <li className={styled.bl_footerNav_item}>
                  <Link title="blog" href="/blog">
                    <a className={styled.bl_footerNav_txt}>Blog</a>
                  </Link>
                </li>
                <li className={styled.bl_footerNav_item}>
                  <Link title="webapp" href="/webapp">
                    <a className={styled.bl_footerNav_txt}>Webapp</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styled.ly_footercont_form}>
              <div className={styled.bl_footer_social}>
                <a className={styled.bl_footer_snsTxt} href="https://www.instagram.com/mim01_ins/">mim01_ins</a>
                <a className={styled.bl_footer_snsTxt} href="https://twitter.com/mim01_tweet/">mim01_tweet</a>
              </div>
              <div>
                <label>Send Message for me</label>
                <input type="email" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}