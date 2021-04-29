import React, {useState, useEffect} from "react";

function App () {
  const [opacityOn, setOpacityOn] = useState("hidden")
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  // fetches quotes api when the app first initiates
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      const allQuotes = data
      const randQuote = data[Math.floor(Math.random() * data.length)]
      const quote = randQuote.text
      const author = randQuote.author
      setOpacityOn("visible")
      setQuotes(allQuotes)
      setQuoteAuthor(quote, author)
    })
  }, [])

  // set quote and author 
  function setQuoteAuthor(quote, author) {
    author === null ? setAuthor("Anonymous") : setAuthor(author)
    setQuote(quote)
  }
  
  // set the opacity of the quotes to appear faded in
  function setOpacityVisible() {
     setTimeout(() => {
      setOpacityOn("visible")
     }, 100)
  }

  // generate the quotes on click
  const handleClick = (quotes, OpacityVisble) => {
    const randQuote = quotes[Math.floor(Math.random() * quotes.length)]
    const quote = randQuote.text
    const author = randQuote.author
    setQuoteAuthor(quote, author)
    setOpacityOn("hidden")
    OpacityVisble()
  }

  return (
    <div className="quote-box">
      <p className={`text ${opacityOn}`}>"{quote}"</p>
      <span className={`author ${opacityOn}`}><em>-{author}</em></span>
      <button className="new-quote" onClick={() => handleClick(quotes,setOpacityVisible)}>Generate Quote</button>
      <a className="tweet-quote" href={`https://twitter.com/intent/tweet?text=" ${quote} " -${author}&hashtags=quote`} target="_blank">t</a>
    </div>
  )
} 

export default App;