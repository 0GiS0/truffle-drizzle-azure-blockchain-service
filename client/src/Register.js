import React from 'react';

export default class Register extends React.Component {
    state = { stackId: null };

    constructor(props) {
        super(props);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    submitRegistration() {

        const { drizzle, drizzleState } = this.props;
        const contract = drizzle.contracts.TimeControl;

        const stackId = contract.methods["Register"].cacheSend({ from: drizzleState.accounts[0] });

        this.setState({ stackId });
    }

    getTxStatus = () => {
        //get the transaction states from the drizzle state
        const { transactions, transactionStack } = this.props.drizzleState;

        //get the transaction hash using our saved stackId
        const txHash = transactionStack[this.state.stackId];

        if (!txHash)
            return null;

        //otherwise, return the transaction status
        return `Transaction status ${transactions[txHash] && transactions[txHash].status}`;

    }

    render() {
        return (
            <div className="container">
                {this.getTxStatus() &&
                    <div className="alert alert-info">{this.getTxStatus()}</div>
                }
                <button className="btn btn-primary" onClick={this.submitRegistration}>Register</button>
            </div>
        );
    }
}