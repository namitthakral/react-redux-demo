import {ADD_ICECREAM, BUY_ICECREAM} from './iceCreamTypes'

export const buyIceCream = () => {
    return {
        type : BUY_ICECREAM
    }
}

export const addIceCream = () => {
    return {
        type : ADD_ICECREAM
    }
}
