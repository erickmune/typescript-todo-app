import styled, { css } from 'styled-components';

interface TaskProps {
  isWaiting: boolean;
  inProgress: boolean;
  isDone: boolean;
}

export const Header = styled.header`
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
    box-shadow: 2px 3px 3px #009933;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-size: 32px;
    color: #3a3a3a;
    margin: 0 auto;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;

  width: 100%;
`;

export const Task = styled.div<TaskProps>`
  display: flex;
  flex-direction: column;

  width: 330px;
  height: 100px;
  flex: 1;

  ${(props) =>
    props.isWaiting &&
    css`
      border-color: blue;
    `}

  ${(props) =>
    props.inProgress &&
    css`
      border-color: green;
    `}

  ${(props) =>
    props.isDone &&
    css`
      border-color: yellow;
    `}

  & + div {
    margin-top: 8px;
  }

  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 5px;

  span {
    padding: 6px 6px;
  }
`;

export const CardsToBeDone = styled.div``;

export const CardsInProgress = styled.div``;

export const CardsDone = styled.div``;
