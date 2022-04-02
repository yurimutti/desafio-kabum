import React from 'react';

import ShelfItem from './ShelfItem'
import { Shelfs, Container } from './styles'

function index() {
  return (
    <Shelfs>
      <Container>
        <ShelfItem />
      </Container>
    </Shelfs>
  )
}

export default index