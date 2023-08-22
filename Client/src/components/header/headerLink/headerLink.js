import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class headerLink extends Component {
  render() {
    return (
        <Link to={this.props.linkUrl} className={"_nav-link " + this.props.iconClassName}>
            {this.props.linkName}
        </Link>
    )
  }
}
