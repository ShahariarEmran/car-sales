import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddCar from './AddCar/AddCar';
import ManageCar from './ManageCar/ManageCar';
import MyOrders from '../MyOrders/MyOrders';
import OrderPay from './UserDashboard/OrderPay/OrderPay';
import AddReview from './UserDashboard/AddReview/AddReview';
import Login from '../Login/Login';
import { Nav } from 'react-bootstrap';
import ManageOrders from './UserDashboard/ManageOrders/ManageOrders';
import AdminRoute from '../Login/AdminRoute/AdminRoute';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/home"><Button variant="contained">Go Home</Button></Link><br /><br />

            {/* <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link> */}
            

            {user?.email &&
            <Box>
            <Link style={{ textDecoration: 'none' }} to={`${url}/orderPay`}><Button variant="contained">Order Pay</Button></Link><br /><br />

            <Link style={{ textDecoration: 'none' }} to={`${url}/myOrders`}><Button variant="contained">My Orders</Button></Link><br /><br />

            <Link style={{ textDecoration: 'none' }} to={`${url}/addReview`}><Button variant="contained">Add Review</Button></Link><br /><br />

        </Box>}

           {admin && 
            <Box>  
            <Link style={{ textDecoration: 'none' }} to={`${url}/addCar`}><Button variant="contained">Add an Car</Button></Link><br /><br />

            <Link style={{ textDecoration: 'none' }} to={`${url}/manageCar`}><Button variant="contained">Manage Car</Button></Link><br /><br />

            <Link style={{ textDecoration: 'none' }} to={`${url}/manageOrder`}><Button variant="contained">Manage Order</Button></Link><br /><br />

            <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button variant="contained">Make Admin</Button></Link><br /><br />
       </Box>}
       {user?.email ?
                        <Button onClick={logout} variant="contained">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>} <br /><br />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                 <Switch>
                    <Route exact path={path}>
                        {/* <DashboardHome></DashboardHome> */}
                    </Route>
                    <Route path={`${path}/orderPay`}>
                        <OrderPay></OrderPay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/login`}>
                        <Login></Login>
                    </Route>
                    <AdminRoute path={`${path}/addCar`}>
                        <AddCar></AddCar>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageCar`}>
                        <ManageCar></ManageCar>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
   
    window: PropTypes.func,
};

export default Dashboard;
