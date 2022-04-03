import { useState } from 'react'

import Wishlist from '../../Wishlist'
import BuyButton from './BuyButton'
import Rating from './Rating'
import Flag from './Flag'
import { formatPrice } from '../../../utils/format'

import { ShelfItem } from './styles'

type ProductsProps = {
  product: {
    id: number;
    manufacturer: string;
    name: string;
    oldPrice: number;
    price: number;
    imageUrl: string;
    shipping: string[];
  }
}

function index({ product } :ProductsProps) {
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
            <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="info">
          <span>{product.manufacturer}</span>
          <p>{product.name}</p>
        </div>
        <div className="price">
          <span className="oldPrice">{formatPrice(product.oldPrice)}</span>
          <strong className="priceValue">{formatPrice(product.price)}</strong>
          <span className="installments">À VISTA</span>
          <div className="flags">
            {product.shipping?.map((item) => (
                <Flag name={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="bottom">
        <BuyButton id={product.id} />
      </div>
    </ShelfItem>
  )
}

export default index