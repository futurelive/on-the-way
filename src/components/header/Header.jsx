import React from 'react';
import { Input, Icon, Menu } from 'antd';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

// const { SubMenu } = Menu;
// const MenuItemGroup = Menu.ItemGroup;

const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
    <div className={styles.search}>
      <Input
        placeholder="搜索"
        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
      />
    </div>
    <div>
      <Menu
        mode="horizontal"
        className={styles.menu}
        defaultSelectedKeys={['dashboard']}
      >
        <Menu.Item key="dashboard">工作台</Menu.Item>
        <Menu.Item key="explore">发现</Menu.Item>
        <Menu.Item key="help">帮助</Menu.Item>
        <Menu.Item key="topic">话题</Menu.Item>
      </Menu>
    </div>
  </div>
);

export default Header;
