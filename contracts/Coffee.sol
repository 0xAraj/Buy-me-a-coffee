// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Coffee {
    address payable owner;
    struct Data {
        string name;
        string message;
        uint timestamp;
        address sender;
    }

    Data[] data;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyCoffee(
        string memory _name,
        string memory _message
    ) external payable {
        require(msg.sender != owner, "Owner is not allowed");
        uint amount = 10000000000001; //amount is in wei
        payable(owner).transfer(amount);
        data.push(Data(_name, _message, block.timestamp, msg.sender));
    }

    function getData() external view returns (Data[] memory) {
        return data;
    }
}
