import { Breadcrumb, Layout, Menu, Icon } from "antd";
import "./AdminPanel.css";
import React, { useState } from "react";
import {
  UserOutlined,
  ProfileOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Users from "./Users";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
const { Sider, Header, Content, Footer } = Layout;
export default function AdminPanel() {
  const [collapsed, setCollapsed] = useState(false);
  // const location = useLocation();
  const onCollapse = () => {
    setCollapsed(!collapsed);
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
              <Menu.Item key="/user">
                <UserOutlined />
                <span>User</span>

                {/* <Link to="/user">User</Link> */}
              </Menu.Item>
              <Menu.Item>
                <ProfileOutlined />
                <span>Profile</span>

                {/* <Link to='/profile'>
                  <span>Profile</span>
                </Link> */}
              </Menu.Item>
              <Menu.SubMenu
                title={
                  <span>
                    {/* <Icon type="user" /> */}
                    <UsergroupAddOutlined />
                    <span>Our Team</span>
                  </span>
                }
              >
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
              {/* <Routes>
                <Route path="user" element={<Users />} />
                <Route path="profile" element={<Profile/>}/>
              </Routes> */}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2022 Mirzayev Asqar
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
