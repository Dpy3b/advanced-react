import { Calendar } from 'antd';
import { Moment } from 'moment';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';
// описываем в интерфейсе какие пропсы будет ожидать компонент
interface EventCalendarProps {
	events: IEvent[]; //массив событий
}
// указываем как дженейрик интерфейс с пропсами
const EventCalendar: FC<EventCalendarProps> = ({events}) => {
	function dateCellRender(value: Moment) {
		const formatedDate = formatDate(value.toDate());
		const currentDayEvents = events.filter(
			ev => ev.date === formatedDate
		);
		return (
			<div>
				{currentDayEvents.map((ev, index) => (
					<div key={index}>{ev.description}</div>
				))}
			</div>
		);
	}

	return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
