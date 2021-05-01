import React, { Suspense, lazy } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./index.css";
import routes from "@/routes";
import Menus from '../menu'
import View from '../view'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const { Header, Content, Sider } = Layout;

function RouteWithSubRoutes(route) {
  if(!route.component){
    return null
  }
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <View><route.component {...props} routes={route.routes} /></View> 
      )}
    />
  );
}
export default function () {
  return (
    <Router>
      <Layout style={{ height: "100%" }}>
        <Header style={{height: 52, lineHeight: '48px'}}>
          <div className="logo" />
        </Header>

        <Layout>
          <Sider className="layout">
            <Menus routes={routes} ></Menus>  
          </Sider>
          <Content>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map((route, i) => (
                   <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </Suspense>

          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
