import React from "react"
import {connect} from "react-redux"

import Message from "../components/message"
import {removeMessage} from "../actions"

const Messages = ({messages, removeMessage, style}) => {
    let messageItems = null;
    if (messages.size > 0) {
        messageItems = messages.map((message) => {
            return <Message key={message.id} id={message.id} type={message.type} onClose={removeMessage}>{message.body}</Message>
        }).toArray();
    }
    return (
        <div className="message-container" style={style}>
            {messageItems}
        </div>
    )
};

Messages.defaultProps = {
    style: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 400
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.session.get('messages')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeMessage: (message_id) => {
            dispatch(removeMessage(message_id));
        }
    }
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessageContainer;