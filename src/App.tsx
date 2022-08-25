import { Layout } from 'antd';
import React from 'react';
import { FC } from 'react';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';

export const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}
