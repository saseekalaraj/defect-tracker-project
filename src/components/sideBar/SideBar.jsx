import React, { Component } from 'react'
import { Menu, Icon, Avatar } from 'antd';
import { Typography } from '@material-ui/core';

const sideBarContent=[{name:'Dashborad',subMenu:[{name:'Company',url:'/company'}],icon:'user',status:1}]
const { SubMenu } = Menu;
class SideBar extends Component {
    render() {
        const { collapsed, onMouseEnterSideBar, sideBarColor, display } = this.props
        return (
            <div style={{ width: 'auto', marginTop: -64 }} onMouseEnter={() => onMouseEnterSideBar()} onMouseLeave={() => onMouseEnterSideBar()}>
                <Menu
                    style={{ position: 'absolute', height: '100%', width: `${!collapsed ? '250px' : '100px'}`, background: `#${sideBarColor ? sideBarColor : 'fafafa'}`, transition: 'width,0.5s' }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                >
                    <div style={{ height: '20vh', background: '#353c48', textAlign: 'center', justifyContent: 'center', marginBottom: '25%' }}>
                        <div style={{ textAlign: 'center' }}>
                                <Avatar style={{ marginTop: '25%', transition: 'width,0.5s', border: `${!collapsed ? '5px solid #2d323e' : 'none'}` }} size={!collapsed ? 90 : 70} src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" >
                                </Avatar>
                            <Typography variant="h6" style={{ color: '#048063', display: display }}>
                                User Name
                            </Typography>
                        </div>
                    </div>
                    {
                        sideBarContent.map((centent,index)=>
                            (
                                <subMenu>
                                    
                                </subMenu>
                            )
                        )
                    }
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.ItemGroup key="g1" title="Item 1" >
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>Navigation Three</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
export default SideBar
