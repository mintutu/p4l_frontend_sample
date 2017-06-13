import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'

class OffAdsListExecution extends Component {

    getTimeRange(timeRangeType) {
        switch (this.props.timeRange) {
            case 1: return "昨日"
            case 2: return "過去７日間"
            case 3: return "過去30日間"
            default : return ""
        }
    }

    createRows() {
        return this.props.offAdList.map(offAd => {
            return (
                <tr key={offAd.adId}>
                    <td>{offAd.adGroupId}</td>
                    <td>{offAd.adId}</td>
                    <td>{this.getTimeRange(this.props.timeRange)}</td>
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