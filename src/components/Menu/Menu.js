import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './menu.css'

export default class TopMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='menu'>
        <Menu.Item
          className='menu-item'
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          <Icon  name='bars' active={ activeItem === 'bars' }/>
        </Menu.Item>

        <Menu.Item
          name='parasail'
          active={activeItem === 'parasail'}
          onClick={this.handleItemClick}
        >
          Parasail
        </Menu.Item>

        <Menu.Item
          name='jetski'
          active={activeItem === 'jetski'}
          onClick={this.handleItemClick}
        >
          Jetski
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
      </Menu>
    )
  }
}
