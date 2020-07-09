import React, { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import {
  Header,
  Title,
  Cards,
  Task,
  CardsToBeDone,
  CardsInProgress,
  CardsDone,
} from './styles';

// import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <Title>
          <img src={LogoImg} alt="TodoApp" />
          <h1>Create and organize your daily tasks</h1>
        </Title>
        <Link to="/Card">Criar Task</Link>
      </Header>

      <Cards>
        <CardsToBeDone>
          <Task isWaiting inProgress={false} isDone={false}>
            <span>Estudar React</span>
            <span>2d 15h 45m 10s</span>
          </Task>
          <Task isWaiting inProgress={false} isDone={false}>
            <span>Modelar Machine learning</span>
            <span>12h 10m 02s</span>
          </Task>
          <Task isWaiting inProgress={false} isDone={false}>
            <span>Concluir bootcamp</span>
            <span>30d 15h 45m 10s</span>
          </Task>
        </CardsToBeDone>
        <CardsInProgress>
          <Task isWaiting={false} inProgress isDone={false}>
            <span>Fazer front-end do app</span>
          </Task>
        </CardsInProgress>
        <CardsDone>
          <Task isWaiting={false} inProgress={false} isDone>
            <span>Fazer café da tarde</span>
          </Task>
        </CardsDone>
      </Cards>
    </>
  );
};

export default Dashboard;
