import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Content from './components/Content/Content';

import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Header from './components/Header/Header';
import TodosApp from './components/TodoApp/TodosApp';


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

    logout = () => {
        this.setState({user: null}, () => this.props.history.push('/'))
    };


    render() {
        return (
            <div className="App">
                <Header><img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.props.title}</h1>
                </Header>
                <Content>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/todo"
                               render={() => <TodosApp/>}
                        />
                        <Route path="/login"
                               render={() => <Login onLogin={this.login}/>}
                        />
                        <Route path="/logout"
                               render={() => <Logout onLogin={this.logout}/>}
                        />
                        <Route component={NotFound}/>
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);
