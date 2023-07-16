export const CONTRACT_ADDRESS ="0x94dD9B0191B8246FA2c3b6FFa4e629DdbbEf7DbF";


export const abi =[
	
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_userName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_companyName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_eventName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_description",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_image",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_amountNeeded",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_deadline",
					"type": "string"
				}
			],
			"name": "createCampaign",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_companyName",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_investmentAmount",
					"type": "uint256"
				}
			],
			"name": "invest",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_companyName",
					"type": "string"
				}
			],
			"name": "getCampaignDetailsByCompany",
			"outputs": [
				{
					"internalType": "address",
					"name": "user",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "userName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "companyName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "eventName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "image",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "amountNeeded",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "deadline",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "numOfInvestors",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	
];