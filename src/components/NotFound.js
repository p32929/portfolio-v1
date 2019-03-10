import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";


const styles = theme => ({
    root: {},
});

const NotFound = (props) => {
    const {classes} = props;
    return (
        <Grid>
            <Paper>

                <Typography style={{padding: 200, margin: 0, textAlign: 'center', fontSize: 24}}>
                    Page not found
                </Typography>

            </Paper>
        </Grid>
    )
}

NotFound.propTypes = {};

export default withStyles(styles)(NotFound);