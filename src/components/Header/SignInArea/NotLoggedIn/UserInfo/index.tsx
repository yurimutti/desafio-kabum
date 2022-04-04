import { useContext } from 'react'
import { Span } from './styles'
import { UserContext } from '../../../../../contexts/UserContext'

type UserTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn(arg1: boolean): boolean;
}

const UserInfo = (): JSX.Element => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext) as UserTypes

  function handleClick() {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <Span>
      Faça <a href="#" onClick={handleClick}>Login</a> ou<br />
      crie seu <a href="#">Cadastro</a>
    </Span>
  )
};


export default UserInfo