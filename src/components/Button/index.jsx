import React from 'react';
import { ButtonCircle }  from './styles'

const Button = ({ onClick, icon }) => {
    return ( 
        <ButtonCircle onClick={onClick}> {icon} </ButtonCircle>
    );
};

export default Button;
