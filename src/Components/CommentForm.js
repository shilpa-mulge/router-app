import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import useHttp from '../hook/useHttp';

const CommentForm = (props) => {
    const inputCommentRef = useRef();
    const { isLoading, error, sendRequest } = useHttp();
    const createdData = (data) => {

    }
    const addCommentHandler = (event) => {
        event.preventDefault();

        console.log(inputCommentRef.current.value)
        const comment = { comment: inputCommentRef.current.value }

        sendRequest({
            url: `https://react-app-cd331-default-rtdb.firebaseio.com/quotes/${props.id}/comments.json`, method: 'POST',
            body: comment,
            headers: {
                'Content-Type': 'application/json'
            }
        }, createdData)

    }
    if (error) {
        return <p>{error}</p>
    }
    if (isLoading) {
        return <p>Sending Request....</p>
    }

    return (
        <>
            <Form onSubmit={addCommentHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Your comment</Form.Label>
                    <Form.Control as="textarea" ref={inputCommentRef} />
                </Form.Group>
                <Button variant="primary" type="submit">  Add a Comment
                </Button>
            </Form>
        </>
    )
}
export default CommentForm;