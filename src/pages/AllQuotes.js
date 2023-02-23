
import React from "react";
import QuoteList from "../Components/QuoteList";

const AllQuotes = () => {
    const dummy_quotes = [{
        id: 'q1', author: 'Ram', text: 'Jai shree ram'
    },
    {
        id: 'q2', author: 'Sita', text: 'Jai sita mayya'
    }]
    return <>
        <h2>All quotes</h2>
        <QuoteList quotes={dummy_quotes} />
    </>
}
export default AllQuotes;