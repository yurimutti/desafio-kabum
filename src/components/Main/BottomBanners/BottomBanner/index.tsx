import React from 'react'

import { BottomBanner } from './styles'

interface BottomBannerProps {
  title: string
  description: string
  img: string
  alt: string
}

const index = ({ title, description, img, alt }: BottomBannerProps) => {
  return (
    <BottomBanner>
      <a href="#">
        <div className="info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={img} alt={alt} />
      </a>
    </BottomBanner>
  )
}

export default index