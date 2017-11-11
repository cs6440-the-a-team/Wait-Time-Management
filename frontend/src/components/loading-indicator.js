import React from "react";

const LoadingIndicator = ({active, style}) => {
    if (active) {
        return (
            <div className="progress" style={style}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '100%'}} />
            </div>
        )
    }

    return (
        <div style={style} />
    );
}

LoadingIndicator.defaultProps = {
    active: false,
    style: {
        height: '5px',
        marginTop: -20,
        marginBottom: 20
    }
}

export default LoadingIndicator;