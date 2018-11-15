import React from 'react';
import {
  Input,
  Icon,
  Menu,
  Avatar,
  Badge,
  Popover,
} from 'antd';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

// const { SubMenu } = Menu;
// const MenuItemGroup = Menu.ItemGroup;

const newKnowledge = (
  <div className={styles.popOver}>
    <li>
      <Icon type="github" />
      <span>新建知识库</span>
    </li>
    <li>
      <Icon type="github" />
      <span>新建知识库</span>
    </li>
    <li>
      <Icon type="github" />
      <span>新建知识库</span>
    </li>
  </div>
);

const userMenu = (
  <div className={styles.popOver}>
    <li>
      <Icon type="github" />
      <span>个人中心</span>
    </li>
    <li>
      <Icon type="github" />
      <span>我的文档</span>
    </li>
    <li>
      <Icon type="github" />
      <span>我的收藏</span>
    </li>
    <li>
      <Icon type="github" />
      <span>我的关注</span>
    </li>
    <div className={styles.splitLine} />
    <li>
      <Icon type="github" />
      <span>设置</span>
    </li>
    <li>
      <Icon type="github" />
      <span>退出</span>
    </li>
  </div>
);

const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
    <div className={styles.search}>
      <Input
        placeholder="搜索"
        prefix={<Icon type="search" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
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
    <div className={styles.operation}>
      <div>
        <Popover content={newKnowledge}>
          <Icon type="plus" style={{ color: 'rgba(0, 0, 0, .8)' }} />
        </Popover>
      </div>
      <div>
        <Badge count={1} dot><Icon type="bell" style={{ color: 'rgba(0, 0, 0, .8)' }} /></Badge>
      </div>
      <div>
        <Popover content={userMenu} title="Eric" trigger="click">
          <Avatar icon="user" />
        </Popover>
      </div>
    </div>
  </div>
);

export default Header;
