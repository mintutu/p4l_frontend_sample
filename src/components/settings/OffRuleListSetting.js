import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as reducers from '../../reducers'

class OffRuleListSetting extends Component {
    createListItems() {
        return this.props.rules.map(rule => {
            return (
                <tr key={rule.accountId}>
                    <td>{rule.accountId}</td>
                    <td>{rule.offRuleExpression}</td>
                    <td><button className="btn btn-default">参照</button></td>
                    <td>{rule.timeRangeType}</td>
                    <td><button className="btn btn-default"><i className="fa fa-edit"></i></button> &nbsp; <button className="btn btn-default btn-delete"><i className="fa fa-trash-o"></i></button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="panel-body">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Account ID</th>
                                <th>OFFロジック</th>
                                <th>ONロジック</th>
                                <th>参照期間</th>
                                <th>アクション</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.createListItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rules: state.settingReducer.offRuleList
    }
}

export default connect(mapStateToProps)(OffRuleList)


