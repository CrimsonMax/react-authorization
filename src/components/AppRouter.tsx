import React from "react";
import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ContactsList } from "../pages/ContactsList";
import { Login } from "../pages/Login";
import { privateRoute, publicRoute, RouteNames } from "../routes";

export const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)

  return (
    isAuth
      ?
      <Routes>
        {
          privateRoute.map(elem => (
            <Route
              path={elem.path}
              element={<elem.components />}
              key={elem.path}
            />
          ))
        }
        <Route
          path='*'
          element={<ContactsList />}
        />
      </Routes>
      :
      <Routes>
        {
          publicRoute.map(elem => (
            <Route
              path={elem.path}
              element={<elem.components />}
              key={elem.path}
            />
          ))
        }
        <Route
          path='*'
          element={<Login />}
        />
      </Routes>
  )
}