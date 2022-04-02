import styled from "styled-components"

export const Countdown = styled.div`
  background: var(--orange-strong);
  padding: 1.8rem 7.2rem;

  h1 {
    font-weight: 800;
    font-size: 2.4rem;
    line-height:3.2rem;
  }

  span {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.8rem;
    gap:  0.8rem;

    &.time {
      font-weight: 800;
      font-size: 2.6rem;
      line-height: 2.7rem;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`



