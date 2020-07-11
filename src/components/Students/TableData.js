import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import DetailsIcon from '@material-ui/icons/Details';
import moment from 'moment';


const TableData = [
  {
    name: 'name',
    priority: 2,
    minWidth: 100,
    render: function Show(e) {
      return (<TableCell align="center" style={{ minWidth: this.minWidth }}>{e[this.name]}</TableCell>);
    },
  }, {
    name: 'number',
    priority: 3,
    minWidth: 100,
    render: function Show(e) {
      return (<TableCell align="center" style={{ minWidth: this.minWidth }}>{e.contacts[0].mobile}</TableCell>);
    },
  },
  {
    name: 'gender',
    priority: 4,
    minWidth: 100,
    render: function Show(e) {
      return (<TableCell align="center" style={{ minWidth: this.minWidth }}>{e[this.name] === 1 ? 'female' : 'male' }</TableCell>);
    },
  },
  {
    name: 'Marks',
    priority: 5,
    minWidth: 100,
    render: function Show(e) {
      return (<TableCell align="center" style={{ minWidth: this.minWidth }}>{e.enrolmentKey[0].totalMarks}</TableCell>);
    },
  },
  {
    name: 'When?',
    priority: 7,
    minWidth: 100,
    render: function Show(e) {
      return (<TableCell align="center" style={{ minWidth: this.minWidth }}>{moment(e.createdAt).format('DD MMM YYYY')}</TableCell>);
    },
  },
  {
    name: 'Last Updated',
    priority: 8,
    minWidth: 100,
    render: function Show(e) {
      return (<TableCell align="center" style={{ minWidth: this.minWidth }}>{moment(e.lastTransition.createdAt).format('DD MMM YYYY')}</TableCell>);
    },
  },
  {
    name: 'stage',
    priority: 6,
    minWidth: 100,
    render: function Show(e) {
      return (<TableCell align="center" style={{ minWidth: this.minWidth }}>{e[this.name]}</TableCell>);
    },
  },
  {
    name: 'partnerName',
    priority: 10,
    minWidth: 100,
    render: function Show(e) {
      return (<TableCell align="center" style={{ minWidth: this.minWidth }}>{e[this.name]}</TableCell>);
    },
  },
  {
    name: 'Online class Tag',
    priority: 9,
    minWidth: 30,
    render: function Show({
      EachRowData, onClick, page, screenSize,
    }) {
      return (
        <TableCell align="center" style={{ minWidth: this.minWidth }} size="medium">
          <AddCircleSharpIcon
            onClick={() => onClick({ EachRowData, page, screenSize })}
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            Update
          </AddCircleSharpIcon>
        </TableCell>
      );
    },
  },
];

export default TableData;
