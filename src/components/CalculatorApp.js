import React, { Component } from "react";

// make calculator app-- needs: display (start @ 0), buttons (0-9, +, -,*, /, ., clear, enter)
//
// 				   0.0
//
// 		7  8  9  +   c
// 		4  5  6  -   l
// 		1  2  3  *   r
// 		   0  .  /   =
//
// make state = display, and buttons / input text updates state string
//
// on enter / = make it calculate the equation (remove "", then reapply it after math is done)
//
// make it so you can chain equations (update answer to state)
//
// clear resets state to 0 (and all math)
//
//
class CalculatorApp extends Component {
	constructor () {
		super()
		this.state = {
			display: ""
			// should i add another state for old math logic or something?
		}
	}

	handleClick = e => {
		// do something here. 
		// decide how to handle special cases like "0" "." "clear" "enter"
		// otherwise treat all numbers and math operands as strings and add them to this.state.display
		// when enter is hit process the math (remove string, then re-add it?)
		// 
		// when buttons are hit return {...this.state.display.concat(input)}
	}

	render() {
		return (
			<div id="calculator">

				<h3 id="display">{this.state.display}</h3>
				<br>
				<div id="buttons">

					<button id="seven" value="7" onClick={this.handleClick} >7</button>	
					<button id="eight" value="8" onClick={this.handleClick} >8</button>
					<button id="nine" value="9" onClick={this.handleClick} >9</button>
					<button id="add" value="+" onClick={this.handleClick} >+</button>
					<button id="clear" value="clear" onClick={this.handleClick} >clear</button>
					<br>
					<button id="four" value="4" onClick={this.handleClick} >4</button>
					<button id="five" value="5" onClick={this.handleClick} >5</button>
					<button id="six" value="6" onClick={this.handleClick} >6</button>
					<button id="subtract" value="-" onClick={this.handleClick} >-</button>
					<br>
					<button id="one" value="1" onClick={this.handleClick} >1</button>
					<button id="two" value="2" onClick={this.handleClick} >2</button>
					<button id="three" value="3" onClick={this.handleClick} >3</button>
					<button id="multiply" value="*" onClick={this.handleClick} >*</button>
					<br>
					<button id="zero" value="0" onClick={this.handleClick} >0</button>
					<button id="decimal" value="." onClick={this.handleClick} >.</button>
					<button id="divide" value="/" onClick={this.handleClick} >/</button>
					<button id="equals" value="=" onClick={this.handleClick} >=</button>

				</div>
			</div>
		);
	}
}
export default CalculatorApp;
