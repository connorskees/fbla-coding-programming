import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles.scss";

// using a list of maps with `value` and `path` keys lets us
// very easily change the path without affecting any other logic
// in the program
const navElements = [
    {
        value: "Home",
        path: "/"
    },
    {
        value: "Students",
        path: "/students"
    },
    {
        value: "Generate Report",
        path: "/generate-report"
    },
];

class Header extends Component {
    state = {};

    render() {
        // `this.props.active` is the value rather than the slug
        // e.g. 'Generate Report' instead of 'generate-report'
        let { active } = this.props;
        return (
            <header>
                <nav className="header">
                    <div className="nav-item-wrapper">
                        {navElements.map(el => {
                            let className = el.value === active ? "nav-item active" : "nav-item";
                            return (
                                <Link to={el.path.toLowerCase()} key={el.value} className={className}>
                                    {el.value}
                                </Link>
                            )
                        })}
                    </div>
                </nav>
                {/*
                    the `spacer` class exists to push page content down 
                    because the nav has `position: fixed`, so without the
                    `spacer` the nav would sit on top of the page content
                */}
                <div className="spacer"></div>
            </header>
        );
    }
}

export default Header;
