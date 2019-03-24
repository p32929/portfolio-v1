import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import SkillGridItems from "./sub/SkillGridItems";
import {frameworks, languages, techs} from '../vars/skillItems'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Skills = (props) => (
    <Grid>
        <SkillGridItems name='Programming/Markup Languages' list={languages} margins={0}/>
        <SkillGridItems name='Frameworks' list={frameworks} margins={1}/>
        <SkillGridItems name='Others' list={techs} margins={2}/>
    </Grid>
);

Skills.propTypes = {};

export default withStyles(styles)(Skills);