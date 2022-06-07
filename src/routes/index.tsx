import { Spin } from 'antd';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Auth = React.lazy(() => import('@/pages/auth/Auth'));
const DefaultLayout = React.lazy(() => import('@/components/default-layout/DefaultLayout'));

const Routes = [
	{
		path: '',
		element: <Navigate to="login" replace />,
	},
	{
		path: '/login',
		element: (
			<React.Suspense fallback={<Spin />}>
				<Auth />
			</React.Suspense>
		),
	},
	{
		path: '/register',
		element: (
			<React.Suspense fallback={<Spin />}>
				<Auth />
			</React.Suspense>
		),
	},
	{
		path: '/category',
		element: (
			<React.Suspense fallback={<Spin />}>
				<DefaultLayout>
					<span>content</span>
				</DefaultLayout>
			</React.Suspense>
		),
	},
];

const ConfigRoutes = () => {
	const component = useRoutes(Routes);

	return component;
};

export default ConfigRoutes;
