import styled from 'styled-components'

export const ShelfItem = styled.div`
  background: var(--white);
  padding: 0.8rem;
  width: 200px;

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .body {
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
      margin-bottom: 1.6rem;
    }
  }

  .bottom {
    button {
      width: 100%;
    }
  }
`