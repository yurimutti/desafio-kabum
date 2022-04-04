import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios'

import NextArrow from '../Slider/NextArrow'
import PrevArrow from '../Slider/PrevArrow'
import ShelfItem from './ShelfItem'
import { ShelfsElement, Container } from './styles'


type Products = {
  id: number;
  manufacturer: string;
  name: string;
  oldPrice: number;
  price: number;
  imageUrl: string;
  shipping: string[];
}

const Shelfs = (): JSX.Element => {
const [products, setProducts] = useState<Products[]>([])

  let settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchProducts()
  },[])

  return (
    <ShelfsElement>
      <Container>
        <Slider {...settings}>
          {products.map((product) => (
            <ShelfItem key={product.id} product={product}/>
          ))}
        </Slider>
      </Container>
    </ShelfsElement>
  )
};

export default Shelfs


