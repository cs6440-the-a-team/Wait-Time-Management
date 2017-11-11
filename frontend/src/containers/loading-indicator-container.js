import {connect} from "react-redux"
import LoadingIndicator from "../components/loading-indicator"

const mapStateToProps = function(state, ownProps) {
    return {
        active: state.session.get('loading')
    }
}

const LoadingIndicatorContainer = connect(mapStateToProps)(LoadingIndicator);

export default LoadingIndicatorContainer;