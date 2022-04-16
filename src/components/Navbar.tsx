import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
	const router = useNavigate();
	const {isAuth, user} = useTypedSelector(state => state.auth) // получаем как факт авторизации, так и имя конкретного юзера
	const {logout} = useActions()
	return (
		<Layout.Header>
			<Row justify="end">
				{isAuth ? (
					/* реакт.реактФрагмент типа */
					<>
						<div style={{ color: 'white' }}>{user.username}</div>
						<Menu theme="dark" selectable={false} mode="horizontal">
							{/* в отличии от useHistory нам не нужен метод пуш у роутера (просто по дефолту пишем путь) */}
							<Menu.Item onClick={logout} key={1}>
								Выйти
							</Menu.Item>
						</Menu>
					</>
				) : (
					<Menu theme="dark" selectable={false}>
						{/* в отличии от useHistory нам не нужен метод пуш у роутера (просто по дефолту пишем путь) */}
						<Menu.Item onClick={() => router(RouteNames.LOGIN)} key={1}>
							Логин
						</Menu.Item>
					</Menu>
				)}
			</Row>
		</Layout.Header>
	);
};

export default Navbar;
