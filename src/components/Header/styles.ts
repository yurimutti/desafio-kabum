import styled from "styled-components"

export const Header = styled.header`
  background: var(--blue)
`
export const Container = styled.div`
  align-items: center;  
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 2.4rem 0; 
  
  
  @media  (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.6rem;
    padding: 1.6rem 0.8rem; 
  }  
`

