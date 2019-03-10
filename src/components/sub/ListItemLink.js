import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class ListItemLink extends Component {
    renderLink = itemProps => <Link style={{textDecoration: 'none'}}
                                    to={this.props.to} {...itemProps} />;

    render() {
        const {icon, primary} = this.props;
        return (
            <ListItem button component={this.renderLink}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary}/>
            </ListItem>
        );
    }
}

ListItemLink.propTypes = {
    icon: PropTypes.node.isRequired,
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default withStyles(styles)(ListItemLink);