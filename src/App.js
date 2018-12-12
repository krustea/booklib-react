import React, { Component } from 'react';
import ListBook from './component/ListBook';
import './App.css';
import {Container} from "reactstrap";
import Route from "react-router-dom/es/Route";
import Contact from "./component/Contact";
import Menu from "./component/Menu";


class App extends Component {
  render() {
    return (
      <Container>
         <Menu/>
    <Route path="/" exact component={ListBook}/>
          <Route path="/contact" component={Contact}/>
      </Container>
    );
  }
}

export default App;
