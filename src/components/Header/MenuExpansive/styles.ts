import styled from "styled-components"

export const Nav = styled.nav`
  background: var(--orange-weak);
  font-size: 1.4rem;
  height: 3.2rem;
  line-height: 1.8rem;

  ul { 
    align-items: center;
    display: flex;
    height: 3.2rem;
    gap: 3.2rem;

    li {
      align-items: center;
      display: flex;
      font-size: 1.4rem;
      font-weight: 700;
      height: 100%;
      justify-content: center;
      line-height: 2.4rem;

      &::after {
        content: '';
        background: #FF8F49;
        display: block;
        height: 95%;
        width: 2px;
        margin-left: 3.2rem;
      }
    }

    .dropdown {
      background: var(--orange-strong);
      position: relative;
      z-index: 2;

      &::before {
        background: var(--orange-strong);
        content: '';
        display: block;
        height: 100%;
        left: -140%;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 140%;
        z-index: 1;
      }

      svg {
        margin-left: 1.6rem;
        transition: all 0.3s;

        display: ${({ isActive }) => isActive && "none"};
      }
    }
    
  }
`

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
`