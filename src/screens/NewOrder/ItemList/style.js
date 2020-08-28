import Styled from 'styled-components';
import { greenSecondary, brownSecondary } from '../../../variables';

export const ItemList = Styled.div`
  padding-bottom: 9rem;
`;

export const Loader = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const Item = Styled.div`
  padding: .6rem;
  border-bottom: solid 1px #CCC;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .pointer {
    cursor: pointer;
  }
  > * {
    flex: 1 0 120px;
    margin: 5px;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .hide {
    opacity: 0;
  }
  background-color: ${(props) =>
    props.selected ? greenSecondary : 'transparent'}
`;

export const Title = Styled.h3`
  margin-left: 1rem;
`;

export const Price = Styled.div`
  font-size: 14px;
  margin-top: .4rem;
  color: ${brownSecondary};
`;

export const Image = Styled.div`
  border-radius: 4px;
  min-height: 4rem;
  min-width: 6rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
`;

export const Controls = Styled.div`
  max-width: 3.4rem;
  display: grid;
  place-items: center;
  div {
    text-align: center;
  }
`;

export const Submit = Styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0px;
  left:0px;
  background: white;
  width: 100%;
  padding: 0.8rem 0;
  box-shadow: 0px -4px 5px rgba(0,0,0,.2)
`;
