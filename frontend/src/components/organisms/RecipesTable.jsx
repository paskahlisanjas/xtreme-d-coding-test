import React from 'react';
import { Placeholder, Table } from 'semantic-ui-react';

const RecipesTable = ({ recipes = [], loading = false }) => (
  <>
    <Table celled unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">
            Arrangement Symbol
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Illustration</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {recipes.map(({ name, representation, illustration_url }) => (
          <Table.Row key={name}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell textAlign="center">
              <span style={{ whiteSpace: 'pre-line' }}>{representation}</span>
            </Table.Cell>
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

export default RecipesTable;
