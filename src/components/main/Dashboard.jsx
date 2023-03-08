import { Button } from '@mui/material'
import React from 'react'
import { Table } from 'react-bootstrap'
import "./style.css"

export default function Main() {
  const count = 5;
  return (
    <main id='main'>
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Карен <Button>add</Button> <Button>edit</Button> <Button>delete</Button></td>
          <td>Hovhannisyan</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Arman</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Lusine</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </main>
  )
}


