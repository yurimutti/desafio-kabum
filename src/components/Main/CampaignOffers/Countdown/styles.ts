import styled from "styled-components"

export const CountdownWrapper = styled.div`
  background: var(--orange-strong);
  padding: 1.8rem 7.2rem;

  h1 {
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  p {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.6rem;
    gap:  0.8rem;

    .wrapper {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    @media  (max-width: 576px) {
      flex-direction: column;
    }
  }

  span {
    font-weight: 800;
    font-size: 2.6rem;
    line-height: 2.7rem;
  }

  @media  (max-width: 992px) {
    padding: 0.8rem 2.4rem;
    h1 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.2rem;
    }
    span {
      font-size: 1.8rem;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;

  @media  (max-width: 992px) {
    flex-direction: column;
  }
`



