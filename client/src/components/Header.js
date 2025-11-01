import React, { Component } from "react";
import { connect } from "react-redux";

// Class-based component
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "still logging";
      case false:
        return "im logged out";
      default:
        return "im logged in";
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="./" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
