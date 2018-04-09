import React from 'react';
import PropTypes from 'prop-types';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import Stats from '../stats/Stats';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">{this.props.children}</NavbarBrand>

                        <Stats todos={this.props.todos}> </Stats>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/todo/">ToDo</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Login">Sigin</NavLink>
                            </NavItem>

                        </Nav>
                </Navbar>

            </header>
        );
    }

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
