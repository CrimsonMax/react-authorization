import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload
  }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))
      const users = await axios.get<IUser[]>('./users.json')
      const validate = users.data.find(elem => elem.username === username && elem.password === password)

      setTimeout(async () => {
        if (validate) {
          localStorage.setItem('auth', 'true')
          localStorage.setItem('username', validate.username)
          dispatch(AuthActionCreators.setIsAuth(true))
          dispatch(AuthActionCreators.setUser(validate))
        } else {
          dispatch(AuthActionCreators.setError('Incorrect data input!'))
        }

        dispatch(AuthActionCreators.setIsLoading(false))
      }, 1000)

    } catch (error) {
      dispatch(AuthActionCreators.setError('Error Macro'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setUser({} as IUser))
    dispatch(AuthActionCreators.setIsAuth(false))
  },
}