import React, { Component } from 'react';
import Header from "components/Header";
import "./styles.scss";

class Home extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <Header active="Home" />
            </React.Fragment>
        );
    }
}

export default Home;
