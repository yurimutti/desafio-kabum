import styled from "styled-components"

export const BottomBanners = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  justify-content: space-between;
  max-width: 1200px;
  margin: 3.2rem  auto 5.8rem auto;

  @media  (max-width: 992px) {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`

