import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <p>Item - {props.item}</p>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) =>{
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams;

    return{
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchItem = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());

    return{
        buyItem : dispatchItem
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);