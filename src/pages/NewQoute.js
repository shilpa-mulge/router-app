import React from "react";
import { useHistory } from 'react-router-dom';
import QuoteForm from "../Components/QuoteForm";
const NewQoute = () => {
    const history = useHistory();
    const addQuoteHandler = (quote) => {
        console.log(quote)
        history.push('/quotes')
    }
    return <>
        <div className="centered">
            <QuoteForm onAddQuote={addQuoteHandler} />
        </div>
    </>
}
export default NewQoute;