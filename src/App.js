import React, { Component } from 'react';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Connect from "./pages/Connect";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Column from "./components/Column";
import Row from "./components/Row";
import Footer from "./components/Footer";
import TechPath from "./components/DashCards/TechPath";
// import './App.css';



class App extends Component {
  render() {
    return (

      <div>

        <Nav
            title="Mentor Match"
        />

        <Wrapper>
          <Container>
            <Row>
              <Column size="md-6 sm-3">

              <TechPath/>

              </Column>

            </Row>

          </Container>

        </Wrapper>
        <Footer />
      </div>

    );
  }
}

export default App;
