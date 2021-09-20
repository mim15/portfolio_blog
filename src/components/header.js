import Link from 'next/link'
import mimLogoImg from '@/public/Logo/logo.svg'

import NavLinks from './navLinks'

import styled from '@/styles/header.module.scss'

export default function Header() {

  return (
    <>
      <header className={styled.ly_header}>
        <div className={styled.ly_headerConts_logo}>
          <Link title="index" href="/">
            <a className={styled.bl_headerConts_link}>
              <img className={styled.bl_headerConts_logo} src={mimLogoImg.src} alt=""/>
              <h2 className={styled.bl_headerConts_txt}>mim</h2>
            </a>
          </Link>
          <NavLinks />
        </div>
      </header>
    </>
  )
}