import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import WorksGridItems from "./sub/WorksGridItems";
import {androidApps, androidLibs, desktopApps, webApps, others} from '../vars/projectItems'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Projects = (props) => (
    <Grid>
        <WorksGridItems name='Android Apps' list={androidApps} marginTop={0}/>
        <WorksGridItems name='Android Libraries' list={androidLibs} marginTop={16}/>
        <WorksGridItems name='Desktop Apps' list={desktopApps} marginTop={16}/>
        <WorksGridItems name='Web Apps' list={webApps} marginTop={16}/>
        <WorksGridItems name='Others' list={others} marginTop={16}/>
    </Grid>
)

Projects.propTypes = {};

export default withStyles(styles)(Projects);