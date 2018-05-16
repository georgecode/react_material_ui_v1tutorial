import React, { Component, Fragment } from 'react';
import { Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from '../store.js'


export default class extends Component{
	state ={
		exercises
	}

	getExercisesByMuscleGroup(){
		//Object.entries is an es8 method that turns oblects into arrays of arrays
		return Object.entries(
			this.state.exercises.reduce((bin, exercise)=>{
				const {muscles} = exercise

				bin[muscles]=bin[muscles]
				? [...bin[muscles],exercise]
				: [exercise]

				return bin

			},{})
		)
	}

	handleCategorySelected = category =>{
		this.setState({
			category

		})
	}


	render(){
		const exercise =this.getExercisesByMuscleGroup(),

		{category} = this.state

		console.log(this.getExercisesByMuscleGroup())
		return <Fragment>
		<Header />
		<h1>Hello this is an app</h1>

		<Exercises
			category={category}
			exercises={exercise}

		 />
		<Footer 
			category={category}
			muscles = {muscles}
			onSelect={this.handleCategorySelected}
		/>
		</Fragment>
	}

}