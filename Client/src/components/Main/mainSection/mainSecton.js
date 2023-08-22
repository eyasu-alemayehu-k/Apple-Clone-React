import React, { Component } from "react";

export default class mainSecton extends Component {
  render() {
    return (
      <section className={"hero " + this.props.productClassName}>
        <div className="container">
          <div className={"title " + this.props.titleDark}>
            <h2 className={this.props.titleHeadingClass + " " + this.props.titleHeadingImage}>{this.props.titleHeading}</h2>
            <h3 className="title-sub-heading">{this.props.titleSubHeading}</h3>
          </div>
          <div className="cta">
            <a href={this.props.linkLearnMore} className={"cta-link " + this.props.catLinkDarkFirst}>
            Learn More
            </a>
            <a href={this.props.linkBuy} className={"cta-link " + this.props.catLinkDarkSecond}>
            Buy
            </a>
          </div>
        </div>
      </section>
    );
  }
}
