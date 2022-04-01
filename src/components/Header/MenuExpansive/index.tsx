import React, { useState} from 'react'

import { Nav, Container } from './styles'

import ArrowIcon from './ArrowIcon'

export default function index() {
  const [isActive, setIsACtive] = useState(false)

  const handleClick = () => {
    setIsACtive(!isActive)
  }

  return (
    <Nav>
      <Container>
        <ul>
          <li className="dropdown" onClick={handleClick}>
            <a href="#">
              TODOS OS DEPARTAMENTOS <ArrowIcon className={isActive && 'active'} />
            </a>
          </li>
          <li>
            <a href="#">SEJA PRIME</a>
          </li>
          <li>
            <a href="#">CENTRAL DE ATENDIMENTO</a>
          </li>
        </ul>
      </Container>
    </Nav>
  )
}


