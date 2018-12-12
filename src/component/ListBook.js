import React, {Component} from 'react';
import CardBook from "./CardBook";
import { Col, Row } from "reactstrap";
import FormFilterBook from "./FormFilterBook";

class ListBook extends Component {

    constructor(props) {
        super(props);
        this.state = { books: [], filters:{} };
    }

    componentDidMount() {
        fetch('http://localhost:8888/dcdev/php/booklib/public/book', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ books: data }))
        ;
    }
    handleFilters(filters){
        this.setState({filters:filters});
    }

    render() {

        if (this.state.books.length === 0) {
            return <div>Chargement en cours</div>;
        }

        const filteredBooks = this.state.books.filter(book => {
            let result = false;
            if (this.state.filters.category) {
                for (let i = 0; i < book.category.length; i++) {
                    if (book.category[i].id == this.state.filters.category) {
                        result = true;
                    }
                }
            } else {
                result = true;
            }

            return result;
        });


        const books = filteredBooks.map(book => <Col md="3" key={book.id}><CardBook book={book}/></Col>);
        return (

            <React.Fragment>
                <FormFilterBook handleFilters={filters=>this.handleFilters(filters)}/>
            <Row>
                {books}

            </Row>
            </React.Fragment>
        );
    }
}

export default ListBook;