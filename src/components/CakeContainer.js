import React, { useState } from 'react';
import { connect } from 'react-redux';
import {buyCake} from '../redux/index'

function CakeContainer(props) {
    const [number, setNumber] = useState(1);

    const handleChange = (e) =>{
        setNumber(e.target.value)
        if(e.target.value>props.numberOfCakes){
            document.getElementById("cakebtn").disabled = true;
        }
        else{
            document.getElementById("cakebtn").disabled = false;
        }
    }

    if(props.numberOfCakes>0){
        return (
            <div>
                <p>Number of Cakes - {props.numberOfCakes}</p>
                <input type="text" value={number} onChange={handleChange}/>
                <button id="cakebtn" onClick = {() => props.buyCake(number)}>Buy {number} Cake</button>
            </div>
        );
    }
    else{
        return(
            <div>
                <h2>Sorry, no more cakes left</h2>
                <button onClick = {() => props.addCake(number)}>Add Cake</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : (number) => {dispatch(buyCake(number))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CakeContainer);