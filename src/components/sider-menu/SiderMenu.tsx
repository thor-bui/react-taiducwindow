import React from 'react';
import { Menu } from 'antd';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';

const items = [
	{
		key: '1',
		icon: <UserOutlined />,
		label: 'nav 1',
	},
	{
		key: '2',
		icon: <VideoCameraOutlined />,
		label: 'nav 2',
	},
	{
		key: '3',
		icon: <UploadOutlined />,
		label: 'nav 3',
	},
];

export const SiderMenu = () => {
	return <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />;
};
