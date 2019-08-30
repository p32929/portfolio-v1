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

const newSyles = {
    selectedButton: {
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#4CAF50',
    },
    selectedIcon: {
        color: '#FFF'
    },
    selectedText: {
        color: '#FFFFFF',
    },
}

class ListItemLink extends Component {
    renderLink = itemProps => <Link style={{textDecoration: 'none'}}
                                    to={this.props.to} {...itemProps} />;

    render() {
        const {icon, primary, setRoute, index, route} = this.props;
        return (
            <ListItem
                style={route === index ? newSyles.selectedButton : null}
                button
                onClick={() => {
                    setRoute(index)
                }}
                component={this.renderLink}>
                <ListItemIcon
                    style={route === index ? newSyles.selectedIcon : null}
                >{icon}</ListItemIcon>
                <ListItemText
                    disableTypography
                    style={route === index ? newSyles.selectedText : null}
                    primary={primary}/>
            </ListItem>
        );
    }
}

ListItemLink.propTypes = {
    icon: PropTypes.element.isRequired,
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default withStyles(styles)(ListItemLink);