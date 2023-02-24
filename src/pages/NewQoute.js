import React from "react";
import { useHistory } from 'react-router-dom';
import QuoteForm from "../Components/QuoteForm";
import useHttp from "../hook/useHttp";
const NewQoute = (props) => {
    const history = useHistory();
    const { isLoading, error, sendRequest } = useHttp();

    const CreateData = (data) => {
        const id = data.name;
        const createdQoute = {
            id: id,
            text: data.text,
            author: data.author
        }
    }
    const addQuoteHandler = (quote) => {
        sendRequest({
            url: 'https://react-app-cd331-default-rtdb.firebaseio.com/quotes.json', method: 'POST',
            body: quote,
            headers: {
                'Content-Type': 'application/json'
            }
        }, CreateData)

        history.push('/quotes')
    }

    return <>
        <div className="centered">
            <QuoteForm onAddQuote={addQuoteHandler} isLoading={isLoading} />
            {error && <p>{error}</p>}
        </div>
    </>
}
export default NewQoute;