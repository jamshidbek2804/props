import React, { Component } from "react";

export default class Main extends Component {
  render() {
    const { header, article, nav, figure, figcaption, footer } = this.props;
    return (
      <div className="center">
        <div className="nav">
          <h1 className="nav-title">{nav}</h1>
        </div>
        <div className="main-right">
          <div className="main-component">
            <div>
              <div className="main-figure">
                <h3>{figure}</h3>
                <h3>{figcaption}</h3>
              </div>
            </div>
            <div className="main-info">
              <div className="main-header">
                <h3>{header}</h3>
              </div>
              <div className="main-article">
                <h2>{article}</h2>
              </div>
              <div className="main-footer">
                <h3>{footer}</h3>
              </div>
            </div>
          </div>
          <div className="main-component main-component-2">
            <div>
              <div className="main-figure">
                <h3>{figure}</h3>
                <h3>{figcaption}</h3>
              </div>
            </div>
            <div className="main-info">
              <div className="main-header">
                <h3>{header}</h3>
              </div>
              <div className="main-article">
                <h2>{article}</h2>
              </div>
              <div className="main-footer">
                <h3>{footer}</h3>
              </div>
            </div>
          </div>
          <div className="main-component">
            <div>
              <div className="main-figure">
                <h3>{figure}</h3>
                <h3>{figcaption}</h3>
              </div>
            </div>
            <div className="main-info">
              <div className="main-header">
                <h3>{header}</h3>
              </div>
              <div className="main-article">
                <h2>{article}</h2>
              </div>
              <div className="main-footer">
                <h3>{footer}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
