import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useMoneyStockContext } from '../../../../reducer/moneystockReducer';
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
        setalert,
        setopenedit
    } = props;
    const {
        moneyStock,
        setmoneyStock
    } = useMoneyStockContext()
    const onEdit = (value) => async(e) =>{
        setmoneyStock({...moneyStock,name:value})
        setopenedit(true)
    }
    return(
        <TableContainer  component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="custom pagination table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Edit</StyledTableCell>
                    <StyledTableCell align="center">Money</StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={'thousand'}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit('thousand')}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">
                            {'แบงค์พัน'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            {moneyStock.moneylist.thousand}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'fivehundred'}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit('fivehundred')}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">
                            {'แบงค์ห้าร้อย'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            {moneyStock.moneylist.fivehundred}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'onehundred'}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit('onehundred')}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">
                            {'แบงค์ร้อย'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            {moneyStock.moneylist.onehundred}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'fifty'}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit('fifty')}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">
                            {'แบงค์ห้าสิบ'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            {moneyStock.moneylist.fifty}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'twenty'}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit('twenty')}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">
                            {'แบงค์ยี่สิบ'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            {moneyStock.moneylist.twenty}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'ten'}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit('ten')}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">
                            {'เหรียญสิบ'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            {moneyStock.moneylist.ten}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'five'}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit('five')}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">
                            {'เหรียญห้า'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            {moneyStock.moneylist.five}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'one'}>
                        <TableCell style={{ width: 80 }} align="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onEdit('one')}
                            >
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="center">
                            {'เหรียญบาท'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            {moneyStock.moneylist.one}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>    
    );
}
export default Tables;