import Styled from 'styled-components';
import { yellowSecondary, brownSecondary, containerWidth } from './variables';

export const Header = Styled.header`
  background-color: ${yellowSecondary};
  padding: 0 .5rem;
  a {
    color: ${brownSecondary};
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    max-width: ${containerWidth};
  }
`;

export const Brand = Styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 3.6rem;
    margin: .2rem .5rem .2rem 0;
  }
`;

export const Body = Styled.div`
  margin: auto;
  max-width: ${containerWidth};
`;
