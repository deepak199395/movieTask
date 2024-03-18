import { AddToCart } from "./ActionType";
import { RemoveItem } from "./ActionType";

export const addItemToCart=data=>({
type:AddToCart,
payload:data,
})

export const RemoveItemfromCart=index=>({
    type:RemoveItem,
    payload:index,
})