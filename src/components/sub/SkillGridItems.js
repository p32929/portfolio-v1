import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper/Paper";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar/GridListTileBar";
import Divider from "@material-ui/core/es/Divider/Divider";


const styles = {
    subHeader: {
        color: '#212121',
        fontSize: 18
    },
    divider: {
        marginBottom: 32
    },
    paper: {
        margin: 0
    },
    tile: {
        padding: 16
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'relative',
        objectFit: 'contain'
    },
};

const mtb = [
    {
        marginTop: 0,
        marginBottom: 0,
    },
    {
        marginTop: 16,
        marginBottom: 0,
    },
    {
        marginTop: 16,
        marginBottom: 16,
    },

]

const SkillGridItems = (props) => {
    const {name, list, margins} = props;

    return (
        <Paper style={mtb[margins]}>
            <GridList cols={5} style={styles.tile}>
                <GridListTile key="Subheader" cols={5} style={{height: 'auto'}}>
                    <ListSubheader
                        style={styles.subHeader}
                        component="div">{name}</ListSubheader>

                    <Divider style={styles.divider}/>
                </GridListTile>

                {
                    list.map((tile, index) => (
                        <GridListTile
                            cols={1}
                            key={index}
                        >
                            <img style={styles.img}
                                 src={tile.logo} alt={tile.title}/>

                            <GridListTileBar
                                title={tile.title}
                            />

                        </GridListTile>
                    ))
                }

            </GridList>
        </Paper>
    )
};

SkillGridItems.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    marginTop: PropTypes.number.isRequired,
};

export default withStyles(styles)(SkillGridItems);