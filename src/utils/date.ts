import { Moment } from 'moment';

// кастомизация даты для событий
export const formatDate = (date: Date): string =>{
	const year = date.getFullYear();
	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const day = date.getDate() < 10 ? `0${date.getMonth()}` : date.getDate();

	return `${year}.${month}.${day}`;
}