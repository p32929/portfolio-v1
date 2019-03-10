import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import WorksGridItems from "./sub/WorksGridItems";
import {androidApps, androidLibs, desktopApps, webApps, others} from '../vars/workItems'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Projects = (props) => (
    <Grid>
        <WorksGridItems name='Android Apps' list={androidApps} marginTop={0}/>
        <WorksGridItems name='Android Libraries' list={androidLibs} marginTop={32}/>
        <WorksGridItems name='Desktop Apps' list={desktopApps} marginTop={32}/>
        <WorksGridItems name='Web Apps' list={webApps} marginTop={32}/>
        <WorksGridItems name='Others' list={others} marginTop={32}/>
    </Grid>
)

Projects.propTypes = {};

export default withStyles(styles)(Projects);