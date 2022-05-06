import React, { FC} from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes } from '../router';
import { IRoute } from '../router';
import { RouteNames } from '../router';
const AppRouter: FC = () => {
	// свой хук для выцепления конкретного состояния из конкретного редюсера
	const {isAuth} = useTypedSelector(state => state.auth)

	return isAuth ? (
		<Routes>
			{privateRoutes.map(route => (
				<Route
					path={route.path}
					element={<route.element />} // ВНИМАНИЕ! ЗДЕСЬ МЫ ОБОРАЧИВАЕМ В </> ДЛЯ ВАЛИДНОСТИ, т.е. берем именно как jsx-элемент а не модуль
					key={route.path}
				/>
			))}
			<Route path="*" element={<Navigate replace to="/advanced-react/" />} />{' '}
			{/* редирект с любой несуществующей на главную для залогинненых */}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(route => (
				<Route
					path={route.path}
					element={<route.element />} // ВНИМАНИЕ! ЗДЕСЬ МЫ ОБОРАЧИВАЕМ В </> ДЛЯ ВАЛИДНОСТИ, т.е. берем именно как jsx-элемент а не модуль
					key={route.path}
				/>
			))}
			<Route
				path="*"
				element={<Navigate replace to="/advanced-react/login" />}
			/>
			{/* редирект с любой несуществующей на логин для незалогинненых */}
		</Routes>
	);
};

export default AppRouter;
