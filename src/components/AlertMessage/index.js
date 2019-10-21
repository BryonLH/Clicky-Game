import React from "react";
import Alert from 'react-bootstrap/Alert'
import "./style.css";

function AlertMessage(props) {
    return (
        <Alert variant={props.alertType}>
            <div className="alert-message">
                <Alert.Heading>{props.message}</Alert.Heading>
            </div>
        </Alert>
    );
};

export default AlertMessage;

