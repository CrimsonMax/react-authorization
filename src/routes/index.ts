import React from "react";
import { ContactsList } from "../pages/ContactsList";
import { Login } from "../pages/Login";

export interface IRoute {
  path: string;
  components: React.ComponentType;
}

export enum RouteNames {
  LOGIN = '/login',
  CONTACTS = '/',
}

export const privateRoute: IRoute[] = [
  {
    path: RouteNames.CONTACTS,
    components: ContactsList,
  }
]

export const publicRoute: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    components: Login,
  }
]