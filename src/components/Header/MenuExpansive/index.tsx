import React, { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'

import { Nav, Container } from './styles'

import ArrowSvg from './ArrowSvg'

type UserTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn(arg1: boolean): boolean;
}

const MenuExpansive = (): JSX.Element => {
  const { isLoggedIn } = useContext(UserContext) as UserTypes
  return isLoggedIn && (
    <Nav>
      <Container>
        <ul>
          <li className="dropdown">
            <a href="#">
              TODOS OS DEPARTAMENTOS <ArrowSvg/>
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
};

export default MenuExpansive
