import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout, Menu, Icon, Row, Col, Typography } from "antd";

import ComponentLoader from "../components/component-loader/component-loader";
import Home from "./home/home";
import Clocks from "./clocks/clocks";
import Buttons from "./buttons/buttons";
//import SlickSlider from "./slick-slider/slick-slider";
import Counters from "./counters/counters";
import SpreadOperator from "./spread-operator/spreadOperator";
import Cards from "./cards/cards";

//const SlickSlider = React.lazy(() => import("./slick-slider/slick-slider"));

const SlickSlider = React.lazy(() => import("./slick-slider/slick-slider"));

class Library extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Footer } = Layout;
    const { Title } = Typography;

    function handleClick(e) {
      console.log("click ", e);
    }

    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }} className="library">
          <Header>
            <Row type="flex" justify="space-around" align="middle">
              <Col span={12}>
                <Title level={4} className="library__header-title">
                  Tests library
                </Title>
              </Col>
              <Col span={12}>
                <Menu onClick={handleClick} mode="horizontal">
                  <Menu.Item key="1">
                    <Link to="/home">
                      <Icon type="home" />
                      <span>Home</span>
                    </Link>
                  </Menu.Item>
                  <SubMenu
                    title={
                      <span>
                        <Icon type="bg-colors" />
                        <span>Tests</span>
                      </span>
                    }
                  >
                    <Menu.Item key="21">
                      <Link to="/counters">
                        <Icon type="counters" />
                        <span>Counters</span>
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    title={
                      <span>
                        <Icon type="smile" />
                        <span>UI Elements</span>
                      </span>
                    }
                  >
                    <Menu.Item key="31">
                      <Link to="/buttons">
                        <Icon type="buttons" />
                        <span>Buttons</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="32">
                      <Link to="/cards">
                        <Icon type="cards" />
                        <span>Cards</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="33">
                      <Link to="/slick-slider">
                        <Icon type="slick-slider" />
                        <span>SlickSlider</span>
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    title={
                      <span>
                        <Icon type="code" />
                        <span>Code</span>
                      </span>
                    }
                  >
                    <Menu.Item key="41">
                      <Link to="/clocks">
                        <Icon type="clocks" />
                        <span>Clock</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="42">
                      <Link to="/spread-operator">
                        <Icon type="spread-operator" />
                        <span>Spread operator</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="43">
                      <Link to="/dynamic-nav">
                        <Icon type="dynamic-nav" />
                        <span>Dynamic-navigation</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="44">
                      <Link to="/fetch-api">
                        <Icon type="fetch-api" />
                        <span>Fetch API</span>
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Content className="library__content">
              <Row>
                <Col>
                  <Suspense fallback={<ComponentLoader />}>
                    <Route
                      render={({ location }) => (
                        <TransitionGroup>
                          <CSSTransition
                            timeout={300}
                            classNames="fade"
                            key={location}
                          >
                            <Switch>
                              <Redirect from="/" exact to="/home" />
                              <Route path="/home" component={Home} />
                              <Route path="/clocks" component={Clocks} />
                              <Route path="/buttons" component={Buttons} />
                              <Route
                                path="/slick-slider"
                                component={SlickSlider}
                              />
                              <Route path="/counters" component={Counters} />
                              <Route
                                path="/spread-operator"
                                component={SpreadOperator}
                              />
                              <Route path="/cards" component={Cards} />
                              <Route path="/dynamic-nav" component={Cards} />
                              <Route path="/fetch-api" component={Cards} />
                            </Switch>
                          </CSSTransition>
                        </TransitionGroup>
                      )}
                    />
                  </Suspense>
                </Col>
              </Row>
            </Content>

            <Footer>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Library;
