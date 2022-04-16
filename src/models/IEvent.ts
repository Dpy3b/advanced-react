export interface IEvent {
	author: string;
	guest: string;
	date: string; // можно было указать как Date, но мы будем приводить через строку к нужному для нас формату
	description: string;
}
