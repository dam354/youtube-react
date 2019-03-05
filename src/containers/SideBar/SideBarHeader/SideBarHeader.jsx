import React from 'react';
import { Menu } from 'semantic-ui-react';
import './SideBarHeader.scss';

const SideBarHeader = ({ title }) => {
  return (
    <Menu.Item>
      <Menu.Header className="side-bar-header">{title}</Menu.Header>
    </Menu.Item>
  );
};

export default SideBarHeader;
