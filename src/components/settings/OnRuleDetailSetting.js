import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as reducers from '../../reducers'

class OnRuleDetailSetting extends Component {
    createListItems() {
        if (typeof this.props.rule.adGroupList !== "undefined") {
            return this.props.rule.adGroupList.map(adGroup => {
                return (
                    <tr key={adGroup.adGroupId}>
                        <td>{adGroup.adGroupId}</td>
                        <td>{adGroup.adGroupName}</td>
                        <td>{adGroup.minimumActiveAdsNumber}</td>
                    </tr>
                )
            })
        } else return (<tr></tr>)
    }

    getAccountId() {
        if (typeof this.props.rule.adGroupList !== "undefined") {
            return this.props.rule.accountId
        } else {
            return ''
        }
    }

    render() {
        return (
            <div className="modal fade" id="onRuleDetailModal" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="onRulesModalTitle">ONロジック</h5>
                        </div>
                        <div className="modal-body">
                            <div>Account ID: <strong>{this.getAccountId()}</strong></div>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th style={{"width": "20%"}}>AdGroup ID</th>
                                        <th style={{"width": "50%"}}>AdGroup名</th>
                                        <th style={{"width": "20%"}}>最低入稿本数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.createListItems()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rule: state.settingReducer.onRuleListDetail
    }
}

export default connect(mapStateToProps)(OnRuleDetailSetting)


