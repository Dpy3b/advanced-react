import { Button, Form, Input } from 'antd';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {

	const { error, isLoading } = useTypedSelector(state => state.auth); // через useTypedSelector достаём редюсер auth и получаем поля error и isLoading
	// ниже делаем оба инпута УПРАВЛЯЕМЫМИ через состояние
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const {login} = useActions()
	const submit = () => {
		login(username, password)
		// dispatch(AuthActionCreators.login(username, password)); // передаем не просто захардкоженные строки, а два состояния выше
	};

	return (
		<Form onFinish={submit}>
			{error && <div style={{ color: 'coral', marginBottom: 10 }}>{error}</div>}
			<Form.Item
				label='Имя пользователя'
				name='username'
				/* пропс рулз предназначен для валидации */
				rules={[
					/* { required: true, message: 'Пожалуйста, введите имя пользователя!' }, */
					rules.required('Пожалуйста, введите имя пользователя!'),
				]}
			>
				<Input value={username} onChange={e => setUsername(e.target.value)} />
				{/* как пропс value передаём в инпуст состояние, в onChange изменяем состояние на то, которое получаем из инпута */}
			</Form.Item>

			<Form.Item
				label='Пароль'
				name='password'
				rules={[rules.required('Пожалуйста, введите пароль!')]} // при таком подходе нам необязательно знать, какие поля есть у объекта
			>
				<Input.Password
					visibilityToggle
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' loading={isLoading}>
					Войти
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
