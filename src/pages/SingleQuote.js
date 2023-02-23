import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../Components/Comments";
import HighlightedQuote from "../Components/HighlightedQuote";
const SingleQuote = () => {
    const match = useRouteMatch();
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
        <Route path={match.path} exact>
            <div className="centered">
                <Link to={`${match.url}/comments`}>Load comments</Link>
            </div>
        </Route>

        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>

    </>
}
export default SingleQuote;