import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default ({ routes }) => {
  const renderMenu = (menus) => {
    return menus.map((route) => {
      if (!route.name) {
        return null;
      }
      if (route.routes && route.routes.length > 0) {
        return (
          <Menu.SubMenu key={`${route.name}`} title={<>{route.name}</>}>
            {renderMenu(route.routes)}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item key={`${route.name}`}>
          <Link to={route.path}>{route.name}</Link>
        </Menu.Item>
      );
    });
  };

  return (
    <Menu mode="inline" style={{ width: 200 }} defaultSelectedKeys={["首页"]}>
      {renderMenu(routes)}
    </Menu>
  );
};
