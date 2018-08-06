import React, { Component } from 'react';
import AdminTableBody from '../AdminTableBody/AdminTableBody';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from "@material-ui/core/styles";



let styles = {
  divContainer: {
    padding: '4%'
  },
  tableContainer: {
    border: '1px black solid'

  },
  tableHeader: {
    fontSize: '10rem',
    color: '#fff',
    // backgroundColor: 'black'
  }
}

class AdminView extends Component {


  render() {
    return (
      <div className={this.props.classes.divContainer}>
        <h2>Feedback Results</h2>
        <Table className={this.props.classes.tableContainer}>
          <TableHead className={this.props.classes.tableHeader}>
            <TableRow >
              <TableCell>Feeling</TableCell>
              <TableCell>Comprehension</TableCell>
              <TableCell>Support</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <AdminTableBody/>
        </Table>
      </div>
    )
  }
}

const StyledAdminView = withStyles(styles)(AdminView);
export default StyledAdminView;