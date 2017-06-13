import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'
import {selectAccountId} from '../../actions/index'

class AccountListExecution extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    createListItems() {        
        if (this.props.accounts.length !== 0 && !this.props.isSelected) {
            const firstAccountId = this.props.accounts[0].accountId.toString()
            this.props.selectAccount(firstAccountId)
        }        
        return this.props.accounts.filter((e,i) => e.offRuleExpression != "").map(account => {
            return (
                <option key={account.accountId} value={account.accountId}>{'[' + account.accountId + '] ' + account.accountName}</option>
            )
        })
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.selectAccount(event.target.value)
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
        accounts: state.executionReducer.accountList,
        isSelected: state.executionReducer.isSelected
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectAccount: selectAccountId}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountListExecution)

