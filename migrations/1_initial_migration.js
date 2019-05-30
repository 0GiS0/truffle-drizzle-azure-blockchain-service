const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations,{from: '0x1E384085E466C72FBFa83A261A660317E7c9996B'});
};
