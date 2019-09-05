import React from 'react'; //second step, import react
import {Card } from 'semantic-ui-react'; 
//import styled from 'styled-components'; 

//const StyledH2 = styled.h2`
//    background: gray;
 //   color: red; 
//`; 

function Cards(props){//third step, define the components
    console.log(props); 
    return ( //5th step, return some js and hoop,add props to component
        <Card> 
        <div className ="mycard">
           <h2> {props.data.name}
           </h2>
           <li>Height: {props.data.height}</li>
           <li>Mass: {props.data.mass}</li>
           <li>Hair Color: {props.data.hair_color}</li>
           <li>Skin Color: {props.data.skin_color}</li>
           <li>Eye Color: {props.data.eye_color}</li>
           <li>Birth Year: {props.data.birth_year}</li>
           <li>Gender: {props.data.gender}</li>
           </div>
        </Card>
    ); 
}

export default Cards; 