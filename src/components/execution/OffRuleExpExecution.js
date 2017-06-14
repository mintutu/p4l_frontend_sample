import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'
import * as commons from '../../shared/commons'

class OffRuleExpExecution extends Component {

    render() {
        return (
            <span><strong>{commons.formatOffRule(this.props.offRule)}</strong></span>
        )
    }    
}

function mapStateToProps(state) {
    return {
        offRule: state.executionReducer.ruleOffExpression
    }
}

export default connect(mapStateToProps)(OffRuleExpExecution)
