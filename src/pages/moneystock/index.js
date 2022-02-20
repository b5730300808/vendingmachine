import React,{useState} from 'react';
import Container from '@mui/material/Container';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useMoneyStockContext } from '../../reducer/moneystockReducer';
import { IconButton } from '@mui/material';
import Tables from './components/table';
import { DialogEditStock } from './containers/dialogEditStock';
import { CircularProgress,Backdrop } from '@mui/material';
import { moneystockAction } from '../../action/moneystock.action';
import { AlertDialog } from '../../components/Alert';
import { useAlert } from '../../Hook/useAlert';
function MoneyStock() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open,setopen] = useState(false)
    const [openedit,setopenedit] = useState(false)
    const {
        check,
        setcheck,
        moneyStock,
        moneystockBackdrop,
        setmoneystockBackdrop
    } = useMoneyStockContext()
    const {alert, setalert} = useAlert();
    const onCloseEdit = () =>{
        setopenedit(false)
    }
    const onEdit = async() =>{
        setcheck(!check);
        if(moneyStock.amount === ""){
            await setalert({ ...alert,text:'กรุณากรอกข้อมูลให้ครบ',colorNotify:'warning',open: true })
        }
        else{
            setmoneystockBackdrop(true)
            const status = await moneystockAction.Update(moneyStock)
            setmoneystockBackdrop(false)
            if(status.data.success){
                await setalert({ ...alert,text:'แก้ไขจำนวนสำเร็จ',colorNotify:'success',open: true })
                setopenedit(false);
            }
            else{
                await setalert({ ...alert,text:'แก้ไขจำนวนไม่สำเร็จ',colorNotify:'error',open: true })
            }
        }
        
    }
    return (
        <>
            <AlertDialog
                alert={alert}
                onClose={() => setalert({ ...alert, open: false })}
            />
        {
            moneystockBackdrop ?
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={moneystockBackdrop}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                :    
                    <Container> 
                        <DialogEditStock 
                            setalert={setalert}
                            open={openedit}
                            onAddStock={onEdit}
                            onCloseDialog={onCloseEdit}
                            title={'แก้ไขจำนวนแบงค์และเหรียญในระบบ'}
                        />
                        <Tables 
                            setopenedit={setopenedit}
                            setalert={setalert}
                        />  
                    </Container>

        }
        </>
    );
}

export default MoneyStock;