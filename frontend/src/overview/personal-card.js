import React from "react"
import Modal from "react-modal"

const PersonalCard = ({patientId, procedureName, onCloseRequest}) => {
    return (
        <Modal isOpen={!!patientId} onRequestClose={onCloseRequest}>
            <button type="button" className="close" style={{cursor: "pointer"}} onClick={onCloseRequest}>&times;</button>
            <div className="clearfix"/>
            <hr/>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-subtitle mb-2 text-muted">Patient Procedure ID:</h4>
                    <h2 className="card-title">{patientId}</h2>
                    <p className="card-text">{procedureName}</p>
                </div>
            </div>
        </Modal>
    );
};

export default PersonalCard;