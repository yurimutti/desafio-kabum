import { Form, SearchWrapper } from './styles'
import ArrowSvg from './ArrowSvg'

function index() {
  return (
    <SearchWrapper>
      <Form>
        <input type="text" placeholder="Busque aqui" />
        <button>
          <ArrowSvg />
        </button>
      </Form>
    </SearchWrapper>
  )
}

export default index