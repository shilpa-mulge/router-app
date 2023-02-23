import React from 'react';
import { Form, Button } from 'react-bootstrap';
const CommentForm = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Your comment</Form.Label>
                    <Form.Control as="textarea" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add a Comment
                </Button>
            </Form>
        </>
    )
}
export default CommentForm;