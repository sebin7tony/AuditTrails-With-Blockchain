import React from 'react';
import { Table } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';

function ViewAssessment(props) {

  const generateEntries = () => {
    return(
      props.entryList.map((entry,i)=> {
        return( 
          <tr key={i}><td>{entry.name}</td><td>{entry.date}</td><td></td></tr>
        )
  }))};

  const entryStyle = {
    margin : "5%",
    paddingLeft : '50px',
    paddingRight : '50px'
  }

  const data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Office',
          field: 'office',
          sort: 'asc',
          width: 50
        }
      ],
      rows: props.entryList
    };

  return (
    <div style={entryStyle}>
      
      <MDBDataTable
        striped
        bordered
        small
        data={data}
      />
    </div>
  );
}
  
export default ViewAssessment;

/*

<div style={entryStyle}>
      
    </div>
<Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Date</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {generateEntries()}
        </tbody>
        
      </Table>
*/