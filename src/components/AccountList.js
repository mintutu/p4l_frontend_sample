import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { receiveAccounts } from '../reducers/AccountList'

class AccountList extends Component {

    createListItems() {
        return this.props.accounts.map(account => {
            return (
                <option key={account.accountId}>{account.accountId}</option>
            )
        })
    }

    render() {
        return (
            <select className="form-control optimize-rule-element optimize-rule-selector">
                {this.createListItems()}
            </select>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.receiveAccounts
    }
}

export default connect(mapStateToProps)(AccountList)

