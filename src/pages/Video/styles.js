import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;


  a{
    margin: 10px 65px;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    color: var(--white);
    border: 1px solid var(--white);
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    transition: opacity .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }

}
`;
