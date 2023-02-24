
import React, { useEffect, useState } from "react";
import QuoteList from "../Components/QuoteList";
import useHttp from "../hook/useHttp";
import NewQoute from "./NewQoute";
const AllQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const dummy_quotes = [{
        id: 'q1', author: 'Ram', text: 'Jai shree ram'
    },
    {
        id: 'q2', author: 'Sita', text: 'Jai sita mayya'
    }]


    const { isLoading, error, sendRequest: onrequestHandler } = useHttp()

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
        onrequestHandler({ url: 'https://react-app-cd331-default-rtdb.firebaseio.com/quotes.json' }, transeferdData);
    }, [onrequestHandler])


    return <>
        <h2>All quotes</h2>
        <QuoteList quotes={quotes} error={error} isLoading={isLoading} onRequest={onrequestHandler} />
    </>
}
export default AllQuotes;