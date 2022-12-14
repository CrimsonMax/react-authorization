import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { FC } from 'react';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

export const App: FC = () => {
  const {setUser, setIsAuth} = useActions()
  
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      // checking authorization tokens
      setUser({username: localStorage.getItem('username' || '')} as IUser)
      setIsAuth(true)
    }
  }, [])
  
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}
