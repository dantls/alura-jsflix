import styled, { css } from 'styled-components';

export const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 96px;
  padding-left: 5%;
  padding-right: 5%;

  ${({ paddingAll }) => css`
    padding-top: 95px;
    padding-left: 0;
    padding-right: 0;
  `}
`;
