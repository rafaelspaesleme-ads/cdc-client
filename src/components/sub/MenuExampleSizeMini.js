import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

export default class MenuExampleSizeMini extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='mini' color="black">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Opções'>
            <Dropdown.Menu>
              <Dropdown.Item>Login</Dropdown.Item>
              <Dropdown.Item>Ajuda</Dropdown.Item>
              <Dropdown.Item>Recuperar senha</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Cadastre-se</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}