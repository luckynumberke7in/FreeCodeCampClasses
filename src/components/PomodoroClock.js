import React, { Component } from "react";



class PomodoroClock extends Component {
	constructor() {
		super();
		this.state = {
			isPaused: true,
			currentTime: '',
			sessionTime: '25:00',
			breakTime: '05:00',
		};
	}
	// make a componenetDidMount setting currentTime (and time-label) to be default sessionTime (Session: 25 min)
	// 
	// make something that checks the value of timer and on completion:
	// 		play audio 'beep'
	// 		switch to other timer and begin countdown automatically
	// 
	// make handlePlay
	// make handleReset
	// 
	// make handleDecrement --
	// make handleIncrement -- 
	// these change session or break depending on the button id (use switch)

	// determine how to use time values and to play/pause
	// 
	// then style and connect redux


	render() {
		return (
			<div id="clock">

				<h3>Tick toc it's my Pomodoro Clock</h3>
				<br>
				<p id="timer-label" ></p>
				<p id="time-left" ></p>
				<br>
				<button id="start_stop" onClick={this.handlePlay} >Start / Stop</button>
				<br>
				<button id="reset" onClick={this.handleReset} >Reset?</button>
				<br>
				<h3>Starting times</h3>
				<p id="session-length" >Session: {this.state.sessionTime}</p>
				<button id="session-decrement" onClick={this.handleDecrement} >-</button>
				<button id="session-increment" onClick={this.handleIncrement} >+</button>
				<br>
				<p id="break-length" >Break: {this.state.breakTime}</p>
				<button id="break-decrement" onClick={this.handleDecrement} >-</button>
				<button id="break-increment" onClick={this.handleIncrement} >+</button>

			</div>
		);
	}
}

export default PomodoroClock;
