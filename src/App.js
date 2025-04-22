import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    fetch('https://thequoteshub.com/api/')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.text);
        setAuthor(data.author);
      });
  };
  // fetches quotes api when the app first initiates
  useEffect(() => {
    fetchQuote();
  }, []);

  const handleClick = () => {
    fetchQuote();
  };

  return (
    <div className="quote-box">
      <p className="text">"{quote}"</p>
      <span className="author">
        <em>-{author}</em>
      </span>
      <button className="new-quote" onClick={handleClick}>
        Generate Quote
      </button>
      <a
        className="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=" ${quote} " -${author}&hashtags=quote`}
        target="_blank"
      >
        Tweet quote
      </a>
    </div>
  );
}

export default App;
