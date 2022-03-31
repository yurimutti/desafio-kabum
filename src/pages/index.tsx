import Head from 'next/head'
import { createServer } from 'miragejs'

import Main from '../components/Main'

import GlobalStyles from '../styles/global'


createServer({
  routes() {
    this.get("/api/products", () => ([
      {
        id: 1,
        manufacturer: 'FABRICANTE',
        name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-01.jpg',
      },
      {
        id: 2,
        manufacturer: 'FABRICANTE',
        name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-01.jpg',
      },
      {
        id: 3,
        manufacturer: 'FABRICANTE',
        name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-01.jpg',
      },
      {
        id: 4,
        manufacturer: 'FABRICANTE',
        name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-01.jpg',
      },
      {
        id: 5,
        manufacturer: 'FABRICANTE',
        name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-01.jpg',
      },
      {
        id: 6,
        manufacturer: 'FABRICANTE',
        name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-01.jpg',
      },
      {
        id: 7,
        manufacturer: 'FABRICANTE',
        name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-01.jpg',
      },
    ]))
  },
})

export default function Home() {
  return (
    <>
      <Head>
        <title>KaBuM! | Maior E-commerce de Tecnologia e Games da América Latina</title>
      </Head>
      <GlobalStyles />
      <Main />
    </>
    )
}
