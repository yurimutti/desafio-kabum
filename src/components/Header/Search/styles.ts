import styled from "styled-components"

export const Form = styled.form`
  position: relative;

  width: 100%;  

  input {
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 1.2rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 1.2rem;
    color: var(--text-grey-weak);
    font-size: 1.4rem;
    height: 3.6rem;
    line-height: 2.4rem;
    padding: 1.2rem 1.6rem;
    width: 100%;
  }

  button {
    position: absolute;
    right: -4.2rem;
    top: -5px;
  }
`

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 51.0rem;
`
