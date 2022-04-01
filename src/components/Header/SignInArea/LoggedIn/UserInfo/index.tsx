import { UserInfoInner } from './styles'

function index() {
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
        <a href="#">Sair</a>
      </div>
    </UserInfoInner>
  )
}

export default index