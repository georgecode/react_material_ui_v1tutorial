import React, { Component, Fragment } from 'react';
import { Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from '../store.js'


export default class extends Component{
	state ={
		exercises,
		exercise:{}
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

	handleExerciseSelected = id => {
		this.setState(({exercises})=>({
			exercise: exercises.find(ex=>ex.id === id)
		}))
	}

	render(){
		const exercises =this.getExercisesByMuscleGroup(),

		{category, exercise} = this.state

		console.log(this.getExercisesByMuscleGroup())
		return <Fragment>
		<Header />
		<h1>Hello this is an app</h1>

		<Exercises
			exercise={exercise}
			category={category}
			exercises={exercises}
			onSelect={this.handleExerciseSelected}

		 />
		<Footer 
			category={category}
			muscles = {muscles}
			onSelect={this.handleCategorySelected}
		/>
		</Fragment>
	}

}