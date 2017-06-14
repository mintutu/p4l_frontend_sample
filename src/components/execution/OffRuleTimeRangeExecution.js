import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'
import * as commons from '../../shared/commons'

class OffRuleTimeRangeExecution extends Component {

    render() {
        return (<span><strong>{commons.getTimeRange(this.props.timeRange)}</strong></span>)        
    }
}       


function mapStateToProps(state) {
    return {
        timeRange: state.executionReducer.timeRangeType
    }
}

export default connect(mapStateToProps)(OffRuleTimeRangeExecution)