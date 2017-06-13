import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOffRuleExpReducer } from '../reducers/AccountList'

class OffRuleExpExecution extends Component {

    render() {
        console.log(this.props.offRule)
        return (
            <span><strong>{this.props.offRule}</strong></span>
        )
    }    
}

function mapStateToProps(state) {
    return {
        offRule: state.getOffRuleExpReducer        
    }
}

export default connect(mapStateToProps)(OffRuleExpExecution)
