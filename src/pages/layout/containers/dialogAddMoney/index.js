import React,{useMemo} from 'react'
import { 
    Toolbar,
    TextField,
    InputAdornment,
    Typography
} from '@mui/material';
import DialogLayout from '../../../../container/dialog';
import {validNumber} from '../../../../rex';
import { useMoneyContext } from '../../../../reducer/moneyReducer';
export const DialogAddMoney = (props) =>{
    const {openprice,AddMoney,onClosePriceDialog,title} = props;
    const moneyContext = useMoneyContext()
    const {
        money,
        setmoney
    } = moneyContext;
    const onChangeValue = (e) =>{
        const {name,value} = e.target;
        setmoney({...money,[name]:value})
    }
    const totalValue = useMemo(() =>{
        let total = 0
        if(money.thousand !== ''){
            total += 1000*(parseInt(money.thousand));
        }
        if(money.fivehundred !== ''){
            total += 500*(parseInt(money.fivehundred));
        }
        if(money.onehundred !== ''){
            total += 100*(parseInt(money.onehundred));
        }
        if(money.fifty !== ''){
            total += 50*(parseInt(money.fifty));
        }
        if(money.twenty !== ''){
            total += 20*(parseInt(money.twenty))
        }
        if(money.ten !== ''){
            total += 10*(parseInt(money.ten))
        }
        if(money.five !== ''){
            total += 5*(parseInt(money.five))
        }
        if(money.one !== ''){
            total += parseInt(money.one)
        }
        // setmoney({...prevState,price:total});
        return total
    },[money.fifty, money.five, money.fivehundred, money.one, money.onehundred, money.ten, money.thousand, money.twenty]);
    return(
        <DialogLayout
            title={title}
            open={openprice}
            handleAdd={AddMoney}
            handleClose={onClosePriceDialog}
        >
            <TextField
                label="ธนบัตร 1000"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={money.thousand}
                name={'thousand'}
                onChange={onChangeValue}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
                onInput = {(e) =>{
                    if(e.target.value === ""){
                        e.target.value = ""
                    }
                    else if(validNumber.test(e.target.value)){
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }
                    else{
                        e.target.value = money.thousand
                    }
                }}
            />
            <TextField
                label="ธนบัตร 500"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={money.fivehundred}
                name={'fivehundred'}
                onChange={onChangeValue}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
                onInput = {(e) =>{
                    if(e.target.value === ""){
                        e.target.value = ""
                    }
                    else if(validNumber.test(e.target.value)){
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }
                    else{
                        e.target.value = money.fivehundred
                    }
                }}
            />
            <TextField
                label="ธนบัตร 100"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={money.onehundred}
                name={'onehundred'}
                onChange={onChangeValue}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
                onInput = {(e) =>{
                    if(e.target.value === ""){
                        e.target.value = ""
                    }
                    else if(validNumber.test(e.target.value)){
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }
                    else{
                        e.target.value = money.onehundred
                    }
                }}
            />
            <TextField
                label="ธนบัตร 50"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={money.fifty}
                name={'fifty'}
                onChange={onChangeValue}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
                onInput = {(e) =>{
                    if(e.target.value === ""){
                        e.target.value = ""
                    }
                    else if(validNumber.test(e.target.value)){
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }
                    else{
                        e.target.value = money.fifty
                    }
                }}
            />
            <TextField
                label="ธนบัตร 20"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={money.twenty}
                name={'twenty'}
                onChange={onChangeValue}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
                onInput = {(e) =>{
                    if(e.target.value === ""){
                        e.target.value = ""
                    }
                    else if(validNumber.test(e.target.value)){
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }
                    else{
                        e.target.value = money.twenty
                    }
                }}
            />
            <TextField
                label="เหรียญ 10"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={money.ten}
                name={'ten'}
                onChange={onChangeValue}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
                onInput = {(e) =>{
                    if(e.target.value === ""){
                        e.target.value = ""
                    }
                    else if(validNumber.test(e.target.value)){
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }
                    else{
                        e.target.value = money.ten
                    }
                }}
            />
            <TextField
                label="เหรียญ 5"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={money.five}
                name={'five'}
                onChange={onChangeValue}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
                onInput = {(e) =>{
                    if(e.target.value === ""){
                        e.target.value = ""
                    }
                    else if(validNumber.test(e.target.value)){
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }
                    else{
                        e.target.value = money.five
                    }
                }}
            />
            <TextField
                label="เหรียญ 1"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={money.one}
                name={'one'}
                onChange={onChangeValue}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{'จำนวน'}</InputAdornment>,
                }}
                onInput = {(e) =>{
                    if(e.target.value === ""){
                        e.target.value = ""
                    }
                    else if(validNumber.test(e.target.value)){
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }
                    else{
                        e.target.value = money.one
                    }
                }}
            />
            <Typography variant="h6" component="h2">
                {'รวมเป็นจำนวนเงิน '+totalValue+' บาท'}
            </Typography>
        </DialogLayout>
    );
}