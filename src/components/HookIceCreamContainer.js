import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIceCream, buyIceCream } from '../redux/iceCream/iceCreamAction';

function HookIceCreamContainer() {
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams)
    const dispatch = useDispatch();
    if(numberOfIceCreams>0){
        return (
            <div>
                <p>Number of Ice Creams - {numberOfIceCreams}</p>
                <button onClick = {() => {dispatch(buyIceCream())}}>Buy Ice Cream</button>
                <button onClick = {() => {dispatch(addIceCream())}}>Add Ice Cream</button>
            </div>
        );
    }
    else{
        return (
            <div>
                <h2>Sorry, no ice creams left</h2>
                <button onClick = {() => {dispatch(addIceCream())}}>Add Ice Cream</button>
            </div>
        )
    }
    
}

export default HookIceCreamContainer;