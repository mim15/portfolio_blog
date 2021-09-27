import React, { useState } from 'react'
import ReactCompareImage from 'react-compare-image'

import retouchBefore from '@/public/photo/retouch_before.jpg'
import retouchAfter from '@/public/photo/retouch_after.jpg'

import styled from '@/styles/portfolio.module.scss'

export default function Portfolio () {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <div className={styled.ly_designPage}>
        <div className={styled.bl_designPage_ttl}>Portfolio</div>
        <div className={styled.el_border}></div>
        <div className={styled.ly_designCategory_ttl}>Retouch</div>
        <div className={styled.ly_designCategory_retouch}>
          <ReactCompareImage leftImage={retouchBefore.src} rightImage={retouchAfter.src} />
          <div className={styled.testgrid}>
            <img src={retouchAfter.src} alt="Picture of the author" className={styled.lb_designCategory_retouch} onClick={() => setToggler(!toggler)}/>
            <img src={retouchAfter.src} alt="Picture of the author" className={styled.lb_designCategory_retouch} />
            <img src={retouchAfter.src} alt="Picture of the author" className={styled.lb_designCategory_retouch} />
          </div>
        </div>
        <div className={styled.ly_designCategory_ttl}>Movie</div>
        <div className={styled.el_border}></div>
        <div className={styled.testgrid2}>
            <img src={retouchAfter.src} alt="Picture of the author" className={styled.lb_designCategory_retouch} />
            <img src={retouchAfter.src} alt="Picture of the author" className={styled.lb_designCategory_retouch} />
          </div>
      </div>
    </>
  )
}