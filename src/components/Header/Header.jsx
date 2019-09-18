import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles.scss";

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
        let { active } = this.props;
        return (
            <header>
                <nav className="header">
                    <h1>uda</h1>
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
            </header>
        );
    }
}

export default Header;
