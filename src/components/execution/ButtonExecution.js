import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'
import {executionOnOffRules} from '../../actions/index'

class ButtonExecution extends Component {

    executeRules() {
        const id = this.props.accountId
        this.props.execute(id)
    }

    render() {
        const isExecution = localStorage.getItem(this.props.accountId)        
        if (isExecution !== 'executed' && this.props.executedAccounts.indexOf(this.props.accountId) === -1)
            return (<button className="btn btn-primary" id="executeBtn" onClick={this.executeRules.bind(this)}>実行</button>)
        else
            return (<button className="btn btn-primary" id="executeBtn" disabled>実行</button>)
    }
}

function mapStateToProps(state) {
    return {
        accountId: state.executionReducer.accountId,
        executedAccounts: state.executionReducer.executedAccounts        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({execute: executionOnOffRules}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonExecution)

