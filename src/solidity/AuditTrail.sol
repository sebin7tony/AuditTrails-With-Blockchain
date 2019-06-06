pragma solidity ^0.5.0;

contract AuditTrail {

    uint256 public trailCount = 0;
    mapping(uint => Entry) public trails;

    struct Entry {
        uint id;
        string name;
        string date;
    }

    constructor() public {
        addEntry("sebin","29june");
    }

    function addEntry(string memory _name,string memory _date) public {
        incrementCount();
        trails[trailCount] = Entry(trailCount,_name,_date);
    }

    function incrementCount() internal {
        trailCount += 1;
    }
}
