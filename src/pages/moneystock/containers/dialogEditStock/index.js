import React,{useState} from 'react'
import { 
    TextField,
    Button,
    Typography,
    Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {validNumber} from '../../../../rex';
import DialogLayout from '../../../../container/dialog';
import { useMoneyStockContext } from '../../../../reducer/moneystockReducer';
export const DialogEditStock = (props) =>{
    const {open,onAddStock,onCloseDialog,title} = props;
    const moneystockContext = useMoneyStockContext()
    const {
        moneyStock,
        setmoneyStock
    } = moneystockContext;
    const onChangeValue = (e) =>{
        const {name,value} = e.target;
        setmoneyStock({...moneyStock,amount:value})
    }
    return(
        <>
            <DialogLayout
                title={title}
                nameButton={'แก้ไข'}
                open={open}
                handleAdd={onAddStock}
                handleClose={onCloseDialog}
            >
                <TextField
                    fullWidth
                    sx={{ m: 1}}
                    label="amount"
                    id="outlined-start-adornment"
                    value={moneyStock.amount}
                    name={'amount'}
                    onChange={onChangeValue}
                    onInput = {(e) =>{
                        if(e.target.value === ""){
                            e.target.value = ""
                        }
                        else if(validNumber.test(e.target.value)){
                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                        }
                        else{
                            e.target.value = moneyStock.amount
                        }
                    }}
                />
            </DialogLayout>
        </>
    );
}