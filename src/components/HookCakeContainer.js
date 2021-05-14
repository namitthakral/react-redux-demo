import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCake, buyCake } from '../redux';

function HookCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch();
    
    if(numberOfCakes>0){
        return (
            <div>
                <p>Number of Cakes - {numberOfCakes}</p>
                <button onClick = {() => dispatch(buyCake())}>Buy Cake</button>
                <button onClick = {() => dispatch(addCake())}>Add Cake</button>
            </div>
        );
    }
    else{
        return(
            <div>
                <h2>Sorry, no more cakes left</h2>
                <button onClick = {() => dispatch(addCake())}>Add Cake</button>
            </div>
        )
    }
    
}

export default HookCakeContainer;