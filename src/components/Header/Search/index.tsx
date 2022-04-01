import { Form, SearchWrapper } from './styles'
import Arrow from './Arrow'

function index() {
  return (
    <SearchWrapper>
      <Form>
        <input type="text" placeholder="Busque aqui" />
        <button>
          <Arrow />
        </button>
      </Form>
    </SearchWrapper>
  )
}

export default index