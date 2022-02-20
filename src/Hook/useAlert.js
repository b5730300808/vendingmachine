import {useState} from 'react'
const initialAlert = {
    open: false,
    text: '',
    colorNotify: 'error',
}
export const useAlert = () =>{
    const [alert, setalert] = useState(initialAlert);
    return {alert, setalert};
}