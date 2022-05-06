import moment, { Moment } from 'moment';

// штуки ниже из Moment.js
// тут короче кастомизация валидации
export const rules = {
	// тут мы возвращаем ОБЪЕКТ, он просто обернут в круглые скобки т.к. {{...}} не прокатило бы
	required: (message: string = 'Обязательное поле!') => ({
		required: true,
		message,
	}),
	isDateAfter: (message: string) => () => ({
		validator(_: any, value: Moment) {
			if (value.isSameOrAfter(moment())) {
				return Promise.resolve();
			}
			return Promise.reject(new Error(message));
		},
	}),
};
