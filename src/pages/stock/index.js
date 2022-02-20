import React,{useState} from 'react';
import Container from '@mui/material/Container';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useStockContext } from '../../reducer/stockReducer';
import { IconButton } from '@mui/material';
import Tables from './components/table';
import { DialogAddStock } from './containers/dialogAddStock';
import { DialogEditStock } from './containers/dialogEditStock';
import { CircularProgress,Backdrop } from '@mui/material';
import { stockAction } from '../../action/stock.action';
import { AlertDialog } from '../../components/Alert';
import { useAlert } from '../../Hook/useAlert';
function Stock() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open,setopen] = useState(false)
    const [openedit,setopenedit] = useState(false)
    const {alert, setalert} = useAlert();
    const {        
        stock,
        setstock,
        stockBackdrop,
        check,
        setcheck,
        onReset,
        setstockBackdrop
    } = useStockContext();
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - stock.stocklist.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const onClickAdd = () =>{
        setopen(true)
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const onClose = () =>{
        setopen(false)
    }
    const onCloseEdit = () =>{
        setopenedit(false)
    }
    const addStock = async() =>{
        if(stock.title === '' || stock.img === '' || stock.price === '' || stock.amount === ''){
            await setalert({ ...alert,text:'กรุณากรอกข้อมูลให้ครบ',colorNotify:'warning',open: true })
        }
        else{
            setstockBackdrop(true)
            const status = await stockAction.Add(stock);
            setstockBackdrop(false)
            if(status.data.success){
                await setalert({ ...alert,text:'เพิ่มสินค้าสำเร็จ',colorNotify:'success',open: true })
                onReset()
                setcheck(!check)
                setopen(false)
            }
            else{
                await setalert({ ...alert,text:'เพิ่มสินค้าไม่สำเร็จ',colorNotify:'error',open: true })
            }            
        }
    }
    const onEdit = (data) => async(e) =>{
        setstock({...stock,id:data.id,title:data.title,img:data.img,price:data.price,amount:data.amount})
        setopenedit(true)
    }
    const editStock = async() =>{
        if(stock.title === '' || stock.img === '' || stock.price === '' || stock.amount === ''){
            await setalert({ ...alert,text:'กรุณากรอกข้อมูลให้ครบ',colorNotify:'warning',open: true })
        }
        else{
            setstockBackdrop(true)
            const status = await stockAction.Edit(stock);
            setstockBackdrop(false)
            if(status.data.success){
                await setalert({ ...alert,text:'แก้ไขสินค้าสำเร็จ',colorNotify:'success',open: true })
                onReset()
                setcheck(!check)
                setopenedit(false)
            }
            else{
                await setalert({ ...alert,text:'แก้ไขสินค้าไม่สำเร็จ',colorNotify:'error',open: true })
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
            stockBackdrop ?
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={stockBackdrop}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                :    
                <Container>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onClickAdd}
                    >
                        <AddCircleIcon sx={{ fontSize: 40 }}/>
                    </IconButton>     
                    <DialogAddStock 
                        setalert={setalert}
                        open={open}
                        onAddStock={addStock}
                        onCloseDialog={onClose}
                        title={'เพิ่มสินค้า'}
                    />
                    <DialogEditStock 
                        setalert={setalert}
                        open={openedit}
                        onAddStock={editStock}
                        onCloseDialog={onCloseEdit}
                        title={'แก้ไขสินค้า'}
                    />
                    <Tables 
                        onEdit={onEdit}
                        rowsPerPage={rowsPerPage}
                        stocklist={stock.stocklist}
                        page={page}
                        emptyRows={emptyRows} 
                        setalert={setalert}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />  
                </Container>

        }
        </>
    );
}

export default Stock;