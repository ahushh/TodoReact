import React from 'react';
import PropTypes from "prop-types";

import Button from '../button/Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        let title = e.target.value;

        this.setState({title});
    }

    handleSubmit(e) {
        e.preventDefault();
        let title = this.state.title;
        if (title) {
            this.props.onAdd(title);
            this.setState({title: ''});
        }
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.title}
                       onChange={this.handleChange}
                       placeholder="Что нужно сделать?"/>
                <Button type="submit">Добавить</Button>
            </form>
        );
    }
}


Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;