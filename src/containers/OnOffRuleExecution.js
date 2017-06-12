import React, { Component } from "react"
import AccountListExecution from '../components/AccountListExecution'

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

                <div className="alert alert-success" id="success-alert">
                    <button type="button" className="close" data-dismiss="alert">x</button>
                    OFFONロジックが正常に実行された。
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
                                            <span><strong>昨日</strong></span>
                                        </div>
                                        <div className="form-group optimize-rule-row">
                                            <span className="optimize-rule-element optimize-rule-label">OFFロジック</span>
                                            <span><strong>imp>=100 AND cost>=1000 OR cpa>=100 AND cpc>=200</strong></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
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
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>昨日</td>
                                                <td>100</td>
                                                <td>10</td>
                                                <td>10</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>昨日</td>
                                                <td>100</td>
                                                <td>10</td>
                                                <td>10</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>3</td>
                                                <td>昨日</td>
                                                <td>100</td>
                                                <td>10</td>
                                                <td>10</td>
                                                <td>10</td>
                                            </tr>
                                        </tbody>
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
