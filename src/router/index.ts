import React, { FC, ReactChild } from 'react';
import Event from '../pages/Event';
import Login from '../pages/Login';

// описываем роуты для провайдера

export interface IRoute {
	path: string;
	element: React.ComponentType;
}

// описываем здесь все страницы, которые будут в нашем приложении

export enum RouteNames {
	LOGIN = '/advanced-react/login',
	EVENT = '/advanced-react/',
}

// отображаем маршруты

export const publicRoutes:IRoute[] = [
	{
		path: RouteNames.LOGIN,
		element: Login,
	},
];

export const privateRoutes:IRoute[] = [
	{
		path: RouteNames.EVENT,
		element: Event,
	},
];
