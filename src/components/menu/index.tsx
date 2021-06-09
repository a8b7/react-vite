import React, {useState, useEffect} from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default ({ routes }) => {
  const location = useLocation()
  const [defaultSelectedKeys, setKeys]  = useState([]);
  useEffect(() => setKeys([location.pathname]), [location.pathname])
  
  const renderMenu = (menus) => {
    return menus.map((route) => {
      if (!route.name) {
        return null;
      }
      if (route.routes && route.routes.length > 0) {
        return (
          <Menu.SubMenu key={`${route.path}`} title={<>{route.name}</>}>
            {renderMenu(route.routes)}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item key={`${route.path}`}>
          <Link to={route.path}>{route.name}</Link>
        </Menu.Item>
      );
    });
  };

  return (
    <Menu mode="inline"  defaultSelectedKeys={defaultSelectedKeys}>
      {renderMenu(routes)}
    </Menu>
  );
};

