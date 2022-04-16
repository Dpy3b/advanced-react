import { IUser } from './../../../models/IUser';
export interface AuthState {
	isAuth: boolean;
	user: IUser;
	isLoading: boolean; // будет отвечать за индикацию загрузки
	error: string; // при неуспешном логине будем хранить текстовую ошибку
}

export enum AuthActionsEnum {
	SET_AUTH = 'SET_AUTH',
	SET_ERROR = 'SET_ERROR',
	SET_USER = 'SET_USER',
	SET_IS_LOADING = 'SET_IS_LOADING', // тут стояло  'SET_AUTH', я не заметил, и по итогу нас через секунду выбрасывало
}
// создаем отдельно каждый интерфейс для каждого экшна
export interface SetAuthAction {
	type: AuthActionsEnum.SET_AUTH;
	payload: boolean;
}

export interface SetErrorAction {
	type: AuthActionsEnum.SET_ERROR;
	payload: string;
}

export interface SetUserAction {
	type: AuthActionsEnum.SET_USER;
	payload: IUser
}

export interface SetIsLoadingAction {
	type: AuthActionsEnum.SET_IS_LOADING;
	payload: boolean
}



export type AuthAction = SetAuthAction | SetErrorAction | SetUserAction | SetIsLoadingAction; // обобщаем экшны в тип
