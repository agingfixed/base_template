const templateData = {
    textAreaServer:"Type in Data that will run through server functions...",
    textAreaFile:"Type in Data that will saved to server files...",
    sliderOne:"0",
    sliderTwo:"0",
    APIButtonStatus:"",
    textAreaServerResponse:"Processed server data will display here",
    textAreaServerFileResponse:"Pulled file data will display here",
    fileSlot:"0",
    coinbaseResponse:"API info will display here",
    APIResponse:{tokenSelected:"",coinbaseResponse:{high:"",low:"",last:""}}
}
export function templateReducer(state = templateData, action){

    switch(action.type){
        case "GENERIC_ACTION":
            state = Object.assign({},state, action.payload);
            //reducer computation (This does stuff to payload
            //recieved. This is frontend computation)
            return state;
        default:
            return state;
    }
}