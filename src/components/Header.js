import React, { Component } from 'react'

export default class Header extends Component {
	render() {
	  const {header} = this.props
	return (
		<div className='container text-center'>
			<h1>{header}</h1>
	  </div>
	)
  }
}
