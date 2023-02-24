import React, { useEffect, useState } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../Components/Comments";
import HighlightedQuote from "../Components/HighlightedQuote";
import useHttp from "../hook/useHttp";
const SingleQuote = () => {

    const [quotes, setQuotes] = useState([])
    const match = useRouteMatch();
    const param = useParams()
    const { isLoading, error, sendRequest: singleHandler } = useHttp();

    useEffect(() => {
        const transeferdData = data => {
            const quotesArray = [];
            for (const key in data) {
                quotesArray.push({
                    id: key,
                    text: data[key].text,
                    author: data[key].author
                })
            }
            setQuotes(quotesArray)
        }
        singleHandler({ url: `https://react-app-cd331-default-rtdb.firebaseio.com/quotes.json` }, transeferdData)
    }, [singleHandler])

    const quote = quotes.find(quote => quote.id === param.qouteId)
    if (!quote && !isLoading) {
        return <h2>No quote Found</h2>
    }
    if (isLoading) {
        return <div className="centered">
            <p>Sending Request....</p>
        </div>
    }
    if (error) {
        return <p className="centered">{error}</p>
    }
    return <>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={match.path} exact>
            <div className="centered">
                <Link to={`${match.url}/comments`} >Load comments</Link>
            </div>
        </Route>

        <Route path={`${match.path}/comments`}>
            <Comments id={param.qouteId} />
        </Route>

    </>
}
export default SingleQuote;