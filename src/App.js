import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    header: "<header>",
    nav: "<nav>",
    article: "<article>",
    figure: "<figure>",
    figcaption: "<figcaption>",
    footer: "<footer>",
  };
  render() {
    const { header, nav, article, figure, figcaption, footer } = this.state;
    return (
      <div className="container mt-3">
        <div className="header">
          <Header header={header} />
        </div>
        <div className="main">
          <Main
            header={header}
            nav={nav}
            article={article}
            figure={figure}
            figcaption={figcaption}
            footer={footer}
          />
        </div>
        <div>
          <Footer footer={footer} />
        </div>
      </div>
    );
  }
}
