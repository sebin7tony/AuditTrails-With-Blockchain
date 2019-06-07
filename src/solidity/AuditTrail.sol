pragma solidity ^0.5.0;

contract AuditTrail {

    uint256 public trailCount = 0;
    mapping(uint => Entry) public trails;

    struct Entry {
        uint id;
        string name;
        string date;
        string appliedto;
        string value;
        string user;
        string objectidtype;
    }


    function addEntry(string memory _name,string memory _date,string memory _appliedto,string memory _value,string memory _user,string memory _objectidtype) public {
        incrementCount();
        trails[trailCount] = Entry(trailCount,_name,_date,_appliedto,_value,_user,_objectidtype);
    }

    function incrementCount() internal {
        trailCount += 1;
    }
}
