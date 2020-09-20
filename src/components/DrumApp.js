import React, { Component } from "react";

// make drum machine with 9 buttons, and a display for which button is currently playing
//
// display:    "W"
// buttons: Q W E
// 			A S D
// 			Z X C
//
// buttons play an audio html file, and display the key on screen
//
//
// MAKE REDUCER (REDUX) TO HANDLE HOW/WHAT AUDIO IS PLAYED AFTER APP IS WORKING
//
class DrumMachine extends Component {
	constructor() {
		super();
		this.state = {
			display: {},
			currentSounds: [],
		};
	}
	// make handleChange here? dealing with keyboard presses for qwe asd zxc ? then you can force the handleChange on handleCLick maybe?

	handleClick = (e) => {
		// define method for audio playing from href here (duraiton, etc?)
		// this.setState
	}

	render() {
		return (
			<div id="drum-machine">
				<h3 id="display">Drummy Boi- {this.state.display}</h3>
				<br>
				<button id="Q" href="" onClick={this.handleClick} >Q</button>
				<button id="W" href="" onClick={this.handleClick} >W</button>
				<button id="E" href="" onClick={this.handleClick} >E</button>
				<br>
				<button id="A" href="" onClick={this.handleClick} >A</button>
				<button id="S" href="" onClick={this.handleClick} >S</button>
				<button id="D" href="" onClick={this.handleClick} >D</button>
				<br>
				<button id="Z" href="" onClick={this.handleClick} >Z</button>
				<button id="X" href="" onClick={this.handleClick} >X</button>
				<button id="C" href="" onClick={this.handleClick} >C</button>
			</div>
		);
	}
}

export default DrumMachine;
