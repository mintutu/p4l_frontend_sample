import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountReducer } from '../reducers/AccountList'

class AccountListExecution extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    createListItems() {
        return this.props.accounts.map(account => {
            return (
                <option key={account.accountId}>{account.accountId}</option>
            )
        })
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        alert("You'll never have me! " + event.target.value);
    }

    render() {
        return (
            <select className="form-control optimize-rule-element optimize-rule-selector" onChange={this.handleChange}>
                {this.createListItems()}
            </select>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accountReducer
    }
}

export default connect(mapStateToProps)(AccountListExecution)

