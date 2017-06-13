import React, { Component } from "react";
import AccountList from '../components/AccountList'
import OffRuleList from '../components/OffRuleList'
import OnRule from '../components/OnRule'


export default class App extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="page-header">自動OFFONロジック設定画面</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="col-sm-6">
                                            <div className="form-group optimize-rule-row">
                                                <span className="optimize-rule-element optimize-rule-label">Account ID</span>
                                                <AccountList />
                                            </div>
                                            <div className="form-group optimize-rule-row">
                                                <span className="optimize-rule-element optimize-rule-label">ONロジック</span>
                                                <button className="btn btn-info optimize-rule-element optimize-rule-selector" data-toggle="modal" data-target="#onRulesInputModal">設定</button>
                                            </div>
                                            <div className="form-group optimize-rule-row"></div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group optimize-rule-row">
                                                <span className="optimize-rule-element optimize-rule-label">参照期間</span>
                                                <select className="form-control optimize-rule-element optimize-rule-selector">
                                                    <option>昨日</option>
                                                    <option>過去７日間</option>
                                                    <option>過去30日間</option>
                                                </select>
                                            </div>

                                            <div className="form-group optimize-rule-row">
                                                <span className="optimize-rule-element optimize-rule-connector">&nbsp;</span>
                                                <select className="form-control optimize-rule-element">
                                                    <option>imp</option>
                                                    <option>cost</option>
                                                    <option>cpa</option>
                                                    <option>cpc</option>
                                                </select>
                                                <select className="form-control optimize-rule-element">
                                                    <option>&lt;=</option>
                                                    <option>&gt;=</option>
                                                </select>
                                                <input className="form-control optimize-rule-element optimize-rule-value"/>
                                                <button type="button" className="close close-btn optimize-rule-element">×</button>
                                            </div>
                                            <div className="form-group optimize-rule-row">
                                                <select className="form-control optimize-rule-element optimize-rule-connector">
                                                    <option>AND</option>
                                                    <option>OR</option>
                                                </select>
                                                <select className="form-control optimize-rule-element">
                                                    <option>imp</option>
                                                    <option>cost</option>
                                                    <option>cpa</option>
                                                    <option>cpc</option>
                                                </select>
                                                <select className="form-control optimize-rule-element">
                                                    <option>&lt;=</option>
                                                    <option>&gt;=</option>
                                                </select>
                                                <input className="form-control optimize-rule-element optimize-rule-value"/>
                                                <button type="button" className="close close-btn optimize-rule-element">×</button>
                                                <button className="btn btn-info add-btn optimize-rule-element">+</button>
                                            </div>
                                            <div className="form-group optimize-rule-row form-btns">
                                                <button className="btn btn-primary">保存</button>
                                                <button className="btn">リセット</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 form-btns">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OffRuleList/>
                <OnRule />                
            </div>
        )
    }
}


