import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {lowerItems, upperItems} from './../vars/drawerItems'
import {MemoryRouter} from 'react-router-dom'
import Routes from "./Routes";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemLink from "./sub/ListItemLink";
import ListItemLinkShorthand from "./sub/ListItemLinkShorthand";
import ScrollToTop from "./ScrollToTop";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#4CAF50'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
    lists: {
        backgroundColor: theme.palette.background.paper,
    },
    listLink: {
        textDecoration: 'none'
    },
    toolbarText: {
        flexGrow: 1,
        color: "#FFF"
    },
    toolbarIcon: {
        marginRight: 16
    },
    grow: {
        flexGrow: 1
    },
});

function ClippedDrawer(props) {
    const {classes} = props;

    return (
        <MemoryRouter>
            <ScrollToTop>
                <div className={classes.root}>
                    <CssBaseline/>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
                                Fayaz Bin Salam
                            </Typography>

                            <IconButton
                                href="https://github.com/p32929"
                                color="inherit">
                                <SvgIcon>
                                    <path
                                        d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
                                </SvgIcon>
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar}/>

                        <div className={classes.lists}>
                            <List>
                                {
                                    upperItems.map((item, index) => (
                                        <ListItemLink key={index} to={item.to} primary={item.myName} icon={item.icon}/>
                                    ))
                                }
                            </List>
                            <Divider style={{marginTop: 16}}/>

                            <Typography style={{color: '#212121', margin: 16, fontSize: 18, fontStyle: 'italic'}}>
                                My Social Links
                            </Typography>

                            <Divider/>

                            <List>
                                {
                                    lowerItems.map((item, index) => (
                                        <ListItemLinkShorthand key={index} primary={item.myName} to={item.URL}/>
                                    ))
                                }
                            </List>
                        </div>

                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>

                        <Routes/>

                    </main>
                </div>
            </ScrollToTop>
        </MemoryRouter>
    );
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);