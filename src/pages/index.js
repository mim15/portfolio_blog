import Link from 'next/link'

// import scss
import styled from "@/styles/home.module.scss"

export default function Home() {
  return (
    <>
      <section className={styled.bl_MV}>
        <div className={styled.bl_MV_inner}>
          <h1 className={styled.bl_MV_ttl}>Design
            <br />is chewing gum
            <br />for me
          </h1>
          {/* <h2 className={styled.bl_MV_ani}>animation</h2> */}
        </div>
      </section>
      <section className={styled.ly_conts}>
        {/* <Link title="about" href="/about">
          <a className={styled.bl_cont}>
            <div>
              <h2>About</h2>
              <div>sub discription</div>
              <div>Nambering</div>
              <div>button</div>
            </div>
          </a>
        </Link> */}
        <Link title="portfolio" href="/portfolio">
          <a className={styled.bl_cont}>
            <div>
              <h2>Portfolio</h2>
              <div>sub discription</div>
              <div>Nambering</div>
              <div>button</div>
            </div>
        </a>
        </Link>
        <Link title="blog" href="/blog">
          <a className={styled.bl_cont}>
            <div>
              <h2>Blog</h2>
              <div>sub discription</div>
              <div>Nambering</div>
              <div>button</div>
            </div>
          </a>
        </Link>
      </section>
      {/* <div className={styled.bl_cont}>
        <h2>Webapp</h2>
        <div>sub discription</div>
        <div>Nambering</div>
        <div>button</div>
      </div> */}
    </>
  )
}