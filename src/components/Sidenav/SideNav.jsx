import React from 'react';

import ProjectsListContainer from '../TodoApp/Projects/ProjectsListContainer';
import ProjectFormContainer from "../TodoApp/Projects/ProjectFormContainer";

const Sidenav = () => {
    return (
        <aside className="vertical-bar">
            <ProjectFormContainer/>
            <ProjectsListContainer/>
        </aside>
    );
};


export default Sidenav;