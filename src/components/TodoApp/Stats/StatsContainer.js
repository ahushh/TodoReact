import {connect} from 'react-redux';
import Stats from "./Stats";


function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

const StatsContainer = connect(mapStateToProps)(Stats);

export default StatsContainer;