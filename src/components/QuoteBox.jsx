import { useState } from "react";
import { useEffect } from "react";
import Timer from "./Timer";

function QuoteBox() {
    const  [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [restartKey, setRestartKey] = useState(0);

    const fetchQuote = async () => {
        const res = await fetch('http://api.quotable.io/random');
        const data = await res.json();

        setQuote(data.content);
        setAuthor(data.author);
        setRestartKey(prevKey => prevKey + 1);
    }

    useEffect(() => {
        fetchQuote();
    },[]);

    return (
        <div>
            <p style={{ fontStyle: 'italic' }}>&quot;{quote}&quot;</p>
            <p>- {author}</p>
            <Timer restartTrigger={restartKey} />
            <button onClick={fetchQuote}>New Quote</button>
        </div>
    )
}

export default QuoteBox;