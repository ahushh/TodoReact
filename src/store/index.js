import reducer from "../reducers";
import {createStore} from "redux";
import state from '../data/state';

const initialStore = {
    projects: [
        {
            "title": "Create new project",
            "completed": false,
            "id": 1,
            "tasks": [
                {
                    "title": "create new task",
                    "completed": false,
                    "id": 1
                },
                {
                    "title": "its simple",
                    "completed": true,
                    "id": 2
                },

            ]
        }
    ]
};
const store = createStore(reducer, state);

export default store;