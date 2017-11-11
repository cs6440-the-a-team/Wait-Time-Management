import React from "react";
import PropTypes from "prop-types"


class Message extends React.Component {
    static propTypes = {
        id: PropTypes.any,
        type: PropTypes.oneOf(['error', 'danger', 'info', 'warning', 'success']),
        onClose: PropTypes.func
    }

    handleClose = (e) => {
        e.preventDefault();
        this.props.onClose(this.props.id);
    }

    render() {
        let close = null,
            type = this.props.type,
            alertClasses = ['alert'];

        if (type === "error") {
            type = "danger"
        }

        alertClasses.push(`alert-${type}`);

        if (this.props.onClose) {
            close = (
                <a href="#" role="button" className="close" onClick={this.handleClose}>&times;</a>
            )
        }

        return (
            <div className={alertClasses.join(" ")} role="alert">
                {close}
                {this.props.children}
            </div>
        )
    }
}

export default Message;