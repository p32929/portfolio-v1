import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import SkillGridItems from "./sub/SkillGridItems";
import {languages, frameworks, techs} from '../vars/skillItems'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Skills = (props) => (
    <Grid>
        <SkillGridItems name='Programming/Markup Languages' list={languages} marginTop={0}/>
        <SkillGridItems name='Frameworks' list={frameworks} marginTop={16}/>
        <SkillGridItems name='Others' list={techs} marginTop={16}/>
    </Grid>
)

Skills.propTypes = {};

export default withStyles(styles)(Skills);