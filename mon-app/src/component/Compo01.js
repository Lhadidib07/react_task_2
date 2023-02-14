import React, { useState } from "react";
import styled from 'styled-components'; 
import Compo02 from "./Compo02";
const Compo01 = ()  => { 
    const Container = styled.div`
       margin-top: 200px;
       margin-left: 250px;
       width: 200Px;
       height: 200px;
       display: flex;
       flex-direction: column;
    `
    const Button = styled.button`
       width: 60px;
       height: 38px;
    `
    const [valeurAjouter,setValeurajouter] = useState(0); // variable pour entrer la valeur qu'on veut ajouter ou soustraire 

    const valeurAjouterChangeHandler = (valeur) =>{ 
        setValeurajouter(valeur)
    } 
  

    const [val,setVal] = useState(0);  // la variable afficher a l'ecran 
  
    const valChangeHandlerMoinsp = () =>{ 
        setVal(parseInt(val) + parseInt(valeurAjouter) ); // si je fait parseInt( val + valeurAjouter ) concatenation , je sais pas prk ( madabiya n3rf )
        valeurAjouterChangeHandler(0); // pour rendre la valeur a ajouter 0 
    }

    const valChangeHandlerMoins = () =>{ 
        setVal(parseInt(val) - parseInt(valeurAjouter));
        valeurAjouterChangeHandler(0); // pour rendre la valeur a ajouter 0 
    }
 
     // declaration de function = valeurAjouterChangeHandler  pour pouvoir appelée la fonction  valeurAjouterChangeHandler dans la compo02  . 
    return (
        <Container> 
            <Compo02 function={valeurAjouterChangeHandler} />  
            <Button onClick={valChangeHandlerMoins}> - </Button>
            <h1> {val} </h1>
            <Button onClick={valChangeHandlerMoinsp}> + </Button> 
        </Container>

    );
    
}
export default Compo01;