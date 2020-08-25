import Styled from 'styled-components';
import { greenSecondary } from '../../variables';

export const Item = Styled.div`
  padding: 1rem;
  border-bottom: solid 1px #CCC;
  display: flex;
  justify-content: space-between;
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

export const Body = Styled.div`
  display: flex;
`;

export const Image = Styled.div`
  margin-right: 1rem;
  min-width: 6rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
`;

export const Controls = Styled.div`
  min-width: 4rem;
  margin-top: 1rem;
  margin-left: 1rem;
  text-align: center;
`;

export const Submit = Styled.div`
  margin-top: 1rem;
  text-align: center;
`;
