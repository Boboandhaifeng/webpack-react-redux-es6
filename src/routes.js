import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Test} from 'pages';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class SiderLayout extends React.Component {
    state = {
      collapsed: false,
    };
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    render() {
      return (
        <Router>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" >logo</div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="/"><Icon type="pie-chart" /><span>home</span></Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/about"><Icon type="desktop" /><span>About</span></Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/topics"><Icon type="inbox" /><span>Topics</span></Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <Route exact path="/" component={Test.Home}/>
                <Route path="/about" component={Test.About}/>
                <Route path="/topics" component={Test.Topics}/>
              </Content>
            </Layout>
          </Layout>
        </Router>
      );
    }
}    

export default SiderLayout