import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Box, 
    IconButton, 
    Badge,
    Menu,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
const AppBarLayout = (props) =>{
    const {onClick,handleMobileMenuOpen,handleMobileMenuClose,isMobileMenuOpen} = props;
    const renderMobileMenu = (
        <Menu
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </MenuItem>
        </Menu>
    );
    return(
        <>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={onClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Vending Machine
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}   
        </>
    );
}
export default AppBarLayout;