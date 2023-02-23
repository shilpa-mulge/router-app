
import { Nav, Button, ListGroup } from 'react-bootstrap';

const QuoteItem = (props) => {
    return (
        <ListGroup.Item variant="primary"
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.text}</div>
                {props.author}
            </div>
            <Nav.Link href={`/quotes/${props.id}`}>
                <Button varient="primary"> view fullScreen</Button>
            </Nav.Link>
        </ListGroup.Item>
    )
}
export default QuoteItem;