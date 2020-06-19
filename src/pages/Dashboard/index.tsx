import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import { Header, Cards } from './styles';

import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <img src={LogoImg} alt="TodoApp" />
        <h1>Create and organize your daily tasks</h1>
        <Link to="/Card">Criar Task</Link>
      </Header>

      <Cards />
    </>
  );
};

export default Dashboard;
