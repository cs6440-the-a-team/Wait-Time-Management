import React from "react"
import Modal from "react-modal"

const PersonalCard = ({patientId, patientAlias, onCloseRequest}) => {
    return (
        <Modal isOpen={!!patientId} onRequestClose={onCloseRequest} style={{
            content: {
                top: '5px',
                left: '5px',
                right: '5px',
                bottom: '5px'
            }
        }}>
            <button type="button" className="close" style={{cursor: "pointer"}} onClick={onCloseRequest}>&times;</button>
            <div className="clearfix"/>
            <hr/>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-subtitle mb-2 text-muted">Patient Procedure ID:</h4>
                    <h2 className="card-title">{patientAlias}</h2>
                    <p>Please contact the front desk if you have any questions.</p>
                    <p className="text-muted">
                        You can see your patient status at any time at: &nbsp;
                        {window.location.origin}/
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default PersonalCard;