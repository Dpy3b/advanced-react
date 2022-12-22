import { IUser } from './../../../models/IUser';
import { AuthState, AuthAction, AuthActionsEnum } from './types';

// объект, который будет хранить дефолтное значение состояния этого редюсера
const initialState: AuthState = {
	isAuth: false,
	error: '',
	isLoading: false,
	user: {} as IUser, // 'пустой объект типа IUser'
};

export default function authReducer(
	state = initialState, // вот здесь к слову можно явно написать тип у state:AuthState, но т.к. тс штука умная, она сама его (тип) подхватила из дефолтного значения
	action: AuthAction
	// ниже указываем что редюсер должен всегда возвращать состояние этого типа
): AuthState {
	// в зависимости от типа экшна будем возвращать разное состояние
	// во всех кейсах мы возвращаем предыдущее состояние через деструктуризацию, но изменяеем соотв. поле на то значение, которое получаем из пейлоад
	switch (action.type) {
		case AuthActionsEnum.SET_AUTH:
			return { ...state, isAuth: action.payload, isLoading: false };

		case AuthActionsEnum.SET_USER:
			return { ...state, user: action.payload };

		case AuthActionsEnum.SET_ERROR:
			return { ...state, error: action.payload, isLoading: false };

		case AuthActionsEnum.SET_IS_LOADING:
			return { ...state, isLoading: action.payload };

		default:
			return state;
	}
}
