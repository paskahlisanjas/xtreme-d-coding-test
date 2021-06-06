import React from 'react';
import { Placeholder, Table } from 'semantic-ui-react';

const IngredientsTable = ({ ingredients = [], loading = false }) => (
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
          <Table.Row key={representation}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell textAlign="center">{representation}</Table.Cell>
            <Table.Cell textAlign="center">
              <img width="64px" src={illustration_url} alt="illustration" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    {loading && <Placeholder style={{ height: 200, borderRadius: 5 }} fluid />}
  </>
);

export default IngredientsTable;
