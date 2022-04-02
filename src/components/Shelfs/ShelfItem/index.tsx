import { useState } from 'react'

import Wishlist from '../../Wishlist'
import BuyButton from './BuyButton'
import Rating from './Rating'
import Flag from './Flag'

import { ShelfItem } from './styles'


function index() {
  const [toggleLikeAndDislike, setToggleLikeAndDislike] = useState(false)

  function handleClick() {
    setToggleLikeAndDislike(!toggleLikeAndDislike)
  }

  return (
    <ShelfItem>
      <div className="header">
        <Wishlist width={24} height={21} onClick={handleClick} Isliked={toggleLikeAndDislike} />
        <Rating />
      </div>

      <div className="body">
        <div className="img">
            <img src="/images/product-01.jpg" alt="" />
        </div>
        <div className="info">
          <span>FABRICANTE</span>
          <p>Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4</p>
        </div>
        <div className="price">
          <span className="oldPrice">R$ 380,99</span>
          <strong className="priceValue">R$ 280,90</strong>
          <span className="installments">À VISTA</span>
          <div className="flags">
            <Flag name="FRETE GRÁTIS" />
            <Flag name="OPEN BOX" />
          </div>
        </div>
      </div>

      <div className="bottom">
        <BuyButton />
      </div>
    </ShelfItem>
  )
}

export default index