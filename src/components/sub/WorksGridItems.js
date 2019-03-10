import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper/Paper";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar/GridListTileBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {icons} from '../../vars/workItems'
import Divider from "@material-ui/core/es/Divider/Divider";
import ListItem from "@material-ui/core/ListItem/ListItem";

function getIcon(url) {
    var index = 0;
    for (var i = 0; i < icons.length; i++) {
        if (url.startsWith(icons[i].url)) {
            index = i
            break;
        }
    }
    return icons[index].icon;
}

const styles = {
    paper: {
        margin: 0
    },
    subHeader: {
        color: '#212121',
        fontSize: 18
    },
    icon: {
        color: '#FFF'
    },
    divider: {
        marginBottom: 32
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
}

const WorksGridItems = (props) => {
    const {classes, name, list, marginTop} = props;
    return (
        <Paper
            style={{marginTop: marginTop}}>
            <GridList cols={4} style={styles.tile}>
                <GridListTile key="Subheader" cols={4} style={{height: 'auto'}}>
                    <ListSubheader
                        style={styles.subHeader}
                        component="div">{name}</ListSubheader>

                    <Divider style={styles.divider}/>

                </GridListTile>

                {
                    list.map((tile, index) => (
                        <GridListTile
                            key={index}
                            cols={1}>

                            <img
                                style={styles.img}
                                src={tile.logo} alt={tile.title}/>

                            <GridListTileBar
                                title={tile.title}
                                subtitle={tile.subtitle}
                                actionIcon={
                                    <IconButton style={styles.icon}
                                                target="_blank"
                                                href={tile.link}>
                                        <SvgIcon style={styles.icon}>
                                            {getIcon(tile.link)}
                                        </SvgIcon>
                                    </IconButton>
                                }/>

                        </GridListTile>
                    ))
                }

            </GridList>
        </Paper>
    )
}

WorksGridItems.propTypes = {
    name: PropTypes.object.isRequired,
    list: PropTypes.object.isRequired,
    marginTop: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorksGridItems);