import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import SocialLinks from "./sub/SocialLinks";
import {email, socialLinks, bottom1stTest, bottom2ndText} from '../vars/contactItems'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Contact = (props) => (
    <Grid>
        <Paper style={{padding: 16}}>
            Contact me via Email
            <Typography>
                {email}
            </Typography>
        </Paper>

        <SocialLinks name='My Other Social Links' list={socialLinks} marginTop={16}/>

        <Paper style={{padding: 16, marginTop: 16, marginBottom: 16}}>
            {bottom1stTest}
            <Typography>
                {bottom2ndText}
            </Typography>
        </Paper>

    </Grid>
);

Contact.propTypes = {};

export default withStyles(styles)(Contact);