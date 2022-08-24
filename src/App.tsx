import React from 'react';
import { FC } from 'react';
import './App.css';
import { AppRouter } from './components/AppRouter';

export const App: FC = () => {
  return (
    <div>
      <AppRouter />
    </div>
  )
}
