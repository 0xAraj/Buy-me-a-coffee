const Coffee = artifacts.require("Coffee.sol");
const { expectRevert } = require("@openzeppelin/test-helpers");

contract("Coffee", (accounts) => {
  let coffee;
  before(async () => {
    coffee = await Coffee.deployed();
  });

  it("should set owner of smart contract", async () => {
    const owner = await coffee.owner();
    assert(owner == accounts[0]);
  });

  it("should not buy coffee if amount is 0", async () => {
    await expectRevert(
      coffee.buyCoffee("raj", "nice", {
        from: accounts[2],
        value: 0,
      }),
      "Please pay greater than 0 ether"
    );
  });

  it("should not buy coffee if caller is owner", async () => {
    await expectRevert(
      coffee.buyCoffee("raj", "nice", {
        from: accounts[0],
        value: 10000,
      }),
      "Owner is not allowed"
    );
  });

  it("should buy coffee", async () => {
    const initialBalance = web3.utils.toBN(
      await web3.eth.getBalance(accounts[0])
    );
    await coffee.buyCoffee("aditya", "good coffee", {
      from: accounts[1],
      value: 10000,
    });
    const finalBalance = web3.utils.toBN(
      await web3.eth.getBalance(accounts[0])
    );
    assert(finalBalance.sub(initialBalance).toNumber() == 10000);
  });

  it("should return all the data", async () => {
    const data = await coffee.getData();
    assert(data[0].name == "aditya");
    assert(data[0].message == "good coffee");
    assert(data[0].sender == accounts[1]);
  });
});
