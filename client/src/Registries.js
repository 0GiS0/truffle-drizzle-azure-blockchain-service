import React from 'react';

export default class Registries extends React.Component {

    state = { ref: null };

    componentDidMount() {
        const { drizzle } = this.props;

        const contract = drizzle.contracts.TimeControl;

        const ref = contract.methods["GetMyRegistries"].cacheCall();

        this.setState({ ref });
    }

    render() {

        //get the contract state from drizzleState
        const { TimeControl } = this.props.drizzleState.contracts;

        //using the saved registries, get the variable we're interested in
        const registries = TimeControl.GetMyRegistries[this.state.ref];

        return (
            <div className="container">
                <h3>My Registries</h3>
                <small className="text-muted">Account: {this.props.drizzleState.accounts[0]}</small>
                <table className="table">
                    <thead>
                        <tr>
                            <th>EPOCH</th>
                            <th>Date Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registries && registries.value.map(function (registry, index) {
                            let d = new Date(0); //The 0 there is the key, which sets the date to epoch
                            d.setUTCSeconds(registry);
                            return <tr key={index}><td>{registry}</td><td>{d.toLocaleString()}</td></tr>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}