import React from 'react'

import Timer from './Timer'

import { Countdown, Container } from "./styles"

const index = () => {
  return (
    <Countdown>
      <Container>
        <h1>BLACK FRIDAY</h1>
        <span>A PROMOÇÃO TERMINA EM: <Timer /> <span className="time">13d 18:15:5</span></span>
      </Container>
    </Countdown>
  )
}

export default index