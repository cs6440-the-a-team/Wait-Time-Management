import PersonalCard from "../overview/personal-card"
import {connect} from "react-redux"
import { dismissPatientCard } from "../actions";

const mapStateToProps = (state, ownProps) => {
    let patientId = null,
        patientAlias = null;

    if (state.patient.personal_card_to_show && state.patient.patients[state.patient.personal_card_to_show] !== undefined) {
        let patient = state.patient.patients[state.patient.personal_card_to_show];

        patientId = patient.id;
        patientAlias = patient.alias;
    }

    return {
        patientId,
        patientAlias
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseRequest: (e) => {
            //e.preventDefault();
            dispatch(dismissPatientCard());
        }
    }
};

const PersonalCardContainer = connect(mapStateToProps, mapDispatchToProps)(PersonalCard);

export default PersonalCardContainer;