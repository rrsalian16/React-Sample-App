import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ROUTES from "../configs/routes";
import { ActionSessionStart } from "../store/actions/action-session";
import { ActionRouteNavigate } from "../store/actions/action-route";

export class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.sessionStart}>Login</button>
      </div>
    );
  }
  sessionStart = () => {
    this.props.ActionSessionStart({ success: true });
    this.props.ActionRouteNavigate(ROUTES.ROOT);
  };
}

function mapStateToProps({ rSession }) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ActionSessionStart,
      ActionRouteNavigate,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
