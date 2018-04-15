import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({projects}) => {
    let total = projects.length;
    let completed = projects.filter(project => project.completed).length;
    let notCompleted = total - completed;

    return (
        <table className="stats">
            <tbody>
            <tr>
                <th>Всего проектов</th>
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
    projects: PropTypes.array.isRequired
};

export default Stats;