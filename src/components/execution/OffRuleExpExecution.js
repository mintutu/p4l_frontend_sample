import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'

class OffRuleExpExecution extends Component {

    render() {
        return (
            <span><strong>{this.props.offRule}</strong></span>
        )
    }    
}

function mapStateToProps(state) {
    return {
        offRule: state.executionReducer.ruleOffExpression
    }
}

export default connect(mapStateToProps)(OffRuleExpExecution)
