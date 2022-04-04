import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/favorite">Favorite</a>
      </Menu.Item>
      <Menu.Item key ="aboutus">
      <a href="/aboutus">About us</a>
      </Menu.Item>
      <Menu.Item key ="test">
        <a href="/test">Testimonials</a>
      </Menu.Item>
      <Menu.Item key="sponsors">
        <a href="/sponsors">Sponsors</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu;