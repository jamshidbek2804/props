import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { footer } = this.props;
	  return <div className="footer">
		  <h1>{footer}</h1>
	</div>;
  }
}
