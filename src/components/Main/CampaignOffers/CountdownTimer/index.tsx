import React from 'react'
import Countdown from 'react-countdown';

import Timer from './Timer'
import { CountdownWrapper, Container } from "./styles"

const CountdownTimer = (): JSX.Element => {
  const renderer = ({ days,hours, minutes, seconds }) => {
    return <span>{days}D {hours}:{minutes}:{seconds}</span>;
  };

  return (
    <CountdownWrapper>
      <Container>
        <h1>BLACK FRIDAY</h1> 
        <p>A PROMOÇÃO TERMINA EM: <span className="wrapper"><Timer />
          <Countdown 
              date={Date.now() + 1000 * 60 * 60 * 24 * 16 } 
              renderer={renderer} 
            />
            {/* 1000 * 60 * 60 * 24 * 16 = 16 days */}
        </span>
        </p>
      </Container>
    </CountdownWrapper>
  )
}

export default CountdownTimer