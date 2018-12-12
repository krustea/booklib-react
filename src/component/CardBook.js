import React, {Component} from 'react';
import {Badge, Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";

class CardBook extends Component {

    render() {

        const { book } = this.props;
        const categories = book.category.map(cat=><Badge key={cat.id}>{cat.name}</Badge>);

        return (
            <Card>
                <CardImg src={"http://localhost:8888/dcdev/php/booklib/public/uploads/" + book.image}/>
                <CardBody>
                    <CardTitle className='text-primary'>{book.title}</CardTitle>
                    {categories}
                    <CardSubtitle>{book.author.firstname} {book.author.lastname}</CardSubtitle>
                </CardBody>
            </Card>
        );
    }
}

export default CardBook;