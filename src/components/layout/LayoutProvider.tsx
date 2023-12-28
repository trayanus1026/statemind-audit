import React from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { ConfigProvider, App, Layout, Menu, theme } from 'antd'
import AppLogo from '@/assets/react.svg'

const { Header, Content, Footer } = Layout
const { useToken } = theme

const LayoutProvider: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = useToken()

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            footerPadding: 13
          }
        }
      }}
    >
      <App>
        <Layout className="minh-100">
          <Header className="header">
            <Link to="/" className="app-logo">
              <img alt="logo" src={AppLogo} />
            </Link>
            <Menu theme="dark" mode="horizontal" items={[]} />
          </Header>
          <Content className="content">
            <div className="content-body" style={{ background: colorBgContainer }}>
              <Outlet />
            </div>
          </Content>
          <Footer className="align-center">StateMind-Audit©2023 Created by Trayanus</Footer>
        </Layout>
      </App>
    </ConfigProvider>
  )
}

export default LayoutProvider
