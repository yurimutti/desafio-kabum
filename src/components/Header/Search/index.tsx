import { Form, SearchWrapper } from './styles'
import ArrowSvg from './ArrowSvg'

const Search = (): JSX.Element => {
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
};

export default Search