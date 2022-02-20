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
import { useStockContext } from '../../../../reducer/stockReducer';
export const DialogAddStock = (props) =>{
    const {open,onAddStock,onCloseDialog,title,setalert} = props;
    const stockContext = useStockContext()
    const [image,setimage] = useState('')
    const {
        stock,
        setstock
    } = stockContext;
    const onChangeValue = (e) =>{
        const {name,value} = e.target;
        setstock({...stock,[name]:value})
    }
    const onChangeFile = (e) =>{
        // e.preventDefault()
        // console.log('files:',e.target)
        const f = e.target.files[0]
        var reader = new FileReader()
        reader.onload = async(event) => 
        { 
            const dataURL = event.target.result
            console.log('::files:::',dataURL,e.target.files[0])
            // setStateEdit(prevState => ({ ...prevState, bonusImage: dataURL }));
            if(f.size >= 220000){
                await setalert({ ...alert,text:'ไฟล์ขนาดใหญ่เกิน 200kb ',colorNotify:'warning',open: true })
            }
            else{
                setstock({...stock,img:{path:dataURL,name:f.name}});
                setimage(dataURL)
            }
        }
        reader.readAsDataURL(f);
    }
    return(
        <>
            <DialogLayout
                title={title}
                nameButton={'เพิ่มสินค้า'}
                open={open}
                handleAdd={onAddStock}
                handleClose={onCloseDialog}
            >
                <TextField
                    fullWidth
                    sx={{ m: 1}}
                    label="title"
                    id="outlined-start-adornment"
                    value={stock.title}
                    name={'title'}
                    onChange={onChangeValue}
                />
                <Button
                    variant="contained"
                    component="label"
                >
                    {'Upload File'}
                    <input
                        type="file"
                        onChange={onChangeFile}
                        hidden
                    />
                </Button>                      
                <Typography display={'inline'} style={{marginLeft:'10px'}}>
                    {console.log('name:',stock)}
                    {stock.img.name}
                </Typography>    
                {
                    image !== '' ?
                        <Box sx={{ m: 1}}>
                            <img src={image} width="100px" height="100px"/>                            
                        </Box>
                        :<></>
                }
                <TextField
                    fullWidth
                    sx={{ m: 1}}
                    label="price"
                    id="outlined-start-adornment"
                    value={stock.price}
                    name={'price'}
                    onChange={onChangeValue}
                    onInput = {(e) =>{
                        if(e.target.value === ""){
                            e.target.value = ""
                        }
                        else if(validNumber.test(e.target.value)){
                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                        }
                        else{
                            e.target.value = stock.price
                        }
                    }}
                />
                <TextField
                    fullWidth
                    sx={{ m: 1}}
                    label="amount"
                    id="outlined-start-adornment"
                    value={stock.amount}
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
                            e.target.value = stock.amount
                        }
                    }}
                />
            </DialogLayout>
        </>
    );
}