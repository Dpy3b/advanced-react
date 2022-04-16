import { Button, Layout, Modal, Row } from 'antd';
//import Layout from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const Event= () => {
	const [modalVisible, setModalVisible] = useState(false);
	const {fetchGuests, createEvent, fetchEvents} = useActions()
	const {guests, events} = useTypedSelector(state => state.event)


	const {user} = useTypedSelector(state => state.auth)
	useEffect(()=> {
		fetchGuests()
		fetchEvents(user.username)
	}, [])

	const addNewEvent = (event)=> {
		setModalVisible(false)
		createEvent(event)
	}

	return (

		<Layout>

			<EventCalendar events={events} />
			<Row justify="center">
				<Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
			</Row>
			<Modal
				title="Добавить событие"
				visible={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
			>
				<EventForm guests={guests} submit={addNewEvent}/>
			</Modal>
		</Layout>
	);
};

export default Event;
