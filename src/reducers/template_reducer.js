const templateData = {
    Item_1:{
        Item_1_a:"Stuff_of_Item_1_a",
        Item_1_b:"Stuff_of_Item_1_b"
    },
    Item_2:{
        Item_2_a:"Stuff_of_Item_2_a",
        Item_2_b:"Stuff_of_Item_2_b"
    }
}
export function templateReducer(state = templateData, action){

    switch(action.type){
        case "GENERIC_ACTION":
            state = Object.assign({},state, action.payload);
            //reducer computation (This does stuff to payload
            //recieved. This is frontend computation)
            console.log(`Hello from templateReducer. You
            triggered a GENERIC_ACTION this is the 
            state of the front end of the app: ${state}`)
            return state;
        default:
            return state;
    }
}