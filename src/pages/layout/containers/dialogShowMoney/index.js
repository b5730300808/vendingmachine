import React,{useEffect, useMemo, useState} from 'react'
import { 
    TextField,
    InputAdornment,
    Typography
} from '@mui/material';
import DialogLayout from '../../../../container/dialog';
import {moneyAction} from './../../../../action/money.action'
import { useMoneyContext } from '../../../../reducer/moneyReducer';
export const DialogShowMoney = (props) =>{
    const {openprice,AddMoney,onClosePriceDialog,title} = props;
    const moneyContext = useMoneyContext()
    const {
        money,
        setmoney
    } = moneyContext;
    const [moneylist,setmoneylist] = useState({})
    const getMoney = async() =>{
        let value = await moneyAction.Get();
        console.log('value:',value)
        setmoneylist(value.data)
    }
    useEffect(()=>{
        getMoney();
    },[money])
    const totalValue = useMemo(()=>{
        return moneylist
    },[moneylist])
    return(
        <DialogLayout
            title={title}
            open={openprice}
            handleAdd={AddMoney}
            handleClose={onClosePriceDialog}
            nameButton={'ยืนยันการถอน'}
        >
            <TextField
                disabled
                label="ธนบัตร 1000"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={totalValue.thousand}
                name={'thousand'}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
            />
            <TextField
                disabled
                label="ธนบัตร 500"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={totalValue.fivehundred}
                name={'fivehundred'}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
            />
            <TextField
                disabled
                label="ธนบัตร 100"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={totalValue.onehundred}
                name={'onehundred'}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
            />
            <TextField
                disabled
                label="ธนบัตร 50"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={totalValue.fifty}
                name={'fifty'}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
            />
            <TextField
                disabled
                label="ธนบัตร 20"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={totalValue.twenty}
                name={'twenty'}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
            />
            <TextField
                disabled
                label="เหรียญ 10"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={totalValue.ten}
                name={'ten'}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
            />
            <TextField
                disabled
                label="เหรียญ 5"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={totalValue.five}
                name={'five'}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
            />
            <TextField
                disabled
                label="เหรียญ 1"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={totalValue.one}
                name={'one'}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
            />
            <Typography variant="h6" component="h2">
                {'รวมเป็นจำนวนเงิน '+totalValue.price+' บาท'}
            </Typography>
        </DialogLayout>
    );
}