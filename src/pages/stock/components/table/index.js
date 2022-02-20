import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TablePaginationActions from './../tablepagination';
import { IconButton } from '@mui/material';
import { stockAction } from '../../../../action/stock.action';
import { useStockContext } from '../../../../reducer/stockReducer';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
function Tables(props){
    const {
        rowsPerPage,
        stocklist,
        setalert,
        page,
        emptyRows,
        handleChangePage,
        handleChangeRowsPerPage,
        onEdit
    } = props;
    const {
        check,
        setcheck,
    } = useStockContext()
    const onDelete = (data) => async(e) =>{
        const status = await stockAction.Delete(data);
        console.log('onDelete:',status)
        if(status.data.success){
            await setalert({ ...alert,text:'ลบสินค้าสำเร็จ',colorNotify:'success',open: true })
            setcheck(!check)
        }
        else{
            await setalert({ ...alert,text:'ลบสินค้าไม่สำเร็จ',colorNotify:'error',open: true })
        }    
    }
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Delete</StyledTableCell>
                    <StyledTableCell align="center">Edit</StyledTableCell>
                    <StyledTableCell>title</StyledTableCell>
                    <StyledTableCell align="right">image</StyledTableCell>
                    <StyledTableCell align="right">price</StyledTableCell>
                    <StyledTableCell align="right">amount</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {(rowsPerPage > 0
                    ? stocklist.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : stocklist
                ).map((row,index) => (
                    <TableRow key={index}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDelete(row)}
                            >
                                <DeleteIcon sx={{ color: 'red' }}/>
                            </IconButton>
                        </TableCell>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit(row)}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell scope="row">
                            {row.title}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="right">
                            <img src={row.img.url} width="100px" height="100px"/>
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="right">
                            {row.price}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="right">
                            {row.amount}
                        </TableCell>
                    </TableRow>
                ))}

                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={stocklist.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>    
    );
}
export default Tables;