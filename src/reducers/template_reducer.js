const templateData = {
    textAreaServer:"Type in Data that will run through server functions...",
    textAreaFile:"Type in Data that will saved to server files...",
    sliderOne:"0",
    sliderTwo:"0"
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
        case "TEXT_KEYSTROKE":
            state = Object.assign({},state, action.payload);
            return state;
        case "SLIDER_SLIDE":
            state = Object.assign({},state, action.payload);
            return state;
        default:
            return state;
    }
}