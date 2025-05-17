import { useState } from "react";
import { useEffect } from "react";

function QuoteBox() {
    const  [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const fetchQuote = async () => {
        const res = await fetch('http://api.quotable.io/random');
        const data = await res.json();

        setQuote(data.content);
        setAuthor(data.author);
    }

    useEffect(() => {
        fetchQuote();
    },[]);

    return (
        <div>
            <p style={{ fontStyle: 'italic' }}>&quot;{quote}&quot;</p>
            <p>- {author}</p>
            <button onClick={fetchQuote}>New Quote</button>
        </div>
    )
}

export default QuoteBox;