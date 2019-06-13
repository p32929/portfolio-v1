import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/es/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/es/Divider/Divider";
import {myDetails, myName, myOccupation, myImageLink} from './../vars/homeItems'

const size = 200;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },

});

const style = {
    avatar: {height: size, width: size, marginTop: 32},
    detailsGrid: {
        padding: 24
    },
    divider: {
        width: '100%',
        height: 2
    },
    title: {
        color: '#212121',
        fontSize: 24
    },
    subtitle: {
        color: '#757575',
        fontSize: 18
    },
    details: {
        color: '#212121',
        fontSize: 18,
        margin: 24
    }
};

const Home = (props) => (
    <Grid container
          direction="column">
        <Paper>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">

                <Avatar alt={myName} src={myImageLink}
                        style={style.avatar}/>

                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      style={style.detailsGrid}
                >
                    <Typography style={style.title}>
                        {myName}
                    </Typography>

                    <Typography style={style.subtitle}>
                        {myOccupation}
                    </Typography>
                </Grid>

                <Divider style={style.divider}/>

            </Grid>

            <Typography style={style.details}>
                {myDetails}
            </Typography>
        </Paper>
    </Grid>
);

Home.propTypes = {};

export default withStyles(styles)(Home);