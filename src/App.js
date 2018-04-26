import React, { Component } from 'react';
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Column from "./components/Column";
import Row from "./components/Row";
import Footer from "./compopnents/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>

        <Nav
          title="Mentor Match"
        
        />

        <Container>
          <Row>
            <Column>

            
            </Column>

          </Row>

        </Container>

      </Wrapper>

      
    );
  }
}

export default App;
