import { AddToCart, RemoveItem } from "./ActionType";

export const reducer=(state=[],action)=>{
switch(action.type){
    case AddToCart:
    {
     return[...state.action.payload]
    }
    case RemoveItem:
    {
    const deleteArray=action.payload.filter((item.index)=>{
        return index=action.payload
    })
    }
   default {
    return state
   }
}