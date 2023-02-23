import { Button } from "react-bootstrap";
import React, { useState } from "react";
import CommentForm from "./CommentForm";
const Comments = () => {
    const [isAddingComments, setIsAddingComments] = useState(false)
    const onCommentHandler = () => {
        setIsAddingComments(true)
    }
    return (
        <>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>User Comments</h2>
                {!isAddingComments && <Button varient='secondary' onClick={onCommentHandler}>Add comments</Button>}
                {isAddingComments && <CommentForm />}
                <p>Comments</p>
            </div>
        </>
    )
}
export default Comments;