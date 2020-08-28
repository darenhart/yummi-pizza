import Styled from 'styled-components';

export const ConfirmOrder = Styled.div`
  max-width: 300px;
  margin: auto;
  padding: 0 1rem;
`;

export const Form = Styled.form`
  > div {
    margin-bottom: .8rem ;
  }
  button {
    margin: auto;
    display: block;
  }
`;

export const OrderPrices = Styled.ul`
  list-style-type: none;
  padding: .5rem;
  li > span {
    float: right;
  }
`;

export const Loader = Styled.div`
  display: flex;
  justify-content: center;
`;
