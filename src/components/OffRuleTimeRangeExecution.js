import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class OffRuleTimeRangeExecution extends Component {

    getTimeRange(timeRangeType) {
        switch (this.props.timeRange) {
            case 1: return "昨日"
            case 2: return "過去７日間"
            case 3: return "過去30日間"
            default : return ""
        }
    }

    render() {
        console.log("OffRuleTimeRange")
        return (<span><strong>{this.getTimeRange(this.props.timeRange)}</strong></span>)        
    }
}       


function mapStateToProps(state) {
    return {
        timeRange: state.getTimeRangeReducer
    }
}

export default connect(mapStateToProps)(OffRuleTimeRangeExecution)