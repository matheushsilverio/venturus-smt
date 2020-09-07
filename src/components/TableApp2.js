import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { Icon, Grid } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FilterListIcon from '@material-ui/icons/FilterList';

function descendingComparator(a, b, orderBy) {
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

const columns = [
  { field: 'name', label: 'Name' },
  { field: 'description', label: 'Description' },
];
const rows = [
  { name: 'Barcelona', description: 'Deste' },
  { name: 'Real', description: 'Ceste' },
  { name: 'Leipzig', description: 'Beste' },
  { name: 'Inter', description: 'Aeste' },
]

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
        {
          columns.map((col, i) => (
            <TableCell
              key={col.field}
              sortDirection={orderBy === col.field ? order : false}
              className={classes.tableSort}
              style={{ width: col.field == 'name' ? '150px' : 'auto' }}
            >
              <div style={{ borderRight: (columns.length-1) != i ? '1px solid rgba(0,0,0, 0.3)' : 'none' }}>
                <TableSortLabel
                  active={orderBy === col.field}
                  direction={orderBy === col.field ? order : 'asc'}
                  onClick={createSortHandler(col.field)}
                  // IconComponent={() => (<Icon className={{ 
                  //   fas: true, "fa-sort": orderBy !== col.field, "fa-sort-up": orderBy === col.field ?  }} 
                  //   style={{ fontSize: '13px' }}></Icon>)}
                >
                  {col.label}
                  
                  {
                    orderBy === col.field ? (
                      <span className={classes.visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null //<Icon className="fas fa-sort" style={{ fontSize: '13px' }}></Icon>
                  }
                </TableSortLabel>
              </div>
              
            </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableRow: {
    '&:hover': {
      backgroundColor: 'rgba(247,238,247, 1) !important',
      color: '#b13f7d',
      cursor: 'pointer',
      fontWeight: 'bold',
    }
  },
  tableCell: {
    display: 'table-cell',
    padding: '16px',
    fontSize: '0.875rem',
    textAlign: 'left',
    fontFamily: "Roboto",
    fontWeight: 'bold',
    lineHeight: 1.43,
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    letterSpacing: '0.01071em',
    verticalAlign: 'inherit',
    color: 'inherit'
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
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table className={classes.table}>
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {
              stableSort(rows, getComparator(order, orderBy))
              .map((row) => {

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.name}
                    className={classes.tableRow}
                  >
                    <TableCell className={classes.tableCell}>
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Grid container justify="space-between">
                        <Grid item>
                          {row.description}
                        </Grid>
                        <Grid item>
                          <IconButton className={classes.margin} size="small">
                            <Icon style={{ fontSize: 'inherit' }}>delete</Icon>
                          </IconButton>
                          <IconButton className={classes.margin} size="small">
                            <Icon style={{ fontSize: 'inherit' }}>share</Icon>
                          </IconButton>
                          <IconButton className={classes.margin} size="small">
                            <Icon style={{ fontSize: 'inherit' }}>edit</Icon>
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
