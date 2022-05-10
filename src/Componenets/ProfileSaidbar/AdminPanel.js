import { Breadcrumb, Layout, Menu } from "antd";
import "./AdminPanel.css";
import React, { useState } from "react";
import { UserOutlined, ProfileOutlined, MailOutlined } from "@ant-design/icons";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Users from "./Users";
const { Sider, Header, Content, Footer } = Layout;
export default function AdminPanel() {
  const [collapsed, setCollaosed] = useState(false);
  // const location = useLocation();
  const onCollapse = () => {
    setCollaosed(!collapsed);
  };
  return (
    <div className="">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          id="components-layout-demo-side"
        >
          <div className="logo text-center">
            <p className="text-center">Logo</p>
          </div>
          <div>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              className="AdminMenu"
              // defaultSelectedKeys={[location.pathname]}
            >
              <Menu.Item>
                <UserOutlined />
                <span>User</span>
                {/* <Link to="/"></Link> */}
              </Menu.Item>
              <Menu.Item>
                <ProfileOutlined />
                <span>Profile</span>
              </Menu.Item>
              <Menu.SubMenu title="Our Team">
                <Menu.Item>item new</Menu.Item>
              </Menu.SubMenu>
            </Menu>
            ;
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0 }}
          ></Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Mirzayev</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Users/>}/>
                </Routes>
              </BrowserRouter> */}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2022 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
