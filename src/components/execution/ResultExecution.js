import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'

class ResultExecution extends Component {

    render() {                
        if (typeof this.props.result === "undefined" || this.props.result === null)
            return (<div> </div>)
        else if (this.props.result.success === true) {            
            return (
                <div className="alert alert-success" id="success-alert">
                    <button type="button" className="close" data-dismiss="alert">x</button>
                        OFFONロジックが正常に実行された。
                </div>)            
        } else {            
            return (<div className="alert alert-danger" id="danger-alert">
                    <button type="button" className="close" data-dismiss="alert">x</button>
                        System have an error
                </div> )
        }        
    }    
}

function mapStateToProps(state) {
    return {
        result: state.executionReducer.executionResult
    }
}

export default connect(mapStateToProps)(ResultExecution)
