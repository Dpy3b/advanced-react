import React, { FC, useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Layout } from 'antd';
import { IUser } from './models/IUser';
import { useActions } from './hooks/useActions';

const App: FC = () => {
	const { setUser, setIsAuth } = useActions(); //получаем экшн-криэйторы

	//крч вся эта приблуда с локалстроаджем это чисто имитация, в реальном проекте мы бы отправляли токен на проверку и в зависимости от этого уже устанавливали нужные нам значения в состояние


	useEffect(() => {
		//ищем, сохранилась ли информация об авторизации в локальном хранилище и записываем пользователя в состояние чтобы ему не пришлось вводить логин/пароль а сразу продолжать пользоваться приложением
		if (localStorage.getItem('auth')) {
			setUser({ username: localStorage.getItem('username' || '') } as IUser);
			setIsAuth(true); // диспатчим успешную авторизацию в редюсер
		}
	}, []);
	return (
		<Layout>
			<Navbar />
			<Layout.Content>
				<AppRouter />
			</Layout.Content>
		</Layout>
	);
};

export default App;
