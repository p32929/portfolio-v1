import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import WorksGridItems from "./sub/ProjectGridItems";
import {androidApps, androidLibs, desktopApps, NDAs, others, webApps} from '../vars/projectItems'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Projects = (props) => (
    <Grid>
        <WorksGridItems name='Android Apps' list={androidApps} margins={0}/>
        <WorksGridItems name='Android Libraries' list={androidLibs} margins={1}/>
        <WorksGridItems name='Desktop Apps/Scripts' list={desktopApps} margins={1}/>
        <WorksGridItems name='Web Apps' list={webApps} margins={1}/>
        <WorksGridItems name='NDAs (Non Disclosure Agreements)' list={NDAs} margins={1}/>
        <WorksGridItems name='Others' list={others} margins={2}/>
    </Grid>
);

Projects.propTypes = {};

export default withStyles(styles)(Projects);