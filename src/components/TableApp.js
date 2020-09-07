/* eslint-disable import/first */
import React from 'react';

import { makeStyles, TableSortLabel } from '@material-ui/core'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function comparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles({
  root: {

  },
  table: {
    minWidth: 650,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
})

var order = 'asc';
var orderBy = 'name';

function SortTableHead (props) {
  const { order, orderBy } = props;
}

export default props => {

  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Description', field: 'description' },
    ],
    data: [
      { name: 'Mehmet', description: 'Baran' },
      { name: 'Mehmetasd', description: 'Baranqwe' },
      { name: 'Mehmetqwr', description: 'Baranag' },
      { name: 'Mehmetdfb', description: 'Baranasd' },
    ],
  });

  function sortHandler (field) {
    state.data.sort((a, b) => comparator(a, b, field))
  }


  return (
    <div>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {
                state.columns.map(col => (
                  <TableCell 
                    sortDirection={orderBy === col.field ? '' : false}
                  >
                    <TableSortLabel
                      active={orderBy === col.field}
                      direction={orderBy === col.field ? order : 'asc'}
                      onClick={sortHandler(col.field)}
                    >
                      {col.title}
                      {orderBy === col.id ? (
                        <span className={classes.visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </span>
                      ) : null}
                    </TableSortLabel>

                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              state.data.map((row) => (
                <TableRow key={row.name} hover={true}>

                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    {row.description}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}