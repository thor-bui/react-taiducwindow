import Auth from '@/pages/auth/Auth';
import { Navigate, useRoutes } from 'react-router-dom';

const Routes = [
	{
		path: '',
		element: <Navigate to="login" replace />,
	},
	{
		path: '/login',
		element: <Auth />,
	},
	{
		path: '/register',
		element: <Auth />,
	},
];

const ConfigRoutes = () => {
	const component = useRoutes(Routes);

	return component;
};

export default ConfigRoutes;
