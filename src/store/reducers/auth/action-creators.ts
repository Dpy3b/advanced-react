import {
	AuthActionsEnum,
	SetUserAction,
	SetAuthAction,
	SetIsLoadingAction,
	SetErrorAction,
} from './types';
import { IUser } from './../../../models/IUser';
import { AppDispatch } from './../../index';
import axios from 'axios';
import UserServise from '../../../api/UserService';

// наши экшн криэйторы, обертка для них
export const AuthActionCreators = {
	setUser: (user: IUser): SetUserAction => ({
		type: AuthActionsEnum.SET_USER,
		payload: user,
	}),
	setIsAuth: (auth: boolean): SetAuthAction => ({
		type: AuthActionsEnum.SET_AUTH,
		payload: auth,
	}),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({
		type: AuthActionsEnum.SET_IS_LOADING,
		payload,
	}),
	setError: (payload: string): SetErrorAction => ({
		type: AuthActionsEnum.SET_ERROR,
		payload,
	}),
	// ниже уже асинхронные экшн криэйторы
	// ниже опять же прекол с редакс-фанк
	login:
		(username: string, password: string) => async (dispatch: AppDispatch) => {
			try {
				dispatch(AuthActionCreators.setIsLoading(true));
				// используем искуственную задержку для наглядности, т.к. работаем не с реальным сервером
				setTimeout(async () => {
					const response = await UserServise.getUsers() // data - массив пользователей. Указываем это дженейриком и ниже TS уже даёт автокомплит
					console.log(response)
					const mockUser = response.data.find(
						user => user.username === username && user.password === password // вот здесь забыл написать user.password и было просто password
					);
					if (mockUser) {
						localStorage.setItem('auth', 'true');
						localStorage.setItem('username', mockUser.username);
						// последовательность отправки в диспатч здесь ВАЖНА!
						dispatch(AuthActionCreators.setUser(mockUser));
						dispatch(AuthActionCreators.setIsAuth(true));
					} else {
						dispatch(
							AuthActionCreators.setError('Некорректный логин или пароль')
						);
					}
					dispatch(AuthActionCreators.setIsLoading(false));
				}, 1000);
			} catch (e) {
				dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
			}
		},
	logout: () => async (dispatch: AppDispatch) => {
		//ниже убираем try/catch, т.к. здесь в принципе ничего страшного не может произойти
		localStorage.removeItem('auth'); // удаляем флаг авторизованности
		localStorage.removeItem('username'); // удаляем юзернейм
		dispatch(AuthActionCreators.setUser({} as IUser)); // ОБНУЛЯЕМ состояние
		dispatch(AuthActionCreators.setIsAuth(false)); // указываем состояние авторизации в фолс, чтобы нас редиректнуло на страницу с логином, это происходит через условную отрисовку, логика написана в AppRouter
	},
};
