import moment, { Moment } from 'moment';


export const rules = {
	// тут мы возвращаем ОБЪЕКТ, он просто обернут в круглые скобки т.к. {{...}} не прокатило бы
	// тут короче кастомизация валидации
	required: (message: string = 'Обязательное поле!') => ({
		required: true,
		message,
	}),
	// штуки ниже из Moment.js
	isDateAfter: (message: string) => () => ({
		validator(_: any, value: Moment) {
			if (value.isSameOrAfter(moment())) {
				return Promise.resolve();
			}
			return Promise.reject(new Error(message));
		},
	}),
};
