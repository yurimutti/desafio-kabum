import styled from 'styled-components'

export const MainBannerInner = styled.div`
  a {
    height: 310px;

    @media (max-width: 1400px) {
      height: 22vw;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
    object-position: center top;
  }
`