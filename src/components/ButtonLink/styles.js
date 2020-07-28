import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`  
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  

  @media (max-width: 800px) {
    
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      color:var(--black);
      border-radius: 0;
      border: 0;
      text-align: center;
    
  }
  
`;

 
export default Container;