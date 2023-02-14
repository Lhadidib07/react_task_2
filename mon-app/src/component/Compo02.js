import React, { useState } from "react";
import styled from 'styled-components'; 

// utilisaton du props pour appelé les fonction de la compo01 en utilisant la fonction blurHandler 

const Compo02 = (props)  => {
    
    const blurHandler = (event) =>{
        props.function(event.target.value);
    }
    const Input = styled.input` 
         margin-left: -80px;
         margin-bottom: 25px;
    `
    return (
        <Input type="number" placeholder="entrer une valeur " onBlur={blurHandler}></Input>   
        );
}
export default Compo02;
