import React from 'react'

import { BottomBannerElement } from './styles'

interface BottomBannerProps {
  title: string
  description: string
  img: string
  alt: string
}

const BottomBanner = ({ title, description, img, alt }: BottomBannerProps) => {
  return (
    <BottomBannerElement >
      <a href="#">
        <div className="info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={img} alt={alt} />
      </a>
    </BottomBannerElement>
  )
};

export default BottomBanner