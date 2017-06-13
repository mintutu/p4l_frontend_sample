import React, { Component } from "react"
import AccountListExecution from '../components/AccountListExecution'
import OffRuleExpExecution from '../components/OffRuleExpExecution'
import OffRuleTimeRangeExecution from '../components/OffRuleTimeRangeExecution'
import OffAdsListExecution from '../components/OffAdsListExecution'
                                            
export default class OnOffRuleExecution extends Component {

    render() {
        return (
            <div id="wrapper">

            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="page-header">OFFON実行</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group optimize-rule-row">
                                            <span className="optimize-rule-element optimize-rule-label">Account ID</span>
                                            <AccountListExecution />
                                        </div>

                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group optimize-rule-row">
                                            <span className="optimize-rule-element optimize-rule-label">参照期間</span>
                                            <OffRuleTimeRangeExecution />
                                        </div>
                                        <div className="form-group optimize-rule-row">
                                            <span className="optimize-rule-element optimize-rule-label">OFFロジック</span>
                                            <OffRuleExpExecution />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{float: "right", "padding-right": "15px", "padding-bottom": "15px"}} >
                    <button className="btn btn-primary" id="executeBtn">実行</button>
                </div>



                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                OFF対象広告一覧表
                        </div>
                        <div className="panel-body">
                                <div className="table-responsive" >
                                    <table className="table table-striped table-bordered table-hover" id="targetTable">
                                        <thead>
                                            <tr>
                                                <th>AdGroup ID</th>
                                                <th>Ad ID</th>
                                                <th>参照期間</th>
                                                <th>imp</th>
                                                <th>cost</th>
                                                <th>cpa</th>
                                                <th>cpc</th>
                                            </tr>
                                        </thead>
                                        <OffAdsListExecution />
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div >
        );
    }
}
