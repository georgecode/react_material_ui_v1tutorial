import React, { Component, Fragment } from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

// export default props =>
// 	<div>
// 		<h1>Hello from react</h1>
// 	</div>
export default class extends Component{
	render(){
		return <Fragment>
		<Header />
		<h1>Hello this is an app</h1>
		<Footer />
		</Fragment>
	}

}