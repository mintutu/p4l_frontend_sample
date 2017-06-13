import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Modal,
    Button
} from 'react-bootstrap';

class OnRule extends Component {

    constructor(props) {
        super(props);

    }

    createListItems() {
        return this.props.onRules.map((onRule) => {
            return (
                <option key={onRule.id}>{onRule.id}</option>
            )
        })
    }

    render() {
        return (
            <div className="modal fade" id="onRulesInputModal" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="onRulesModalTitle">ONロジック</h5>
                        </div>
                        <div className="modal-body">
                            <div >Account ID: <strong>1255</strong></div>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th >AdGroup ID</th>
                                        <th >AdGroup名</th>
                                        <th >最低入稿本数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>【AT】iOS_Vi_AGE</td>
                                        <td><input className="form-control" ></input></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>【AT】And_Vi_AGE</td>
                                        <td><input className="form-control" ></input></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td> 砂たたかい</td>
                                        <td><input className="form-control" ></input></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">

                            <button className="btn btn-primary" data-dismiss="modal">保存</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">閉じる</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        onRules: state.onRules
    };
}

export default connect(mapStateToProps)(OnRule)