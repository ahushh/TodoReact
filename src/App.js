import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Content from './components/content/Content';
import Header from './components/header/Header';
import TodoApp from "./components/todoApp/TodoApp";

import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };



    }

    login = user => {
        this.setState({user}, () => this.props.history.push('/todo'));
    };

    logout = user => {
        this.setState({user: null}, () => this.props.history.push('/'))
    };


    render() {
        return (
            <div className="App">
                <Header title={this.props.title} todos={this.props.initialData}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.props.title}</h1>
                </Header>

                <Content>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />

                        <Route path="/todo"
                               render={props => <TodoApp initialData={this.props.initialData} />}
                        />
                        <Route path="/login"
                               render={props => <Login onLogin={this.login} />}
                        />
                        <Route path="/logout"
                               render={props => <Logout onLogin={this.logout} />}
                        />
                        <Route  component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);
