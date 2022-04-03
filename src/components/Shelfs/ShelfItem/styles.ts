import styled from 'styled-components'

export const ShelfItem = styled.div`
  background: var(--white);
  width: 200px;
  height: 380px;
  transition: box-shadow 200ms ease 0s;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: rgb(40 41 61 / 4%) 0px 4px 8px, rgb(96 97 112 / 16%) 0px 8px 16px;
  }

  .header {
    padding: 0.8rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  
  .body {
    padding: 0.8rem 0.8rem 0 0.8rem;
    flex: 1;
    .info {
      span {
        display: inline-block;
        color: var(--text-grey-weak);
        font-size: 12px;
        font-weight: 400;
        line-height: 1.8rem;
        margin-bottom: 0.4rem;
      }

      p {
        color: var(--text-grey);
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1.8rem;
        margin-bottom: 0.8rem;
      }
    }
  }

  .price {
    display: flex;
    flex-direction: column;

    .oldPrice {
      color: var(--text-grey-mid);
      font-size: 12px;
      line-height: 21px;
      text-decoration: line-through;
    }
    
    .priceValue {
      color: var(--orange-text);
      font-size: 24px;
      font-weight: 700;
      line-height: 34px;
    }

    .installments {
      color: var(--text-grey-mid);
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 0.8rem;
    }

    .flags {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }

  .bottom {
    button {
      width: 100%;
    }
  }
`