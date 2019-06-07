export const TRAIL_LIST_ADDRESS = '0x6eDf4CD49915650F459016CBBC74045f0c8dfe8F'
export const TRAIL_LIST_ABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "trailCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "trails",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "date",
          "type": "string"
        },
        {
          "name": "appliedto",
          "type": "string"
        },
        {
          "name": "value",
          "type": "string"
        },
        {
          "name": "user",
          "type": "string"
        },
        {
          "name": "objectidtype",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_date",
          "type": "string"
        },
        {
          "name": "_appliedto",
          "type": "string"
        },
        {
          "name": "_value",
          "type": "string"
        },
        {
          "name": "_user",
          "type": "string"
        },
        {
          "name": "_objectidtype",
          "type": "string"
        }
      ],
      "name": "addEntry",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]