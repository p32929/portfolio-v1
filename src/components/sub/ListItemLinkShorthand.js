import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

function ListItemLinkShorthand(props) {
    const {primary, to} = props;
    return (
        <ListItem target="_blank" style={{textDecoration: 'none'}} component='a' href={to} button>
            <ListItemText primary={primary}/>
        </ListItem>
    );
}

ListItemLinkShorthand.propTypes = {
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default withStyles(styles)(ListItemLinkShorthand);