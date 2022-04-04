import styled from 'styled-components'

export const MainBannerInner = styled.div`
  height: 310px;
  background-color: red;
  cursor: pointer;

  @media (max-width: 1400px) {
    height: 22vw;
  }

  @media  (max-width: 576px) {
    height: 32vw;
  }  

  img {
    object-fit: contain;
    object-position: center top;
  }
`