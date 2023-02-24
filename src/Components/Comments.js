import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import useHttp from "../hook/useHttp";
const Comments = (props) => {
    const [isAddingComments, setIsAddingComments] = useState(false)
    const [comments, setComments] = useState([]);
    const { isLoading, error, sendRequest: showCommentsHandler } = useHttp();
    const onCommentHandler = () => {
        setIsAddingComments(true)
    }
    useEffect(() => {
        const generatedData = data => {
            const commentsArr = []
            const commentsKey = []
            for (const key in data) {
                commentsKey.push(data[key].comment)
            }
            for (const key in commentsKey) {
                commentsArr.push(commentsKey[key])
            }
            setComments(commentsArr)

        }
        showCommentsHandler({ url: `https://react-app-cd331-default-rtdb.firebaseio.com/quotes/${props.id}/comments.json` }, generatedData)
    }, [showCommentsHandler, props.id])

    let content = comments.map(comment => {
        return <p>{comment}</p>
    });
    if (!content && !isLoading) {
        content = <p>No comments..</p>
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>sending Request...</p>
    }

    return (
        <>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>User Comments</h2>
                <div>
                    {content}
                </div>
                {!isAddingComments && <Button varient='secondary' onClick={onCommentHandler}>Add comments</Button>}
                {isAddingComments && <CommentForm id={props.id} />}
                <p>Comments</p>
            </div>
        </>
    )
}
export default Comments;