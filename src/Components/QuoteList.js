import React from 'react';
import { ListGroup } from 'react-bootstrap';
import QuoteItem from './QuoteItem';
import classes from './Sort.module.css';
import { useHistory, useLocation } from 'react-router-dom';
const Sorting = (quotes, ascending) => {
    return quotes.sort((qouteA, qouteB) => {
        if (ascending) {
            return qouteA.id > qouteB.id ? 1 : -1;
        } else {
            return qouteA.id < qouteB.id ? 1 : -1;
        }
    })
}

const QuoteList = (props) => {
    const history = useHistory();
    const location = new useLocation()

    const urlParam = new URLSearchParams(location.search);

    const isSortedAscending = urlParam.get('sort') === 'asc';

    const SortingQuotes = Sorting(props.quotes, isSortedAscending)

    const onSortingHandler = () => {
        history.push('/quotes?sort=' + (isSortedAscending ? 'Desc' : 'asc'))
    }
    return <>
        <div className={classes.sort}>
            <button className='centered' onClick={onSortingHandler}>sort {isSortedAscending ? 'Descending' : 'ascending'}</button>
        </div>
        <ListGroup as="ul" style={{ marginLeft: '20%', marginRight: '20%' }}>
            {
                SortingQuotes.map((quote) => (
                    <QuoteItem key={quote.id}
                        id={quote.id}
                        text={quote.text}
                        author={quote.author} />
                ))
            }
        </ListGroup>

    </>
}
export default QuoteList;