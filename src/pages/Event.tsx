import { Button, Layout, Modal, Row } from 'antd';
//import Layout from 'antd/lib/layout/layout';
import React, { FormEvent, useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event= () => {
	const [modalVisible, setModalVisible] = useState(false);
	const {fetchGuests, createEvent, fetchEvents} = useActions()
	const {guests, events} = useTypedSelector(state => state.event)


	const {user} = useTypedSelector(state => state.auth)
	useEffect(()=> {
		fetchGuests()
		fetchEvents(user.username)
	}, [])

	const addNewEvent = (event: IEvent)=> {
		setModalVisible(false)
		createEvent(event)
	}

	return (

		<Layout>

			<EventCalendar events={events} />
			<Row justify="center">
				<Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
			</Row>
			{/* @ts-ignore this lib is incompatible with react18 */}
			<Modal
				title="Добавить событие"
				visible={modalVisible}
				footer={null} // просто убираем дефолтный футер с 2 кнопками, ниже делаем свою
				onCancel={() => setModalVisible(false)}
			>
				<EventForm guests={guests} submit={addNewEvent}/>
			</Modal>
		</Layout>
	);
};

export default Event;
