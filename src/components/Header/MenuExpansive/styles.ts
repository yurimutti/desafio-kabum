import styled from "styled-components"

export const Nav = styled.nav`
  background: var(--orange-weak);
  font-size: 1.4rem;
  height: 3.2rem;
  padding: 0 0.8rem; 

  ul { 
    align-items: center;
    display: flex;
    height: 3.2rem;
    gap: 3.2rem;

    @media  (max-width: 992px) {
      gap: 0.8rem;
    }  

    @media  (max-width: 576px) {
      gap: 0rem;
    }  

    li {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;

      a {
        font-size: 1.4rem;
        line-height: 1.6rem;
        font-weight: 700;

        @media  (max-width: 992px) {
          font-size: 1.2rem;
        }

        @media  (max-width: 576px) {
          text-align: center;
        }  
      }

      &::after {
        content: '';
        background: #FF8F49;
        display: block;
        height: 95%;
        width: 2px;
        margin-left: 3.2rem;

        @media  (max-width: 992px) {
          margin-left: 0.8rem;
        }  

        @media  (max-width: 576px) {
          display: none;
          margin-left: 0;
        }  
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
      }

      @media  (max-width: 576px) {
        flex-basis: 80%;
      }  
    }
    
  }
`

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
`