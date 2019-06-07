import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';

class  ViewAssessment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "tabSelected": props.tabSelected,
      "entryList": props.entryList
    };
  }

  async fetchList() {
    const {auditTrailList} = this.props;
    const trailCount = await auditTrailList.methods.trailCount().call();
    
    
    let existingIds = this.state.entryList.map(function(entry){
      return entry.entryId;  
    });

    for (var i = 1; i <= trailCount; i++) {

      const entry = await auditTrailList.methods.trails(i).call();
      const newEntry = {name : entry['name'],date : entry['date'],entryId: entry.id.toHexString()};
      if(existingIds.indexOf(newEntry.entryId)==-1){
        this.setState({
          entryList: [...this.state.entryList, newEntry]
        });
      }
    }
  }

  
  componentWillReceiveProps(nextProps){
    const {tabSelected} = this.state;
    const {auditTrailList} = this.props;
    if(nextProps.tabSelected!=tabSelected && auditTrailList!== null) {
      this.fetchList();
    }
  }
  render() {

      let {entryList} = this.state;
      const generateEntries = () => {
        return(
          this.props.entryList.map((entry,i)=> {
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
          rows: entryList
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
}
  
export default ViewAssessment;

