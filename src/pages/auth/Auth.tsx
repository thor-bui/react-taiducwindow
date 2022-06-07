import { authApi } from '@/apis';
import { AuthModel } from '@/apis/auth/auth.model';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { FC, useState } from 'react';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayout = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	.auth-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 400px;
		width: 100%;
		background: #fff;
		box-shadow: 0 10px 34px -15px rgb(0 0 0 / 24%);
		border-radius: 10px;
	}

	.auth-title {
		text-align: center;
	}
`;

const Auth: FC = () => {
	const location = useLocation();
	const isLogin = matchPath(location.pathname, '/login');
	const navigate = useNavigate();

	const [form] = useForm();

	const [loading, setLoading] = useState(false);

	const handleSubmitForm = async (formValues: AuthModel.AuthRequestBody) => {
		const requestBody: AuthModel.AuthRequestBody = {
			username: formValues.username.trim().toLowerCase(),
			password: formValues.password.trim().toLowerCase(),
		};
		if (!isLogin) {
			requestBody.confirmPassword = formValues.confirmPassword!.trim().toLowerCase();
		}

		try {
			setLoading(true);
			if (isLogin) {
				await authApi.login(requestBody);
				setLoading(false);
				navigate('/category');
			} else {
				await authApi.register(requestBody);
				setLoading(false);
				navigate('/login');
			}
		} catch (error: any) {
			setLoading(false);
			message.error(error.message);
		}
	};

	return (
		<AuthLayout>
			<div className="auth-container p48">
				<Typography.Title level={2} className="auth-title">
					{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
				</Typography.Title>

				<Form form={form} onFinish={handleSubmitForm}>
					<Form.Item
						name="username"
						rules={[
							{ required: true, message: 'Username là bắt buộc!' },
							{ min: 4, message: 'Username phải có ít nhất 4 ký tự' },
							{ max: 50, message: 'Username tối đa là 50 ký tự' },
							{ whitespace: true, message: 'Username là bắt buộc!' },
						]}
					>
						<Input prefix={<UserOutlined />} placeholder="Username" />
					</Form.Item>

					<Form.Item
						name="password"
						hasFeedback
						rules={[
							{ required: true, message: 'Password là bắt buộc!' },
							{ min: 6, message: 'Password phải có ít nhất 6 ký tự' },
							{ whitespace: true, message: 'Username là bắt buộc!' },
						]}
					>
						<Input prefix={<LockOutlined />} type="password" placeholder="Password" />
					</Form.Item>

					{!isLogin && (
						<Form.Item
							name="confirmPassword"
							hasFeedback
							dependencies={['password']}
							rules={[
								{ required: true, message: 'Confirm password là bắt buộc!' },
								{ min: 6, message: 'Password phải có ít nhất 6 ký tự' },
								{ whitespace: true, message: 'Username là bắt buộc!' },
								({ getFieldValue }) => ({
									validator: (_, value) => {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}

										return Promise.reject(new Error('Mật khẩu xác nhận không trùng khớp!'));
									},
								}),
							]}
						>
							<Input prefix={<LockOutlined />} type="password" placeholder="Confirm password" />
						</Form.Item>
					)}

					<Form.Item>
						<Button type="primary" htmlType="submit" loading={loading} block>
							{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
						</Button>

						<p className="mt10 p0">
							<Link to={isLogin ? '/register' : '/login'} onClick={() => form.resetFields()}>
								{isLogin ? 'Đăng ký' : 'Đăng nhập'}
							</Link>
						</p>
					</Form.Item>
				</Form>
			</div>
		</AuthLayout>
	);
};

export default Auth;
