import React, { Component } from "react";
import AccountList from '../components/settings/AccountListSetting'
import OffRuleList from '../components/settings/OffRuleListSetting'
import OnOffRuleExecution from './OnOffRuleExecution'
import App from './App'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <Router>
                <div id="wrapper">
                    <nav className="navbar navbar-default navbar-static-top" role="navigation" >
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">Pyxis 4 LINE</a>
                        </div>

                        <div className="navbar-default sidebar" role="navigation">
                            <div className="sidebar-nav navbar-collapse">
                                <ul className="nav" id="side-menu">
                                    <li><Link to="/settings">OFFONロジック設定</Link></li>
                                    <li><Link to="/execution">OFFONロジック実行</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>                    

                    <Route path="/settings" component={App} />
                    <Route path="/execution" component={OnOffRuleExecution} />
                </div>
                
            </Router>
        )
    }
}


