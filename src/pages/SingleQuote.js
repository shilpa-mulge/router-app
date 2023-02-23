import React from "react";
import { Button } from "react-bootstrap";
import { Route, useParams, Link } from "react-router-dom";
import Comments from "../Components/Comments";
import HighlightedQuote from "../Components/HighlightedQuote";
const SingleQuote = () => {
    const dummy_quotes = [{
        id: 'q1', author: 'Ram', text: 'Jai shree ram'
    },
    {
        id: 'q2', author: 'Sita', text: 'Jai sita mayya'
    }]
    const param = useParams()
    const quote = dummy_quotes.find(quote => quote.id === param.qouteId)
    if (!quote) {
        return <h2>No quote Found</h2>
    }
    return <>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${param.qouteId}`} exact>
            <div className="centered">
                <Link to={`/quotes/${param.qouteId}/comments`}>Load comments</Link>
            </div>
        </Route>

        <Route path={`/quotes/${param.qouteId}/comments`}>
            <Comments />
        </Route>

    </>
}
export default SingleQuote;