pragma solidity ^0.5.4;

contract TimeControl{    
    
    address private owner;
    mapping (address => uint[]) private employeeRecords;
    
    constructor() public{        
        owner = msg.sender;
    }
    
   function Register() public{
       employeeRecords[msg.sender].push(now);
   }   
  
   function GetMyRegistries() public view returns (uint[] memory){
       //
       uint[] memory result = new uint[] (employeeRecords[msg.sender].length);
       for (uint i = 0;i < employeeRecords[msg.sender].length; i++) {
           result[i] = employeeRecords[msg.sender][i];    
       }
        
        return result;
    }    
}