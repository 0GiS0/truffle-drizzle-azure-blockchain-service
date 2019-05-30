var TimeControl = artifacts.require('TimeControl');

module.exports = function (deployer) {
    //deployment steps
    deployer.deploy(TimeControl);
};