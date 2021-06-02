import React from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';

const IngredientsTable = ({ ingredients = [] }) => (
  <>
    <Table celled unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Symbol</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Illustration</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {ingredients.map(({ name, representation, illustration_url }) => (
          <Table.Row>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell textAlign="center">{representation}</Table.Cell>
            <Table.Cell textAlign="center">
              <img width="64px" src={illustration_url} alt="illustration" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </>
);

export default IngredientsTable;
