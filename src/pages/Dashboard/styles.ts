import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    color: #3a3a3a;
    margin-top: 80px;
  }

  a {
    display: flex;
    justify-content: center;
    padding: 15px 12px;
    margin-top: 40px;
    max-width: 150px;
    border: 1px solid #97ffa9;
    border-radius: 5px;
    text-decoration: none;

    color: #5e5353;
    font: 16px Roboto, sans-serif;
    background-color: #1cff43;
  }
`;

export const Cards = styled.div`
  margin-top: 30px;
`;
