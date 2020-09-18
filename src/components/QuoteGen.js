import React, { Component } from "react";
import "./QuoteGen.css";

// Component displaying quote, buttons, etc.
class QuoteGen extends Component {
  constructor() {
    super();
    this.state = {
      currentQuote: {},
      allQuotes: [
        { text: "quote 1", author: "author 1" },
        { text: "quote 2", author: "author 2" },
        { text: "quote 3", author: "author 3" },
        { text: "quote 4", author: "author 4" },
        { text: "quote 5", author: "author 5" },
        { text: "quote 6", author: "author 6" },
        { text: "quote 7", author: "author 7" },
        { text: "quote 8", author: "author 8" },
        { text: "quote 9", author: "author 9" },
        { text: "quote 10", author: "author 10" },
        { text: "quote 11", author: "author 11" },
      ],
    };
  }

  handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * this.state.allQuotes.length);
    const randomQuote = this.state.allQuotes[randomIndex];
    this.setState({ currentQuote: randomQuote });
  };
  componentDidMount() {
    return this.handleNewQuote();
  }

  render() {
    return (
      <div className="QuoteGen" id="quote-box">
        <p>Lucky's Quote semi-randomizer-thingy -_-;</p>
        <p id="text">{this.state.currentQuote.text}</p>
        <p id="author">{this.state.currentQuote.author}</p>
        <button id="new-quote" onClick={this.handleNewQuote}>
          New Quote?
        </button>
        <a
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="_blank"
        >
          Tweet Quote
        </a>
      </div>
    );
  }
}

export default QuoteGen;
