const Coffee = artifacts.require("Coffee.sol");

module.exports = function (deployer) {
  deployer.deploy(Coffee);
};
