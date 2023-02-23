import React from "react";
import { Figure } from "react-bootstrap";

const Highlightedquote = (props) => {
    return (
        <>
            <div className='centered'
            >
                <Figure style={{ width: '300px', height: "200px", backgroundColor: 'teal' }}>
                    <p style={{ padding: '2rem', textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>{props.text}</p>
                    <Figure.Caption style={{ padding: '2rem', textAlign: 'right', fontWeight: 'bold', color: 'white' }} >
                        {props.author}
                    </Figure.Caption>
                </Figure>
            </div>
        </>
    )
}
export default Highlightedquote;