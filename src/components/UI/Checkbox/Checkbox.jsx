import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, Input} from 'reactstrap';

function Checkbox(props) {
    return (
        <FormGroup check onClick={props.onChange} inline>
            <Label check>
                <Input type="checkbox"/>{' '}
            </Label>
        </FormGroup>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func
};

export default Checkbox;