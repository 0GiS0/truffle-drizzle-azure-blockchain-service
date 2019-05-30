const TimeControl = artifacts.require('./TimeControl.sol');

contract('TimeControl', accounts => {
    it('should store an entry in the user registry', async () => {
        const timeControl = await TimeControl.deployed();

        //Register for the user account 0
        timeControl.Register.sendTransaction({ from: accounts[0] });

        let result = await timeControl.GetMyRegistries.call({ from: accounts[0] });

        assert.equal(result.length, 1);

    });

    it('should store the timestamp of the date time');
});