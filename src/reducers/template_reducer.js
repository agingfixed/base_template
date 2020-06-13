const initialState = {
    textAreaServer:"Type in Data that will run through server functions...",
    textAreaFile:"Type in Data that will saved to server files...",
    sliderOne:"0",
    sliderTwo:"0",
    APIButtonStatus:"",
    textAreaServerResponse:"Processed server data will display here",
    textAreaServerFileResponse:"Pulled file data will display here",
    fileSlot:"0",
    coinbaseResponse:"API info will display here",
    APIResponse:{tokenSelected:"",coinbaseResponse:{high:"",low:"",last:""}},
    informUserOfInvalidLogin:false,
    userData:[]
}
export function templateReducer(state = initialState, action){

    switch(action.type){
        case "GENERIC_ACTION":
            state = Object.assign({},state, action.payload);
            //reducer computation (This does stuff to payload
            //recieved. This is frontend computation)
            return state;
        default:
            return initialState;
    }
}

//alternative structure 

/*
  switch (action.type) {
    case "PET_SELECTED": {
      return {
        ...state,
        selectedPet: action.payload
      };
    }
    case "FETCH_PET": {
      return {
        ...state,
        loading: true,
        petData: null
      };
    }
    case "FETCH_PET_SUCCESS": {
      return {
        ...state,
        loading: false,
        petData: action.payload
      };
    }

    case "RESET": {
      return initialState;
    }
    */