import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
    let total = props.tasks.length;
    let completed = props.tasks.filter(todo => todo.completed).length;
    let notCompleted = total - completed;

    return (
        <table className="stats">
            <tbody>
            <tr>
                <th>Всего задач</th>
                <td>{total}</td>
            </tr>
            <tr>
                <th>Выполнено</th>
                <td>{completed}</td>
            </tr>
            <tr>
                <th>Осталось</th>
                <td>{notCompleted}</td>
            </tr>
            </tbody>
        </table>
    )
};

Stats.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default Stats;