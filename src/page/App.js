import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ROUTES from '../configs/routes';
import { ActionSessionClear } from "../store/actions/action-session";
import { ActionRouteNavigate } from "../store/actions/action-route";


export class App extends Component {
    render() {
        return (
            <div>
                <h1>Sample Page</h1>
                <p>This is the Secure Page</p>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
    logout = () => {
        this.props.ActionSessionClear();
        this.props.ActionRouteNavigate(ROUTES.LOGIN);
    };
}

function mapStateToProps({ rSession }) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            ActionSessionClear,
            ActionRouteNavigate
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
