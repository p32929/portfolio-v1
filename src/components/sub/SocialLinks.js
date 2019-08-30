import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper/Paper";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar/GridListTileBar";
import Divider from "@material-ui/core/es/Divider/Divider";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";

// function getIcon(url) {
//     var index = 2;
//     for (var i = 0; i < icons.length; i++) {
//         if (url.startsWith(icons[i].url)) {
//             index = i;
//             break;
//         }
//     }
//     return icons[index].icon;
// }

const styles = {
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
};

const SocialLinks = (props) => {
    const {name, list, marginTop} = props;

    return (
        <Paper
            style={{marginTop: marginTop}}>
            <GridList cols={3} style={styles.tile}>
                <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
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
                                subtitle={tile.link}
                                actionIcon={
                                    <IconButton style={styles.icon}
                                                target="_blank"
                                                href={tile.link}>

                                        {
                                            tile.link.startsWith('https') ?
                                                <SvgIcon style={styles.icon}>
                                                    <path fill="#FFF"
                                                          d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"/>
                                                </SvgIcon> : null
                                        }
                                    </IconButton>
                                }/>

                        </GridListTile>
                    ))
                }

            </GridList>
        </Paper>
    )
};

SocialLinks.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    marginTop: PropTypes.number.isRequired,
};

export default withStyles(styles)(SocialLinks);