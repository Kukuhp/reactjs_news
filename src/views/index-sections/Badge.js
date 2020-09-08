import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "assets/css/centerdiv.css";
const Badge = (props) => {
    return(
        <div className = "bg-info">
            <div className = "center">
                <h5>{props.judul}</h5>
            </div>
        </div>
    );
};

export default Badge;