import {createContext, useReducer, useState} from 'react';


interface authProps {
    open: boolean;
    setOpen:(open: boolean) => void;
    reg?:{};
    state?:any;
    dispatch?:any
}
const AppContext = createContext<authProps>({
    open:false,
    setOpen: () => false,
    reg: {},
    state: {}, 
});


const initialState = {
    reg:localStorage.getItem('register')? JSON.parse(localStorage.getItem('register') || '{}') : {}
        // user: {
        //   first_name: '',
        //   last_name: '',
        //   email: '',
        //   email_verification_token: '',
        //   _id: '',
        //   created_at: 2022-11-29T09:33:32.428Z,
        //   updated_at: 2022-11-29T09:33:32.428Z,
        //   uuid: 3f3d645c-20b8-4b21-a1a6-f5d139586c4e,
        //   __v: 0
        // },
        // token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ZDFlY2NhZDI0Y2RjMzFhOWEzNWEiLCJpYXQiOjE2Njk3MTQ0MTIsImV4cCI6MTY2OTk3MzYxMn0.RKpO3xHgPz4O8wyAOivm9z1_i-kSCB3zmK89wvr33Bw,
        // message: ''
      
}


const reducer = (state:any, action:any)=>{
    switch(action.type){
        case "USER_SUCCESS":
            return {...state, userReg:action.payload}
        default:
            return state;
    }

}


type AppContextProvider = {
    children:React.ReactNode
}
export const AppContextProvider = (props:AppContextProvider)=>{
    const [open, setOpen] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{state, dispatch , open, setOpen}}>
        {props.children}
    </AppContext.Provider>
}

export default AppContext;