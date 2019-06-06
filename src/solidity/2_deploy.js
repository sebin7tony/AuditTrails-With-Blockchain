var AuditTrail = artifacts.require("./AuditTrail.sol");

module.exports = function(deployer) {
  deployer.deploy(AuditTrail);
};