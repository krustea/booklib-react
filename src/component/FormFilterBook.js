import React, {Component} from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";

class FormFilterBook extends Component {
    constructor(props) {
        super(props);
        this.state={ categories :[], authors : [] }

    }

    componentDidMount() {
        fetch('http://localhost:8888/dcdev/php/booklib/public/category/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ categories: data }))
        ;
        fetch('http://localhost:8888/dcdev/php/booklib/public/author/', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ authors: data }))
        ;
    }
    render() {

        const categories = this.state.categories.map(cat => <option value={cat.id} key={cat.id}>{cat.name}</option>);
        const authors = this.state.authors.map(aut => <option value={aut.id} key={aut.id}>{aut.firstname} {aut.lastname}</option>);


        return (
            <Form>
                <FormGroup>
                    <Label>Catégories</Label>
                    <Input type="select" name="category" onChange={event => this.props.handleFilters({ category: event.target.value })}>
                        <option value={0}>Veuillez sélectionner une catégorie</option>
                        {categories}
                    </Input>
                    <Label>Auteurs</Label>
                    <Input type="select" name="author" onChange={event => this.props.handleFilters({ author: event.target.value })}>
                        <option value={0}>Veuillez sélectionner un auteur</option>
                        {authors}
                    </Input>
                </FormGroup>
            </Form>
        );
    }
}

export default FormFilterBook;