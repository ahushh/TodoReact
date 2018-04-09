import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button} from 'reactstrap';

import projects from '../data/projects';

class Sidenav extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let title = e.target.value;
        debugger;
    }

    render() {
        return (
            <aside className="vertical-bar">
                <ListGroup vertical>
                    {projects.map(topic =>
                        <ListGroupItem action
                                       key={topic.id}
                                       href={`/books/${topic.id}`}
                                       className="mdc-list-item"
                        >{topic.title}
                        </ListGroupItem>
                    )}
                </ListGroup>

                <Form inline onSubmit={e => this.handleSubmit(e)}>
                    <FormGroup>
                        <Label for="createProject" hidden>Создать проект</Label>
                        <Input type="text" name="text" id="exampleEmail" placeholder="Создать проект"/>
                    </FormGroup>
                    <Button type="submit">Создать</Button>
                </Form>
            </aside>
        );
    }
}

export default Sidenav;