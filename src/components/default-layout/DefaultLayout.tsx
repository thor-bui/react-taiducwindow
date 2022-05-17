import { SiderMenu } from '@/components/sider-menu/SiderMenu';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
	.logo {
		height: 32px;
		margin: 16px;
		background: rgba(255, 255, 255, 0.3);
	}

	.site-layout .site-layout-background {
		background: #fff;
	}

	.trigger {
		padding: 0 24px;
		font-size: 18px;
		line-height: 64px;
		cursor: pointer;
		transition: color 0.3s;
	}

	.trigger:hover {
		color: #1890ff;
	}

	.site-sidebar {
		min-height: 100vh;
	}
`;

const { Sider, Header, Content } = Layout;

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = (props: DefaultLayoutProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggle = () => {
		setCollapsed((collapsed) => !collapsed);
	};

	return (
		<StyledLayout>
			<Layout>
				{/* sidebar */}
				<Sider trigger={null} collapsible collapsed={collapsed} className="site-sidebar">
					<div className="logo" />
					<SiderMenu />
				</Sider>

				<Layout className="site-layout">
					{/* header */}
					<Header className="site-layout-background" style={{ padding: 0 }}>
						{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
							onClick: toggle,
						})}
					</Header>
					{/* content */}
					<Content
						className="site-layout-background"
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						}}
					>
						{props?.children}
					</Content>
				</Layout>
			</Layout>
		</StyledLayout>
	);
};

export default DefaultLayout;
