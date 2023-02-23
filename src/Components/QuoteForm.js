import React, { useRef, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { Prompt } from 'react-router-dom';
const QuoteForm = props => {
    const [isEntering, setIsEntering] = useState(false);
    const inputAuthorRef = useRef();
    const inputTextRef = useRef();
    const newQuoteHandler = (event) => {
        event.preventDefault();

        const data = {
            author: inputAuthorRef.current.value,
            text: inputTextRef.current.value
        }
        props.onAddQuote(data)

    }
    const finishedEnteringHandler = () => {
        setIsEntering(false)
    }

    const enteringHandler = () => {
        setIsEntering(true)
    }

    return (
        <React.Fragment>
            <Prompt when={isEntering} message={(location) => "Do you want to leave the page?"} />
            <Form style={{ width: '90%' }} onSubmit={newQuoteHandler} onFocus={enteringHandler}>
                <Form.Group >
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" ref={inputAuthorRef} />
                </Form.Group>
                <Form.Group >
                    <Form.Label> Text</Form.Label>
                    <Form.Control as="textarea" rows={3} ref={inputTextRef} />
                </Form.Group>
                <Button varient="primary" type="submit" onClick={finishedEnteringHandler}>Add quote</Button>
            </Form>
        </React.Fragment>
    )
}
export default QuoteForm;