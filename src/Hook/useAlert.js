import {useState} from 'react'

export const useAlert = () =>{
    const [open,setopen] = useState(false);
    const [massage,setmassage] = useState('');
    return {open,setopen,massage,setmassage};
}