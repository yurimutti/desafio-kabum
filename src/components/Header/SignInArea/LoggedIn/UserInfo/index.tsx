import { useContext } from 'react'
import { UserContext } from '../../../../../contexts/UserContext'
import { UserInfoInner } from './styles'

type UserTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn(arg1: boolean): boolean;
}

function index() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext) as UserTypes

  function handleClick() {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <UserInfoInner>
      <div>
        <span>
          Olá, Luis Henrique
        </span>
      </div>
      <div>
        <a href="#">Minha Conta</a>
        <span> | </span>
        <a href="#" onClick={handleClick}>Sair</a>
      </div>
    </UserInfoInner>
  )
}

export default index