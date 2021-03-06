import { Card, Layout, Row } from 'antd';
import React, { FC } from 'react';
import LoginForm from '../components/LoginForm';

const Login: FC = () => {
	return (
		<Layout>
			<Row justify="center" align="middle" className="h100">
				<Card style={{ width: 450}}>
					<LoginForm />
				</Card>
			</Row>
		</Layout>
	);
};

export default Login;
