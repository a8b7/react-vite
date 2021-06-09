import React, { Suspense, lazy } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./index.css";
import routes from "@/routes";
import Menus from '../menu'
import View from '../view'
import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom";
const { Header, Content, Sider } = Layout;


const renderRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) =>
    routes ? (
        <Switch {...switchProps}>
            {routes.map((route, i) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={props => {
                        if (!route.requiresAuth || authed || route.path === authPath) {
                            return <route.component {...props} {...extraProps} route={route} />;
                        }
                        return (
                            <Redirect
                                to={{ pathname: authPath, state: { from: props.location } }}
                            />
                        );
                    }}
                />
            ))}
        </Switch>
    ) : null;


export default function () {
  return (
    <Router>
      <Layout style={{ height: "100%" }}>
        <Header style={{height: 52, lineHeight: '48px'}}>
          <div className="logo" />
        </Header>

        <Layout>
          <Sider className="layout" style={{background: "#fff"}}>
            <Menus routes={routes} ></Menus>  
          </Sider>
          <Content>
            <Suspense fallback={<div>Loading...</div>}>
              {renderRoutes(routes)}
            </Suspense>

          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
