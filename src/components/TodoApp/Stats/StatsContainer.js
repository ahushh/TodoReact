import {connect} from 'react-redux';
import Stats from "./Stats";


function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

const StatsContainer = connect(mapStateToProps)(Stats);

export default StatsContainer;