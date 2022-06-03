import { Breadcrumb, Layout, Menu, Icon } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import logo from "./../../img/busimg.jpg";
import {
  UserOutlined,
  ProfileOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Users from "./Users";
import Profile from "./Profile";
import "./AdminPanel.css";
import dateFormat, { masks } from "dateformat";

const now = new Date();

export default function AdminPanel() {
  const { Sider, Header, Content, Footer } = Layout;

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
          <div className="topLogo">
            <div className="logo text-center">
              <p className="text-center">
                <img src={logo} alt="" />
              </p>
            </div>
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
              <Menu.Item key={"/profile"}>
                <Link to={"/profile"}>
                  <ProfileOutlined />
                  <span>Profile</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/user">
                <Link to={"/user"}>
                  <UserOutlined />
                  <span>User</span>
                </Link>
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
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="layoutHeader">
              <h6>Server vaqti: {dateFormat(now)}</h6>
            </div>
          </Header>
          <Content style={{ margin: "20px 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 400 }}
            >
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/user" element={<Users />} />
              </Routes>
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
