import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'
import * as commons from '../../shared/commons'

class OffAdsListExecution extends Component {

    createRows() {
        return this.props.offAdList.map(offAd => {
            return (
                <tr key={offAd.adId}>
                    <td>{offAd.adGroupId}</td>
                    <td>{offAd.adId}</td>
                    <td>{commons.getTimeRange(this.props.timeRange)}</td>
                    <td>{offAd.imp}</td>
                    <td>{offAd.cost}</td>
                    <td>{Math.round(offAd.cpa * 100) / 100}</td>
                    <td>{Math.round(offAd.cpc * 100) / 100}</td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props.offAdList)
        return (
            <tbody>{this.createRows()}</tbody>
        )
    }
}

function mapStateToProps(state) {
    return {
        offAdList: state.executionReducer.offAdList,
        timeRange: state.executionReducer.timeRangeType,
    }
}

export default connect(mapStateToProps)(OffAdsListExecution)